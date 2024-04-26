import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDestReviews } from "../axios_fetch/fetch";
import { getUsers } from "../axios_fetch/fetch";
import AddReviewForm from "../Form/FormReview/AddReview";
import axios from "axios";
import "./detail.css";
// import RatingStars from "./RatingStars";
import { jwtDecode } from "jwt-decode";

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allReviews, setAllReviews] = useState([]);
  const [userId, setUserId] = useState("");

  const getDestination = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/getDestination/${id}`
      );
      if (response.status === 404) {
        console.error("Page not found", response.data);
      }
      if (response.status === 401) {
        console.error("No authorization", response.data);
      }
      if (response.status === 500) {
        console.error("Internal Server Error", response.data);
      }
      setDestination(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error get destination", error);
      setLoading(false);
    }
  };

  const getReviews = async (destId) => {
    try {
      const userResponse = await getUsers();
      const userData = userResponse.data;
      const token = localStorage.getItem("auth");
      const decodedToken = token ? jwtDecode(token) : null;
      const firstUserId = decodedToken ? decodedToken.userId : "";
      setUserId(firstUserId);

      const reviewsResponse = await getDestReviews(destId);
      const reviewsData = reviewsResponse.data;

      const reviewsWithUserName = reviewsData.map((review, counter) => {
        const user = userData.find(
          (currentUser) => currentUser._id === review.name
        );
        const userName = user ? user.name : "Utente anonimo";
        const userAvatar = user ? user.avatar : null;
        return { ...review, userName, userAvatar, showFullReview: false };
      });
      setAllReviews(reviewsWithUserName);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDestination();
    getReviews(id);
  }, [id]);

  const toggleFullReview = (index) => {
    setAllReviews((prevReviews) => {
      const updatedReviews = prevReviews.map((review, i) => {
        if (i === index) {
          return { ...review, showFullReview: !review.showFullReview };
        }
        return review;
      });
      return updatedReviews;
    });
  };

  if (loading) {
    return <div> Caricamento... </div>;
  }

  if (!destination) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  return (
    <>
      <div className="row container-detail flex-column align-items-center flex-wrap w-100">
        <div className="title-location col-md-6 text-center pt-3 pb-3">
          <h2> {destination.travel_location} </h2>
        </div>
        <div className="col-lg-6 page-img">
          <img
            className="w-100 mb-2 cover-img"
            src={destination.cover_image}
            alt="location"
          />
          <p className="text"> {destination.description} </p>
        </div>
        <div className="row gap-2 mb-2 flex-wrap justify-content-center">
          {destination.images_location.map((image, index) => {
            return (
              <div
                key={index}
                className="col-lg-3 col-md-6 images-location page-img"
              >
                {" "}
                <img src={image} alt={`image_${index}`} />
              </div>
            );
          })}
        </div>
        <div className="col-md-10">
          <p className="text"> {destination.main_attractions} </p>
        </div>
        <div className="container-reviews">
          <div className="container-form-add col-lg-12 p-2">
            {<AddReviewForm destId={destination._id} userId={userId} />}
          </div>
          <div className="title-reviews text-center mb-5">
            <h2>
              {" "}
              Recensioni relative a {destination.travel_location}:{" "}
              {allReviews.length}{" "}
            </h2>
          </div>
          <div className="d-flex gap-2">
            {Array.isArray(allReviews) &&
              allReviews.map((rev, i) => {
                return (
                  <div key={i} className="card-review">
                    <div className="name-avatar d-flex align-items-center gap-2">
                      <div id="avatar">
                        {rev.userAvatar && (
                          <img src={rev.userAvatar} alt="User Avatar" />
                        )}
                      </div>
                      <div>
                      <h6> {rev.userName} </h6>
                    </div>
                    </div>
                    {rev.showFullReview ? (
                      <>
                        <p>{rev.comment}</p>
                        <button
                          className="button-toggle"
                          onClick={() => toggleFullReview(i)}
                        >
                          Mostra meno
                        </button>
                      </>
                    ) : (
                      <>
                        <p>{rev.comment.slice(0, 80)}...</p>
                        <button
                          className="button-toggle"
                          onClick={() => toggleFullReview(i)}
                        >
                          Mostra di più
                        </button>
                      </>
                    )}
                    <p>Valutazione: {rev.evaluation_score}/10</p>
                  </div>
                );
              })}
          </div>
          {/* <div className="d-flex gap-2">
          {Array.isArray(allReviews) &&
            allReviews.map((rev, i) => {
              return (
                <div key={i} className="card-review">
                  <div className="name-avatar d-flex align-items-center gap-2">
                    <div id="avatar">
                      {rev.userAvatar && (
                        <img src={rev.userAvatar} alt="User Avatar" />
                      )}
                    </div>
                    <div>
                      <h6> {rev.userName} </h6>
                    </div>
                  </div>
                  <p> {rev.comment} </p>
                  <p> Valutazione: {rev.evaluation_score}/10 </p>
                  
                </div>
              );
            })}
        </div> */}
        </div>
      </div>
    </>
  );
};

export default DestinationDetail;

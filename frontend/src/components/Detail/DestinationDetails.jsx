import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDestReviews } from "../axios_fetch/fetch";
import { getUsers } from "../axios_fetch/fetch";
import AddReviewForm from "../Form/FormReview/AddReview";
import axios from "axios";
import "./detail.css";
import {jwtDecode} from 'jwt-decode';



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
      const token = localStorage.getItem('auth');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken ? decodedToken.userId : "";
      setUserId(userId)
      console.log(userId);

      const reviewsResponse = await getDestReviews(destId);
      const reviewsData = reviewsResponse.data;

      const reviewsWithUserName = reviewsData.map(review => {
        const user = userData.find(user => user.id === review.userId);
        const userName = user ? user.name : 'Anonymous user';
        return {...review, userName}
      })
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


  if (loading) {
    return <div> Caricamento... </div>;
  }

  if (!destination) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  return (
    <>
      <div className="row container-detail flex-column align-items-center flex-wrap w-100">
        <div className="title-location col-md-6 text-center">
          <h2> {destination.travel_location} </h2>
        </div>
        <div className="col-lg-6">
          <img
            className="w-100 mb-2"
            src={destination.cover_image}
            alt="location"
          />
          <p className="text"> {destination.description} </p>
        </div>
        <div className="col-lg-10 row gap-2 mb-2 flex-wrap justify-content-center">
          {destination.images_location.map((image, index) => {
            return (
              <div key={index} className="col-lg-3 images-location">
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
        <div>
          {<AddReviewForm destId={destination._id} userId={userId} />}
        </div>
      <div className="title-reviews text-center mb-5">
        <h2> Recensioni relative a {destination.travel_location}: {allReviews.length} </h2>
        </div>
        {Array.isArray(allReviews) &&
          allReviews.map((rev, i) => {
            return (
              <div key={i} className="card-review">
                <h6> {rev.userName} </h6>
                <p> {rev.comment} </p>
                <p> Valutazione: {rev.evaluation_score}/10 </p>
              </div>
            );
          })}
      </div>
      </div>
    </>
  );
};

export default DestinationDetail;

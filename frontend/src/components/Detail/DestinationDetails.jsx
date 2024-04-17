import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './detail.css'

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

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
  useEffect(() => {
    getDestination();
  }, [id]);

  if (loading) {
    return <div> Caricamento... </div>;
  }
  console.log(destination);

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
          <img className="w-100 mb-2" src={destination.cover_image} alt="location" />
          <p className="text"> {destination.description} </p>
        </div>
        <div className="col-lg-10 row gap-2 mb-2 flex-wrap justify-content-center">
          {destination.images_location.map((image, index) => {
            return <div key={index} className="col-lg-3 images-location"> <img src={image} alt={`image_${index}`} /></div>;
          })}
          
          </div>
          <div className="col-md-10">
          <p className="text"> {destination.main_attractions} </p>
        </div>
      </div>
    </>
  );
};

export default DestinationDetail;

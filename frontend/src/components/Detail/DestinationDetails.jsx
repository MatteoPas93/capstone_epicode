import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
     
        <div className="row">
          <h2> {destination.travel_location} </h2>
          <div>
          <img src={destination.cover_image} alt="location" />
          <p> {destination.description} </p>
          </div>
          <div>
          {destination.images_location.map((image, index) => {
           return <img key={index} src={image} alt={`image_${index}`} />
          })}
          <p> {destination.main_attractions} </p>
          </div>
        </div>
      
    </>
  );
};

export default DestinationDetail;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const WinterDestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWinterDestination = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/getWinterDestination/${id}`
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
      setDestination(response.data.destination);
      setLoading(false);
    } catch (error) {
      console.error("Error get winter destination", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getWinterDestination();
  }, [id]);

  if (loading) {
    return <div> Caricamento... </div>;
  }

  if (!destination) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  return (
    <>
      <div>
        {destination &&
          destination.map((dest) => (
            <div>
              <h2> {dest.travel_location} </h2>
              <img src={dest.cover_image} alt="location" />
              <p> {dest.description} </p>
              <p> {dest.main_attractions} </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default WinterDestinationDetail;
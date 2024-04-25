import React from "react";
import { getDestinations } from "../axios_fetch/fetch";
import { useState, useEffect } from "react";
import "./destForSeason.css";
import { Link } from "react-router-dom";

const Destinations = ({ season }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDest = async () => {
    try {
      const response = await getDestinations();
      setDestinations(response.data.destinations);
      setLoading(false);
    } catch (error) {
      console.error("Error get summer destinations");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDest();
  }, []);

  const filteredDestinations =
    season === "all"
      ? destinations
      : destinations.filter((dest) => dest.season.includes(season));

  if (loading) {
    return <div> Caricamento... </div>;
  }

  if (
    !Array.isArray(filteredDestinations) ||
    filteredDestinations.length === 0
  ) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  return (
   
      <div className="container-dest w-100 d-flex justify-content-center">
        <div className="card-container d-flex flex-wrap justify-content-start gap-3 mt-4 ">
        {filteredDestinations &&
          filteredDestinations.map((dest) => (
            <Link key={dest._id} to={`/destination_details/${dest._id}`}>
              <div  className="card-dest col-lg-2 mt-2 mb-2">
                <h2> {dest.travel_location} </h2>
                <img src={dest.cover_image} alt="cover" />
                <h4> Prezzo: {dest.price}€ </h4>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Destinations;

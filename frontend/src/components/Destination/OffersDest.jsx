import React from "react";
import { useDestinationsContext } from "../Context/destinationsContext";
import './offers.css'

const Offers = () => {
  const { destinations, loading: destinationsLoading } =
    useDestinationsContext();

  if (destinationsLoading) {
    return <div> Caricamento... </div>;
  }

  if (!Array.isArray(destinations) || destinations.length === 0) {
    return <div>Nessuna destinazione trovata!</div>;
  }

  const offersFiltered = destinations.filter(
    (dest) => dest.season === "offers"
  );
  console.log(offersFiltered);

  return (
    <div className="container-page mt-3 d-flex justify-content-center w-100">
        <div className="container-offers">
      {offersFiltered &&
        offersFiltered.map((offer) => (
          <div key={offer._id} className="offer-card">
            <h2> {offer.travel_location} </h2>
            <img src={offer.cover_image} alt="cover" />
            <h4> {offer.price} </h4>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Offers;

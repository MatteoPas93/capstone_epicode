import React from "react";
import { useDestinationsContext } from "../Context/destinationsContext";
import "./offers.css";
import { Link } from "react-router-dom";

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

  return (
    <div className="container-page mt-3 d-flex align-items-center w-100 flex-column">
      <div className="title-offers w-100 text-center mb-3">
        <h3>Viaggi in offerta: {offersFiltered.length} </h3>
      </div>
      <div className="container-offers d-flex gap-3">
        {offersFiltered &&
          offersFiltered.map((offer) => (
            <Link key={offer._id} to={`/destination_details/${offer._id}`}>
            <div className="offer-card">
              <h2> {offer.travel_location} </h2>
              <img src={offer.cover_image} alt="cover" />
              <h4> <del style={{color: 'red'}}>85</del>
                {" "}
                {offer.price}€ a notte{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-emoji-surprise"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7 5.5C7 6.328 6.552 7 6 7s-1-.672-1-1.5S5.448 4 6 4s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 4 10 4s1 .672 1 1.5M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                </svg>{" "}
              </h4>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Offers;

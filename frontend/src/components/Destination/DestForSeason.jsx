import React from "react";
import { getDestinations } from "../axios_fetch/fetch";
import { useState, useEffect } from "react";
import "./destForSeason.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Destinations = ({ season }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchDest, setSearchDest] = useState("");

  const fetchDest = async () => {
    try {
      const response = await getDestinations();
      setDestinations(response.data.destinations);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error get summer destinations");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDest();
  }, []);

  // const filteredDestinations =
  //   season === "all"
  //     ? destinations
  //     : destinations.filter((dest) => dest.season.includes(season));

  const filteredDestinations = destinations
    .filter((dest) => dest.season.includes(season))
    .filter((dest) =>
      dest.travel_location.toLowerCase().includes(searchDest.toLowerCase())
    );

  if (loading) {
    return (
      <div className="spinner-loading">
      {loading && (
        <div className="d-flex align-items-center">
          <Spinner className="spin" animation="border" role="status" variant="warning">
            <span className="visually-hidden">Caricamento...</span>
          </Spinner>
        </div>
      )}
    </div>
    );
  }

  if (
    !Array.isArray(filteredDestinations) ||
    filteredDestinations.length === 0
  ) {
    return (
      <div className="no-destination d-flex flex-column align-items-center mt-4 search-bar">
        <div className="mb-5">
          <h6>Cerca la meta giusta per te:</h6>
          <input
            type="text"
            placeholder="inserisci destinazione..."
            value={searchDest}
            onChange={(e) => setSearchDest(e.target.value)}
          />
        </div>
        <div>
          <h2>Nessuna destinazione trovata!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mt-4 search-bar">
      <h6>Cerca la meta giusta per te:</h6>
      <input
        type="text"
        placeholder="inserisci destinazione..."
        value={searchDest}
        onChange={(e) => setSearchDest(e.target.value)}
      />
      <div className="container-dest w-100 d-flex justify-content-center">
        <div className="card-container d-flex flex-wrap justify-content-start gap-3 mt-4 ">
          {filteredDestinations &&
            filteredDestinations.map((dest) => (
              <Link key={dest._id} to={`/destination_details/${dest._id}`}>
                <div className="card-dest col-lg-2 mt-2 mb-2">
                  <h2> {dest.travel_location} </h2>
                  <img src={dest.cover_image} alt="cover" />
                  <h4> Da {dest.price}€ a settimana </h4>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;

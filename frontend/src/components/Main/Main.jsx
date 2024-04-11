import React from "react";
import { getWinterDestinations } from "../../axios_fetch/fetch";
import { useEffect, useState } from "react";

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [totalPages, setTotalPages] = useState(0);

  const fetchWinterDest = async () => {
    try {
     const response = await getWinterDestinations()
      setDestinations(response.data.destinations);
      setLoading(false);
    } catch (error) {
      console.error("Error get winter destinations", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWinterDest();
  }, []);

  if (loading) {
    return <div> Caricamento... </div>;
  }

  if (!Array.isArray(destinations) || destinations.length === 0) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  return (
    <>
      <div className="container-destinations">
          {destinations && destinations.map((destination) => {
            return (
                <div key={destination._id}>
                    <h2> {destination.travel_location} </h2>
                    <img src={destination.cover_image} alt="cover" />
                </div>
            )
          })}
      </div>
    </>
  );
};

export default Main;

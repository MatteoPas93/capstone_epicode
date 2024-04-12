import React from "react";
import { getWinterDestinations } from "../../../axios_fetch/fetch";
import { useState, useEffect } from "react";
import "./destinations.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";


const WinterDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [pageSize, setPageSize] = useState(8);
  //   const [totalPages, setTotalPages] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const fetchWinterDest = async () => {
    try {
      const response = await getWinterDestinations();
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

  const halfIndex = Math.ceil(destinations.length / 2);
  const firstSlide = destinations.slice(0, halfIndex);
  const secondSlide = destinations.slice(halfIndex);

  return (
    <>
    <div className="container-destinations">
    <h1>Le nostre destinazioni invernali</h1>
      <Carousel className="div-carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="container-slide">
            {firstSlide.map((destination) => (
              <div key={destination._id} className="card_location">
                <h2>{destination.travel_location}</h2>
                <img src={destination.cover_image} alt="cover" />
              </div>
            ))}
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-slide">
            {secondSlide.map((destination) => (
              <div key={destination._id} className="card_location">
                <h2>{destination.travel_location}</h2>
                <img src={destination.cover_image} alt="cover" />
              </div>
            ))}
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
};

export default WinterDestinations;

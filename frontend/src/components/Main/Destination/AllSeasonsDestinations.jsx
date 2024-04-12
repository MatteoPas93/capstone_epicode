import React from "react";
import { getAllSeasonsDestinations } from "../../../axios_fetch/fetch";
import { useState, useEffect } from "react";
import './destinations.css';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const AllSeasonsDestination = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const fetchSummerDest = async () => {
        try {
            const response = await getAllSeasonsDestinations();
            setDestinations(response.data.destinations);
            setLoading(false);
        } catch (error) {
            console.eerror('Error get summer destinations', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSummerDest();
    }, []);

    if (loading) {
        return <div> Caricamento... </div>
    }
    
    if (!Array.isArray(destinations) || destinations.length === 0) {
        return <div> Nessuna destinazione trovata! </div>
    }

    const halfIndex = Math.ceil(destinations.length / 2);
    const firstSlide = destinations.slice(0, halfIndex);
    const secondSlide = destinations.slice(halfIndex);

    return (
        <>
        <div className="container-destinations">
        <h1>Destinazioni per tutto l'anno!</h1>
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

export default AllSeasonsDestination;
import React from "react";
import { getDestinations } from "../axios_fetch/fetch";
import { getImages } from "../axios_fetch/fetch";
import { useState, useEffect } from "react";
import "./destinations.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indexSummer, setIndexSummer] = useState(0);
  const [indexWinter, setIndexWinter] = useState(0);
  const [indexAllSeason, setIndexAllSeason] = useState(0);

  const handleSelectSummer = (selectedIndex) => {
    setIndexSummer(selectedIndex);
  };

  const handleSelectWinter = (selectedIndex) => {
    setIndexWinter(selectedIndex);
  };

  const handleSelectAllSeason = (selectedIndex) => {
    setIndexAllSeason(selectedIndex);
  };

  const fetchDest = async () => {
    try {
      const response = await getDestinations();
      setDestinations(response.data.destinations);
      setLoading(false);
    } catch (error) {
      console.error("Error get Destinations", error);
      setLoading(false);
    }
  };

  const fetchImg = async () => {
    try {
      const responseImg = await getImages();
      setImages(responseImg.data);
      console.log(responseImg.data);
      setLoading(false);
    } catch (error) {
      console.error('Error get Images');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDest();
    fetchImg();
  }, []);

  if (loading) {
    return <div> Caricamento... </div>;
  }

  if (!Array.isArray(destinations) || destinations.length === 0) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  const summerSlides = [];
  const winterSlides = [];
  const allSeasonSlides = [];

  for (let i = 0; i < destinations.length; i += 4) {
    const group = destinations.slice(i, i + 4);
    const summerFiltered = group.filter(
      (destination) => destination.season === "summer"
    );
    if (summerFiltered.length > 0) {
      const slideFirstCarousel = (
        <Carousel.Item key={i}>
          <div className="container-slide">
            {summerFiltered.map((destination, index) => (
              <Link
                to={`/destination_details/${destination._id}`}
                key={destination._id}
              >
                <div className={`card_location col-lg-3 col-md-6  ${index >= 2 ? 'd-none d-md-block' : ''}`}>
                  <h2>{destination.travel_location}</h2>
                  <img className="img-fluid" src={destination.cover_image} alt="cover" />
                </div>
              </Link>
            ))}
          </div>
          {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>
      );
      summerSlides.push(slideFirstCarousel);
    }

    const winterFiltered = group.filter(
      (destination) => destination.season === "winter"
    );
    if (winterFiltered.length > 0) {
      const slideSecondCarousel = (
        <Carousel.Item key={i}>
          <div className="container-slide">
            {winterFiltered.map((destination, index) => (
              <Link
                to={`/destination_details/${destination._id}`}
                key={destination._id}
              >
                <div className={`card_location col-md-6 ${index >= 2 ? 'd-none d-md-block' : ''}`}>
                  <h2>{destination.travel_location}</h2>
                  <img src={destination.cover_image} alt="cover" />
                </div>
              </Link>
            ))}
          </div>
          {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>
      );
      winterSlides.push(slideSecondCarousel);
    }

    const allSeasonFiltered = group.filter(
      (destination) => destination.season === "all_seasons"
    );
    if (allSeasonFiltered.length > 0) {
      const slideThirdCarousel = (
        <Carousel.Item key={i}>
          <div className="container-slide">
            {allSeasonFiltered.map((destination, index) => (
              <Link
                to={`/destination_details/${destination._id}`}
                key={destination._id}
              >
                <div className={`card_location col-md-6 ${index >= 2 ? 'd-none d-md-block' : ''}`}>
                  <h2>{destination.travel_location}</h2>
                  <img src={destination.cover_image} alt="cover" />
                </div>
              </Link>
            ))}
          </div>
          {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>
      );
      allSeasonSlides.push(slideThirdCarousel);
    }
  }

  return (
    <>
      <div className="container-destinations">
        <div className="summer_destinations">
          <h1>Destinazioni Estive</h1>
          <Carousel
            className="div-carousel"
            activeIndex={indexSummer}
            onSelect={handleSelectSummer}
            interval={null}
          >
            {summerSlides}
          </Carousel>
        </div>
        <div className="information row align-item-center mt-4 mb-4">
          <div className="text-area col-md-6">
            <h4> Lascia a casa lo stress, ci occupiamo di tutto noi</h4>
            <p> Chi viaggia con DreamsTravel non viaggia mai da solo. Dal momento della partenza a quello del rientro, i nostri accompagnatori mettono a disposizione competenze, cultura e passione per rendere la tua esperienza indimenticabile. È come avere un compagno di viaggio in più, sempre pronto ad assisterti mentre vivi ogni momento al meglio.</p>
          </div>
          <div className="img-area col-md-6">
            {images && images.map((image, index) => (
              <img key={index} src={image.image[1]} alt="img" />
            ))}
          </div>
        </div>
        <div className="winter_destinations">
          <h1>Destinazioni Invernali</h1>
          <Carousel
            className="div-carousel"
            activeIndex={indexWinter}
            onSelect={handleSelectWinter}
            interval={null}
          >
            {winterSlides}
          </Carousel>
        </div>
        <div className="information row align-item-center mt-4 mb-4">
        <div className="img-area col-md-6">
            {images && images.map((image, index) => (
              <img key={index} src={image.image[3]} alt="img" />
            ))}
          </div>
          <div className="text-area col-md-6">
            <h4> Chi torna da un viaggio DreamsTravel porta con sé un ricordo indelebile. Lo dimostrano i tanti clienti affezionati che viaggiano con noi.</h4>
          </div>
        </div>
        <div className="all_season_destinations">
          <h1>Mete per tutto l'anno</h1>
          <Carousel
            className="div-carousel"
            activeIndex={indexAllSeason}
            onSelect={handleSelectAllSeason}
            interval={null}
          >
            {allSeasonSlides}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Destinations;

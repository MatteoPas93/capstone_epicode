import React from "react";
import { useDestinationsContext } from "../Context/destinationsContext";
import { useImagesContext } from "../Context/imagesContext";
import { useState } from "react";
import "./destinations.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Destinations = () => {
  const { destinations, loading: destinationsLoading } =
    useDestinationsContext();
  const { images, loading: imagesLoading } = useImagesContext();
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

  if (destinationsLoading || imagesLoading) {
    return (
      <div className="spinner-loading">
        {destinationsLoading && imagesLoading && (
          <div className="d-flex align-items-center">
            <Spinner
              className="spin"
              animation="border"
              role="status"
              variant="warning"
            >
              <span className="visually-hidden">Caricamento...</span>
            </Spinner>
          </div>
        )}
      </div>
    );
  }

  if (!Array.isArray(destinations) || destinations.length === 0) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  const summerSlides = [];
  const winterSlides = [];
  const allSeasonSlides = [];

  for (let i = 0; i < destinations.length; i += 4) {
    const summerFiltered = destinations.filter(
      (destination) => destination.season === "summer"
    );
    const groupSummer = summerFiltered.slice(i, i + 4);

    if (groupSummer.length > 0) {
      const slideFirstCarousel = (
        <Carousel.Item key={i}>
          <div className="container-slide">
            {groupSummer.map((destination, index) => (
              <Link
                className="decoration-link"
                to={`/destination_details/${destination._id}`}
                key={destination._id}
              >
                <div
                  className={`card_location col-lg-3 col-md-6  ${
                    index >= 2 ? "d-none d-md-block" : ""
                  }`}
                >
                  <h2>{destination.travel_location}</h2>
                  <img
                    className="img-fluid"
                    src={destination.cover_image}
                    alt="cover"
                  />
                  <h6>A partire da {destination.price}€</h6>
                </div>
              </Link>
            ))}
          </div>
        </Carousel.Item>
      );
      summerSlides.push(slideFirstCarousel);
    }
  }

  for (let i = 0; i < destinations.length; i += 4) {
    const winterFiltered = destinations.filter(
      (destination) => destination.season === "winter"
    );
    const groupWinter = winterFiltered.slice(i, i + 4);
    if (groupWinter.length > 0) {
      const slideSecondCarousel = (
        <Carousel.Item key={i}>
          <div className="container-slide">
            {groupWinter.map((destination, index) => (
              <Link
                className="decoration-link"
                to={`/destination_details/${destination._id}`}
                key={destination._id}
              >
                <div
                  className={`card_location col-md-6 ${
                    index >= 2 ? "d-none d-md-block" : ""
                  }`}
                >
                  <h2>{destination.travel_location}</h2>
                  <img src={destination.cover_image} alt="cover" />
                  <h6>A partire da {destination.price}€</h6>
                </div>
              </Link>
            ))}
          </div>
        </Carousel.Item>
      );
      winterSlides.push(slideSecondCarousel);
    }
  }

  for (let i = 0; i < destinations.length; i += 4) {
    const allSeasonFiltered = destinations.filter(
      (destination) => destination.season === "all_seasons"
    );
    const groupAll = allSeasonFiltered.slice(i, i + 4);
    if (groupAll.length > 0) {
      const slideThirdCarousel = (
        <Carousel.Item key={i}>
          <div className="container-slide">
            {groupAll.map((destination, index) => (
              <Link
                className="decoration-link"
                to={`/destination_details/${destination._id}`}
                key={destination._id}
              >
                <div
                  className={`card_location col-md-6 ${
                    index >= 2 ? "d-none d-md-block" : ""
                  }`}
                >
                  <h2>{destination.travel_location}</h2>
                  <img src={destination.cover_image} alt="cover" />
                  <h6>A partire da {destination.price}€</h6>
                </div>
              </Link>
            ))}
          </div>
        </Carousel.Item>
      );
      allSeasonSlides.push(slideThirdCarousel);
    }
  }

  return (
    <>
      <div className="container-destinations">
        <div className="information row align-items-center mt-4 mb-4">
          <div className="img-area col-md-6">
            {images &&
              images.map((image, index) => (
                <img key={index} src={image.image[16]} alt="img" />
              ))}
          </div>
          <div className="text-area col-md-6 size-font mt-2">
            <p>
              {" "}
              Esplora il mondo con DreamsTravel: il tuo compagno affidabile per
              avventure senza confini, dove ogni viaggio diventa un sogno da
              realizzare. Scopri destinazioni mozzafiato, vivi esperienze uniche
              e lasciati trasportare in un universo di emozioni senza fine. Con
              DreamsTravel, il viaggio diventa la tua personale epopea, dove
              ogni istante è un'opportunità per creare ricordi indelebili e
              lasciare un'impronta indelebile nei tuoi sogni.
            </p>
          </div>
        </div>
        <div className="summer_destinations d-flex flex-column align-items-center">
          <div className="title mb-2">
            <h1>Destinazioni Estive</h1>
          </div>
          <Carousel
            className="div-carousel"
            activeIndex={indexSummer}
            onSelect={handleSelectSummer}
            interval={null}
          >
            {summerSlides}
          </Carousel>
        </div>
        <div className="information row align-items-center mt-4 mb-4">
          <div className="text-area col-md-6 size-font mb-2">
            <h5> Lascia a casa lo stress, ci occupiamo di tutto noi</h5>
            <p>
              {" "}
              Chi viaggia con DreamsTravel non viaggia mai da solo. Dal momento
              della partenza a quello del rientro, i nostri accompagnatori
              mettono a disposizione competenze, cultura e passione per rendere
              la tua esperienza indimenticabile. È come avere un compagno di
              viaggio in più, sempre pronto ad assisterti mentre vivi ogni
              momento al meglio.
            </p>
          </div>
          <div className="img-area col-md-6">
            {images &&
              images.map((image, index) => (
                <img key={index} src={image.image[1]} alt="img" />
              ))}
          </div>
        </div>
        <div className="winter_destinations d-flex flex-column align-items-center">
          <div className="title mb-2">
            <h1>Destinazioni Invernali</h1>
          </div>
          <Carousel
            className="div-carousel"
            activeIndex={indexWinter}
            onSelect={handleSelectWinter}
            interval={null}
          >
            {winterSlides}
          </Carousel>
        </div>
        <div className="information row align-items-center mt-4 mb-4">
          <div className="img-area col-md-6">
            {images &&
              images.map((image, index) => (
                <img key={index} src={image.image[15]} alt="img" />
              ))}
          </div>
          <div className="text-area col-md-6 size-font mt-2">
            <p>
              {" "}
              Celebra la tua voglia di scoprire, immagina nuovi orizzonti e
              coltiva i tuoi sogni con DreamsTravel. Siamo qui per trasformare
              il desiderio di viaggiare in un'esperienza straordinaria,
              offrendoti le chiavi per aprire le porte del mondo. Ogni viaggio
              con noi è un invito a esplorare, a imparare e a connetterti con
              luoghi e culture nuove, mentre costruiamo insieme ricordi
              indelebili. Affida i tuoi sogni alla nostra passione e al nostro
              impegno: da ogni angolo del globo, ti aspettano avventure
              straordinarie con DreamsTravel.
            </p>
          </div>
        </div>
        <div className="all_season_destinations d-flex flex-column align-items-center">
          <div className="title mb-2">
            <h1>Mete per tutto l'anno</h1>
          </div>
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

import React, { useEffect, useState } from "react";
import { getDestinations } from "../axios_fetch/fetch";
import "./adminDest.css";
import { deleteDestination } from "../axios_fetch/fetch";
import UpdateDest from "../Form/FormUpdate/FormUpdateDest";
import AddDestForm from "../Form/FormAddDest/AddDestForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

const DestinationManagement = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [season, setSeason] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState();

  const fetchDest = async () => {
    try {
      const response = await getDestinations(currentPage);
      setDestinations(response.data.destinations);
      setTotalPages(response.data.totalPages);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error get destinations", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDest();
  }, [currentPage]);

  const deleteDest = async (destId) => {
    try {
      await deleteDestination(destId);
      setDestinations(destinations.filter((dest) => dest._id !== destId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = async () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
    try {
      const response = await getDestinations(currentPage);
      setDestinations(response.data.destinations);
    } catch (error) {
      console.error(error)
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (loading) {
    return (
      <div className="spinner-loading">
        {loading && (
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

  if (!Array.isArray(destinations || destinations.length === 0)) {
    return <div> Nessuna destinazione trovata! </div>;
  }

  const handleInfoUpdate = (newPrice, newImage, newSeason) => {
    setPrice({
      ...price,
      newPrice,
    });
    setImage({
      ...image,
      newImage,
    });
    setSeason({
      ...season,
      newSeason,
    });
    window.location.reload();
  };

  return (
    <>
      <div className="container-destinations d-flex w-100 gap-3 justify-content-evenly flex-wrap flex-row mb-4">
        <div className="container-add-dest text-center mt-4">
          <h3> Aggiungi/Modifica destinazioni:</h3>
          {<AddDestForm />}
        </div>

        {destinations &&
          destinations.map((dest, index) => (
            <div key={index} className="card-dest">
              <h4> {dest.travel_location} </h4>
              <img src={dest.cover_image} alt="cover" />
              <div className="row justify-content-center">
                <div className="col-md-6 button-edit">
                  {
                    <UpdateDest
                      destId={dest._id}
                      currentPrice={dest.price}
                      currentImage={dest.cover_image}
                      currentSeason={dest.season}
                      onPriceUpdate={handleInfoUpdate}
                    />
                  }
                </div>
              </div>
              <div className="button-delete pb-2 pt-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteDest(dest._id)}
                >
                  Elimina destinazione
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="pagination-buttons d-flex justify-content-center gap-2">
        <button
          className="btn btn-primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Pagina precedente
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Pagina successiva
        </button>
      </div>
    </>
  );
};

export default DestinationManagement;

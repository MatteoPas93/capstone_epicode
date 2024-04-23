import React, { useEffect, useState } from "react";
import { getDestinations } from "../axios_fetch/fetch";
import "./adminDest.css";
import { deleteDestination } from "../axios_fetch/fetch";
import UpdateDest from "../Form/FormUpdate/FormUpdateDest";
import AddDestForm from "../Form/FormAddDest/AddDestForm";

const DestinationManagement = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);

  const fetchDest = async () => {
    try {
      const response = await getDestinations();
      setDestinations(response.data.destinations);
      setLoading(false);
    } catch (error) {
      console.error("Error get destinations", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDest();
  }, []);

  const deleteDest = async (destId) => {
    try {
      await deleteDestination(destId);
      setDestinations(destinations.filter((dest) => dest._id !== destId));
    } catch (error) {
      console.error(error);
    }
  }

    if (loading) {
      return <div> Caricamento... </div>;
    }

    if (!Array.isArray(destinations || destinations.length === 0)) {
      return <div> Nessuna destinazione trovata! </div>;
    }

    const handlePriceUpdate = (newPrice) => {
     setPrice({
      ...price,
      newPrice
     })
     window.location.reload()
    };

    return (
      <div className="container-destinations d-flex w-100 gap-4 justify-content-evenly flex-wrap flex-row">
         <div className="container-add-dest text-center">
         <h3> Aggiungi/Modifica destinazioni:</h3>
          {<AddDestForm/>} 
          </div>
        {destinations &&
          destinations.map((dest, index) => (
            <div key={index} className="card-dest">
              <h4> {dest.travel_location} </h4>
              <img src={dest.cover_image} alt="cover" />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h6>Prezzo: {dest.price}</h6>
                </div>
                <div className="col-md-6 button-edit">
                  {<UpdateDest destId={dest._id} currentPrice={price[dest._id] || dest.price} onPriceUpdate={handlePriceUpdate}/>} 
                </div>
              </div>
              <div className="button-delete pb-2 pt-2">
                <button type="button" onClick={() => deleteDest(dest._id)}>
                  Elimina destinazione
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  };

export default DestinationManagement;

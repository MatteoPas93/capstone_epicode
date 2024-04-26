import React, { createContext, useContext, useState, useEffect } from "react";
import { getDestinations } from "../axios_fetch/fetch";

const DestinationsContext = createContext();

export const useDestinationsContext = () => useContext(DestinationsContext);

export const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDest();
  }, []);

  const fetchDest = async () => {
    try {
      const response = await getDestinations();
      setDestinations(response.data.destinations);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting Destinations", error);
      setLoading(false);
    }
  };

  return (
    <DestinationsContext.Provider value={{ destinations, loading }}>
      {children}
    </DestinationsContext.Provider>
  );
};
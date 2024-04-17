import React, { createContext, useContext, useState, useEffect } from "react";
import { getImages } from "../axios_fetch/fetch";

const ImagesContext = createContext();

export const useImagesContext = () => useContext(ImagesContext);

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImg();
  }, []);

  const fetchImg = async () => {
    try {
      const responseImg = await getImages();
      setImages(responseImg.data);
      setLoading(false);
    } catch (error) {
      console.error('Error getting Images', error);
      setLoading(false);
    }
  };

  return (
    <ImagesContext.Provider value={{ images, loading }}>
      {children}
    </ImagesContext.Provider>
  );
};
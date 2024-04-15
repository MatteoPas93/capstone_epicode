import axios from "axios";

// !Get Destinations
export const getDestinations = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getDestinations`
    );

    if (response.status === 404) {
      console.error("Page not found", response.data);
    }
    if (response.status === 401) {
      console.error("No authorization", response.data);
    }
    if (response.status === 500) {
      console.error("Internal Server Error", response.data);
    }
    return response;
  } catch (error) {
    console.error("Error get winter location");
    throw error;
  }
};

// ! CREATE USER
export const addUser = async (userData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/addUser`,
      userData
    );
    if (response.status === 404) {
      console.error("Page not found", response.data);
    }
    if (response.status === 401) {
      console.error("No authorization", response.data);
    }
    if (response.status === 500) {
      console.error("Internal Server Error", response.data);
    }
    return response;
  } catch (error) {
    console.error("Error");
    throw error;
  }
};

// ! CREATE REVIEW
export const addReview = async (reviewData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/addReview`,
      reviewData
    );
    if (response.status === 404) {
      console.error("Page not found", response.data);
    }
    if (response.status === 401) {
      console.error("No authorization", response.data);
    }
    if (response.status === 500) {
      console.error("Internal Server Error", response.data);
    }
    return response;
  } catch (error) {
    console.error("Error");
    throw error;
  }
};

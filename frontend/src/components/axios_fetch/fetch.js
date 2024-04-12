import axios from "axios";

// !Get Winter Destinations
export const getWinterDestinations = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getWinterDestinations`
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

// !Get Summer Destinations
export const getSummerDestinations = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getSummerDestinations`
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

// !Get All Seasons Destinations
export const getAllSeasonsDestinations = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getAllSeasonsDestinations`
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


import axios from "axios";

// !GET ALL DESTINATIONS
export const getAllDest = async() => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getAllDestinations`
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
    console.error("Error get destinations");
    throw error;
  }
}


// !GET DESTINATIONS PAGE SIZE
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
    console.error("Error get destinations");
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
export const addReview = async (reviewData, destId, userId) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/addReview/${destId}/reviews/${userId}`,
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

// ! LOGIN

export const loginFetch = async (loginData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
      loginData
    );
    if (response.status === 404) {
      console.error("User not found", response.data);
    }
    if (response.status === 401) {
      console.error("No authorization", response.data);
    }
    if (response.status === 500) {
      console.error("Internal Server Error", response.data);
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// !GET IMAGES
export const getImages = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getImages`
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

// ! DELETE DESTINATION
export const deleteDestination = async (destId) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_BASE_URL}/deleteDestination/${destId}`
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
    if (response.status === 200) {
      return alert("La destinazione è stata eliminata con successo!");
    }
  } catch (error) {
    console.error(error);
    return alert(`Errore durante l'eliminazione della destinazione!`);
  }
};

// ! UPDATE PRICE
export const updateDest = async (destId) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/editDestination/${destId}`
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
  } catch (error) {
    console.error(`Error durante la modifica delle informazioni`);
  }
};

// ! GET REVIEWS
export const getReviews = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getReviews`
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

// !GET DESTINATION REVIEWS
export const getDestReviews = async (destId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getDestinationReviews/${destId}`
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
    console.error("Error get reviews");
    throw error;
  }
};

// !GET USERS

export const getUsers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_BASE_URL}/getUsers`
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
    console.error("Error get users");
    throw error;
  }
};

// !ADD DESTINATION

export const addDestination = async(destinationData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/addDestination`,
      destinationData
    );
    if (response.status === 404) {
      console.error("Page not Found", response.data);
      return;
    }
    if (response.status === 401) {
      console.error("No authorization", response.data);
      return;
    }
    if (response.status === 500) {
      console.error("Internal Server Error", response.data);
    }
  } catch (error) {
    console.error(error);
  }
}
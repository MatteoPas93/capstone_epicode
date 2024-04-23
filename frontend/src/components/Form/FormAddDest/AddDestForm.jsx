import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDestForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    travel_location: "",
    price: "",
    cover_image: "",
    images_location: [],
    description: "",
    main_attractions: "",
    season: "",
  });

  const addDest = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/addDestination`,
        formData
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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigateAdminPage = () => {
    setTimeout(() => {
      navigate("/management");
      // window.location.reload()
    }, 1500);
  };

  return (
    <Form onSubmit={addDest}>
      <Row className="mb-3 flex-column-ml-1">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Destinazione</Form.Label>
          <Form.Control
            name="travel_location"
            required
            type="text"
            placeholder="Inserisci destinazione"
            value={formData.travel_location}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Prezzo</Form.Label>
          <Form.Control
            name="price"
            required
            type="text"
            placeholder="Insereisci prezzo"
            value={formData.price}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Immagine Copertina</Form.Label>
          <Form.Control
            name="cover_image"
            required
            type="text"
            placeholder="Inserisci un immagine di copertina"
            value={formData.cover_image}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Immagini per la destinazione</Form.Label>
          <Form.Control
            name="images_location"
            required
            type="text"
            placeholder="Inserisci immagini per la destinazione"
            value={formData.images_location}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            name="description"
            required
            type="text"
            placeholder="Inserisci una descrizione"
            value={formData.description}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Attrazioni principali</Form.Label>
          <Form.Control
            name="main_attractions"
            required
            type="text"
            placeholder="Inserisci le principali attrazioni"
            value={formData.main_attractions}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom07">
          <Form.Label>Stagione</Form.Label>
          <Form.Control
            name="season"
            required
            type="text"
            placeholder="Inserisci la stagione"
            value={formData.season}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button className="ml-3" type="submit" onClick={navigateAdminPage}>
        Aggiungi la nuova destinazione
      </Button>
    </Form>
  );
};

export default AddDestForm;

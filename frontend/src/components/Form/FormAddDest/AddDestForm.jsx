import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addDestination } from "../../axios_fetch/fetch";

const AddDestForm = () => {
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
      await addDestination(formData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedImages = [...formData.images_location];
    updatedImages[index] = value;

    setFormData({
      ...formData,
      [name]: value,
      images_location: updatedImages,
    });
  };

  const handleAddImage = () => {
    setFormData({
      ...formData,
      images_location: [...formData.images_location, ""],
    });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = formData.images_location.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      images_location: updatedImages,
    });
  };

  const navigateAdminPage = async () => {
    setTimeout(() => {
      window.location.reload();
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
        <Form.Group as={Col} md="4" controlId="validationCustom05">
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
        <Form.Group as={Col} md="4" controlId="validationCustom06">
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
        {formData.images_location.map((image, index) => (
          <Form.Group as={Col} md="4" controlId={`image_${index}`} key={index}>
            <Form.Label>Immagine {index + 1}</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  name={`image_${index}`}
                  type="text"
                  placeholder={`Inserisci URL per l'immagine ${index + 1}`}
                  value={image}
                  onChange={(event) => handleChange(event, index)}
                />
              </Col>
              <Col xs="auto">
                <Button
                  variant="danger"
                  onClick={() => handleRemoveImage(index)}
                >
                  Rimuovi
                </Button>
              </Col>
            </Row>
          </Form.Group>
        ))}
        <Col className="mt-4" md="4">
          <Button variant="primary" onClick={handleAddImage}>
            Aggiungi immagini della destinazione
          </Button>
        </Col>
      </Row>
      <Button className="ml-3" type="submit" onClick={navigateAdminPage}>
        Aggiungi la nuova destinazione
      </Button>
    </Form>
  );
};

export default AddDestForm;

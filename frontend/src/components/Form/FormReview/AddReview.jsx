import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const AddReviewForm = ({ userId, destId }) => {
  const [formData, setFormData] = useState({
    comment: "",
    evaluation_score: "",
  });
  const [error, setError] = useState(""); 

  const addRev = async () => {
    try {
      const reviewData = {
        ...formData,
        user: userId,
        travel_location: destId,
      };

      await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/addReview/${destId}/reviews/${userId}`,
        reviewData
      );
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.evaluation_score < 1 || formData.evaluation_score > 10) {
      setError( alert("La valutazione deve essere compresa tra 1 e 10."));
      return;
    }
    setError("");
    addRev();
    window.location.reload()
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <Row className="mb-3 flex-column ml-1">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            name="comment"
            required
            type="text"
            placeholder="Inserisci una recensione"
            value={formData.comment}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            name="evaluation_score"
            required
            type="text"
            placeholder="Inserisci la tua valutazione"
            value={formData.evaluation_score}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button className="ml-3" type="submit">
        Invia recensione
      </Button>
    </Form>
  );
};

export default AddReviewForm;

import React, { useState } from "react";
import { addReview } from "../../axios_fetch/fetch";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

const AddReviewForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    comment: "",
    evaluation_score: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    // } else {
      try {
        await addReview(formData);
      } catch (error) {
        console.error(error);
    //   }
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 flex-column ml-1">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            name="review"
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
            name="score"
            required
            type="text"
            placeholder="Inserisci la tua valutazione"
            value={formData.evaluation_score}
            onChange={handleChange}
          />
          <Form.Control.Feedback>✓</Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* <Form.Group className="mb-3 ml-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
      <Button className="ml-3" type="submit" onClick={navigateHome}>
        Invia recensione
      </Button>
    </Form>
  );
};

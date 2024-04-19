import React, { useState } from "react";
import { addReview, getUsers } from "../../axios_fetch/fetch";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const AddReviewForm = () => {
  const {id} = useParams();
  const [formData, setFormData] = useState({
    comment: "",
    evaluation_score: "",
  });

  const addRev = async() => {
    try {
      
      const usersResponse = await getUsers();
      const usersData = usersResponse.data;

      const userId = usersData._id;
      const destId = id;

      const reviewResponse = await addReview(destId, userId, formData);
      setFormData(reviewResponse.data)
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRev()
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
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
      <Button className="ml-3" type="submit" >
        Invia recensione
      </Button>
    </Form>
  );
};

export default AddReviewForm;

import React, { useState } from "react";
// import { updateDest } from "../../axios_fetch/fetch";
import { Button, Form, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const UpdateDest = ({ destId }) => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    price: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        // await updateDest(destId, {
        //   price: formData.price
        // });

        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_BASE_URL}/editDestination/${destId}`,
          {
            price: formData.price,
          }
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

        window.location.reload()
        handleClose();
      } catch (error) {
        console.error(error);
      }
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
    <>
      <Button variant="primary" onClick={handleShow}>
        Modifica prezzo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prezzo:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 flex-column ml-1">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  name="price"
                  required
                  type="number"
                  placeholder={formData.price}
                  value={formData.price}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>✔</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3 ml-3">
              <Form.Check
                required
                label="Conferma per proseguire"
                feedbackType="invalid"
              />
            </Form.Group>
            <Button className="ml-3" type="submit">
              Conferma
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateDest;


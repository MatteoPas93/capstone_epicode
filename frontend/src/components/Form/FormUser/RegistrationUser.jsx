import React, { useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { addUser } from "../../axios_fetch/fetch";
import { useNavigate } from "react-router-dom";
import "./registration.css";

const RegistrationForm = () => {
  const [validated, setValideted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    avatar: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        await addUser(formData);
      } catch (error) {
        console.error(error);
      }
    }
    setValideted(true);
    setShowAlert(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="container-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 flex-column ml-1">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback>✓</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                required
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback>✓</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Crea Password"
                value={formData.password}
                onChange={handleChange}
              />
              <Form.Control.Feedback>✓</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Data di nascita</Form.Label>
              <Form.Control
                name="birthday"
                required
                type="date"
                placeholder="Data di nascita"
                value={formData.birthday}
                onChange={handleChange}
              />
              <Form.Control.Feedback>✓</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomCover">
              <Form.Label>Immagine profilo</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                <Form.Control
                  name="avatar"
                  type="text"
                  placeholder="Inserisci un'immagine profilo"
                  value={formData.avatar}
                  onChange={handleChange}
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3 ml-3">
            <Form.Check
              required
              label="Accetto i termini e le condizioni."
              feedback="Registrazione effettuata con successo."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button className="ml-3" type="submit">
            Registrati
          </Button>
        </Form>
        {showAlert && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Registrazione effettuata con successo. Torna alla home ed esegui l'accesso.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={handleAlertClose}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;

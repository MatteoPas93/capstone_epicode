import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const UpdateDest = ({
  destId,
  currentPrice,
  onPriceUpdate,
  currentImage,
  onImageUpdate,
  currentSeason,
  onSeasonsUpdate,
}) => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    price: currentPrice,
    cover_image: currentImage,
    season: currentSeason,
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
        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_BASE_URL}/editDestination/${destId}`,
          {
            price: formData.price,
            cover_image: formData.cover_image,
            season: formData.season
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
        onPriceUpdate(formData.price);
        onImageUpdate(formData.cover_image);
        onSeasonsUpdate(formData.season);
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

  useEffect(() =>{
    setFormData({
      price: currentPrice,
      cover_image: currentImage,
      season: currentSeason,
    })
  },[currentPrice, currentImage, currentSeason] )

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Modifica informazioni
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Inserisci le nuove informazioni per la destinazione:
          </Modal.Title>
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
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Control
                  name="cover_image"
                  required
                  type="text"
                  placeholder={formData.cover_image}
                  value={formData.cover_image}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>✔</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Control
                  name="season"
                  required
                  type="text"
                  placeholder={formData.season}
                  value={formData.season}
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

// import React, { useState } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

// const UpdateDest = ({ destId, currentPrice, onPriceUpdate }) => {
//   const [validated, setValidated] = useState(false);
//   const [formData, setFormData] = useState({
//     price: currentPrice,
//   });
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     } else {
//       try {
//         const response = await axios.patch(
//           `${process.env.REACT_APP_SERVER_BASE_URL}/editDestination/${destId}`,
//           {
//             price: formData.price,
//           }
//         );

//         if (response.status === 404) {
//           console.error("Page not found", response.data);
//         }
//         if (response.status === 401) {
//           console.error("No authorization", response.data);
//         }
//         if (response.status === 500) {
//           console.error("Internal Server Error", response.data);
//         }
//         onPriceUpdate(formData.price)
//         handleClose();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     setValidated(true);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Modifica prezzo
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Inserisci il nuovo prezzo:</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <Row className="mb-3 flex-column ml-1">
//               <Form.Group as={Col} md="4" controlId="validationCustom01">
//                 <Form.Control
//                   name="price"
//                   required
//                   type="number"
//                   placeholder={formData.price}
//                   value={formData.price}
//                   onChange={handleChange}
//                 />
//                 <Form.Control.Feedback>✔</Form.Control.Feedback>
//               </Form.Group>
//             </Row>
//             <Form.Group className="mb-3 ml-3">
//               <Form.Check
//                 required
//                 label="Conferma per proseguire"
//                 feedbackType="invalid"
//               />
//             </Form.Group>
//             <Button className="ml-3" type="submit">
//               Conferma
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Chiudi
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default UpdateDest;

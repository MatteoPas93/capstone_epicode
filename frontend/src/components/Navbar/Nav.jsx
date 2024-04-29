import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("auth");
    setIsLoggedIn(authToken !== null);

    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      setIsAdmin(decodedToken.role === "admin");
    }
    if (authToken) {
      const decodedName = jwtDecode(authToken);
      setName(decodedName.name)
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setTimeout(() => {
      setIsLoggedIn(false);
      setIsAdmin(false);
      navigate("/");
    }, 1500);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <div className="nav-logo">
              <img src="/logo_pers.png" alt="Logo agenzia viaggi" />
            </div>
        <Navbar.Brand className="title-dreams" href="/">
          {" "}
          <h3>DreamsTravel</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-between"
          id="basic-navbar-nav"
        >
          <div>
            <Nav className="me-auto size-font">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Destinazioni" id="basic-nav-dropdown">
                <NavDropdown.Item href="/summer_destinations">
                  Mete estive
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/winter_destinations">
                  Mete invernali
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/all_seasons_destinations">
                  Mete per tutto l'anno
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/offers">Offerte</Nav.Link>
            </Nav>
          </div>
          <div className="d-flex gap-5 ps-2 size-font">
            {!isLoggedIn && (
              <Nav.Link href="/login">Registrati o Accedi</Nav.Link>
            )}
            
            {isLoggedIn && (
              <div className="d-flex">
                <div className="pe-4">
                  <p className="m-0"> Benvenuto {name} </p>
                </div>
                {isAdmin && (
              <div className="cont-settings d-flex pe-4">
                <div className="pe-1">
              <Nav.Link href="/management">Pagina di Gestione</Nav.Link>
              </div>
              <div className="d-flex align-items-center">
              <ion-icon className="icon-logout" name="settings-outline"></ion-icon>
              </div>
            </div>)}
                <div className="pe-1">
                  <Nav.Link onClick={handleLogout}> Logout </Nav.Link>
                </div>
                <div className="d-flex align-items-center">
                  <ion-icon
                    className="icon-logout"
                    name="log-out-outline"
                  ></ion-icon>
                </div>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './nav.css';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("auth");
    setIsLoggedIn(authToken !== null);

    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      setIsAdmin(decodedToken.role === "admin");
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setTimeout(() => {
      setIsLoggedIn(false);
      setIsAdmin(false);
      navigate('/')
    }, 1500)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="title-dreams" href="/"> <h3>DreamsTravelAgency</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
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
            </Nav>
          </div>
          <div className="d-flex gap-5 ps-2 size-font">
          {!isLoggedIn && (
              <Nav.Link href="/login">Registrati o Accedi</Nav.Link>
            )}
          {isAdmin && (
            <Nav.Link  href="/management">Pagina di Gestione</Nav.Link>
          )}
          {isLoggedIn && (
            <Nav.Link onClick={handleLogout}> Logout </Nav.Link>
          )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

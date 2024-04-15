import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">DreamsTravelAgency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <div>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
          <div>
          <Nav.Link  href="/registration">Registrati/Accedi</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

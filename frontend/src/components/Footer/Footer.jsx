import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer mt-5">
      <div className="container mt-3">
        <div className="row">
        <div className="col-md-4">
            <div className="footer-logo">
              <img src="/logo_pers.png" alt="Logo agenzia viaggi" />
            </div>
            </div>
          <div className="col-md-4">
            <p className="footer-contact">
              <strong>Agenzia Viaggi DreamsTravel</strong><br />
               Corso Garibaldi n°28<br />
              Telefono: 035210782<br />
              Email: DreamsTravelAgency@business.it
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="footer-heading">Navigazione</h2>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/description_agency">Chi siamo</a></li>
              <li><a href="/offers">Offerte</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="footer-copyright">&copy; 2024 DreamsTravel - Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
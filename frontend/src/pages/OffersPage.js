import React from "react";
import NavigationBar from "../components/Navbar/Nav";
import Offers from "../components/Destination/OffersDest";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

function OffersPage() {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1200);
  }, []);
  return (
    <>
    <NavigationBar/>
    <Offers/>
    {countFooter && <Footer/>}
    </>
  )
}

export default OffersPage;
import NavigationBar from "../components/Navbar/Nav";
import DescriptionAgency from "../components/DescriptionAgency/Description";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const DescriptionAgencyPage = () => {
    const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1500);
  }, []);
  return (
    <>
      <NavigationBar />
      <DescriptionAgency />
      {countFooter && <Footer />}
    </>
  );
};

export default DescriptionAgencyPage;

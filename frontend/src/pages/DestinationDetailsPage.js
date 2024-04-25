import DestinationDetail from "../components/Detail/DestinationDetails";
import NavigationBar from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const DestinationDetailPage = () => {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1500);
  }, []);

  return (
    <>
      <NavigationBar />
      <DestinationDetail />
      {countFooter && <Footer />}
    </>
  );
};

export default DestinationDetailPage;

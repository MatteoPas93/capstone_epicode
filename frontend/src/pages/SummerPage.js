import NavigationBar from "../components/Navbar/Nav";
import Destinations from "../components/Destination/DestForSeason";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const SummerDestPage = () => {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1500);
  }, []);

  return (
    <>
      <NavigationBar />
      <Destinations season={"summer"} />
      {countFooter && <Footer />}
    </>
  );
};

export default SummerDestPage;

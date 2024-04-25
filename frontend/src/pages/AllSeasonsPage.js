import NavigationBar from "../components/Navbar/Nav";
import Destinations from "../components/Destination/DestForSeason";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const AllSeasonsDestPage = () => {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1500);
  }, []);
  return (
    <>
      <NavigationBar />
      <Destinations season={"all_seasons"} />
      {countFooter && <Footer />}
    </>
  );
};

export default AllSeasonsDestPage;

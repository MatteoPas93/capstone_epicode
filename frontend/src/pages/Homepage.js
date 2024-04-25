import NavigationBar from "../components/Navbar/Nav";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1500);
  }, []);
  
  return (
    <>
      <NavigationBar />
      <Main />
      {countFooter && <Footer />}
    </>
  );
};

export default Homepage;

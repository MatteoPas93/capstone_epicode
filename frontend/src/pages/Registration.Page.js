import NavigationBar from "../components/Navbar/Nav";
import RegistrationForm from "../components/Form/FormUser/RegistrationUser";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const RegistrationPage = () => {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1500);
  }, []);
  
  return (
    <>
      <NavigationBar />
      <RegistrationForm />
      {countFooter && <Footer />}
    </>
  );
};

export default RegistrationPage;

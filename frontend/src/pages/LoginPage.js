import React from "react";
import NavigationBar from "../components/Navbar/Nav";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 500);
  }, []);
  return (
    <>
      <NavigationBar />
      <Login />
      {countFooter && <Footer />}
    </>
  );
};

export default LoginPage;

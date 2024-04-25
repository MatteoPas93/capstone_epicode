import NavigationBar from "../components/Navbar/Nav";
import AdminManagement from "../components/Admin/AdminDest";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const AdminPage = () => {
  const [countFooter, setCountFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCountFooter(true);
    }, 1500);
  }, []);

  return (
    <>
      <NavigationBar />
      <AdminManagement />
      {countFooter && <Footer />}
    </>
  );
};

export default AdminPage;

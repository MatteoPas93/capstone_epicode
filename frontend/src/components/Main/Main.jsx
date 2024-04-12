import React from "react";
import WinterDestinations from "../Destination/WinterDestinations";
import SummerDestinations from "../Destination/SummerDestinations"
import AllSeasonsDestinations from "../Destination/AllSeasonsDestinations"
import NavigationBar from "../Navbar/Nav";
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  

  return (
    <>
    <NavigationBar/>
     <WinterDestinations/>
     <SummerDestinations/>
     <AllSeasonsDestinations/>
    </>
  );
};

export default Main;

import React from "react";
import WinterDestinations from "../Destination/WinterDestinations";
import SummerDestinations from "../Destination/SummerDestinations";
import AllSeasonsDestinations from "../Destination/AllSeasonsDestinations";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <>
      <WinterDestinations />
      <SummerDestinations />
      <AllSeasonsDestinations />
    </>
  );
};

export default Main;

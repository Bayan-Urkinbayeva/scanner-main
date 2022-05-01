import React from "react";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import QRScan from "../components/qr-reader-component"
const Home = () => {
  
  return (
    <div>
      <Navbar title={"Scan QR"} />
      <QRScan />
      <Navigation />
    </div>
  );
};
export default Home;

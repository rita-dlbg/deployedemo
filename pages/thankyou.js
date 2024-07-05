import React from "react";
import Fotter from "@/components/Footer/Fotter";
import Navbar from "@/components/Navbar/Navbar";
import ThankyouPage from "@/components/ThankyouPage/ThankyouPage";
const thankyou = () => {
  return (
    <div>
      <div className="thankyoupage md:px-20 md:py-5">
        <Navbar />
      </div>
      <ThankyouPage />
      <Fotter />
    </div>
  );
};

export default thankyou;

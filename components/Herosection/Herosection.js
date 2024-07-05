import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import plane from "@/assets/plane.svg";
const Herosection = () => {
  const data = [
    {
      one: "Impeccable Safety",
      two: "Our medical assistance services are ideal for patients who require assistance during their travel.",
    },
    {
      one: "Fully Licensed",
      two: "Our team consists of licensed and certified doctors, nurses, paramedics, and EMTs.",
    },
    {
      one: "Available 24/7",
      two: "Our team is available 24/7 to provide assistance and answer any questions you may have.",
    },
  ];
  return (
    <div className="md:px-20 md:py-4 max-md:p-6 herosection">
      <Navbar />
      <div className="flex max-md:flex-col">
        <div className="md:w-[60%] max-md:w-full flex flex-col md:items-start justify-center gap-2 max-md:gap-0 max-md:my-6">
          <p className="text-orange text-base font-semibold max-md:text-sm max-md:text-center">
            Welcome to
          </p>
          <p className="text-primary font-bold text-xl max-md:text-center ">
            Ferrymed Rescue
          </p>
          <p className="text-kala font-bold text-3xl max-md:text-2xl max-md:text-center">
            Leading the
            <br className="max-md:contents" /> way in Air Ambulance
            <br className="max-md:contents" /> Services
          </p>{" "}
          <button className="bg-orange rounded-lg font-base text-white p-2 px-4 max-md:hidden block">
            Discover More
          </button>
        </div>
        <div className="md:w-[65%] max-md:w-full">
          <Image src={plane} unoptimized quality={100} height={600} alt="img" />
        </div>
        <button className="bg-orange rounded-lg font-base text-white p-2 px-4 max-md:block hidden">
          Discover More
        </button>
      </div>
      <div className="flex max-md:flex-col max-md:gap-2 max-md:my-4 md:gap-20">
        {data.map((each, index) => {
          return (
            <div key={index}>
              <p className="text-black text-xl font-bold md:py-3">{each.one}</p>
              <p className="text-xs text-black leading-5">{each.two}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Herosection;

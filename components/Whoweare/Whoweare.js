import React from "react";
import Image from "next/image";
import who from "@/assets/whower.png";
const Whoweare = () => {
  return (
    <div className="md:px-20 md:py-20  bg-white">
      <div
        style={{ borderRadius: "0px 20px 20px 0px" }}
        className=" bg-cement flex items-center max-md:flex-col shadow-lg relative justify-end  max-md:p-6
       "
      >
        <div className="md:absolute left-[-5%] top-[-13%] ">
          <Image unoptimized quality={100} alt="img" src={who} height={430} />
        </div>
        <div className="md:w-1/2 flex flex-col py-8  items-start max-md:items-center">
          <p className="font-semibold text-orange text-base">WHO WE ARE</p>
          <p className="text-primary text-3xl  max-md:text-2xl max-md:text-center font-bold my-3 leading-10">
            A Leading Medical
            <br /> Transportation Provider
          </p>
          <p className="text-kala text-xs leading-5 md:w-[70%]">
            Welcome to Ferrymed Rescue, your premier provider of air and train
            ambulance services, medical flight, medical assistance and medical
            tourism. At Ferrymed Rescue, our mission is to provide compassionate
            and efficient medical transportation to individuals in need, both
            domestically and internationally.
          </p>
          <button className="text-base text-white bg-orange p-4 px-8 rounded-lg my-4">
            Discover About More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;

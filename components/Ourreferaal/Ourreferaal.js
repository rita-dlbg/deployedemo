import React from "react";
import h1 from "@/assets/h1.svg";
import Image from "next/image";
import h2 from "@/assets/h2.svg";
import h3 from "@/assets/h3.svg";
import h4 from "@/assets/h4.svg";
import h5 from "@/assets/h5.svg";
import h6 from "@/assets/h6.svg";
import h7 from "@/assets/h7.svg";
import h8 from "@/assets/h8.svg";
const Ourreferaal = () => {
  const data = [h1, h2, h3, h4, h5, h6, h7, h8];
  // console.log(data);
  return (
    <div className="md:px-20 md:py-12 max-md:p-6">
      <p className="text-base text-orange text-semibold text-center max-md:text-sm">
        OUR REFERRAL
      </p>
      <p className="text-black font-bold text-3xl max-md:text:2xl text-center md:my-3 max-md:mb-2">
        Hospitals
      </p>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 md:w-4/5 m-auto max-md:mt-2">
        {data.map((each, index) => {
          return (
            <Image
              key={index}
              unoptimized
              quality={100}
              height={300}
              alt="img"
              src={each.src}
              width={200}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ourreferaal;

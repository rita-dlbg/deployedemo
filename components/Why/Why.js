import React from "react";
import service from "@/assets/service.svg";
import effect from "@/assets/effect.svg";
import care from "@/assets/care.svg";
import Image from "next/image";
import safe from "@/assets/safe.svg";
const Why = () => {
  const data = [
    {
      img: service,
      head: "Longstanding Service",
      para: "More than 15 years of experience in air ambulance & medical tourism services.",
    },
    {
      img: care,
      head: "High Standard of Safety",
      para: "We maintain high standards and do not compromise on safety at any point of time.",
    },
    {
      img: safe,
      head: "Beside to Beside Care",
      para: "We offer bed-to-bed transport for patients who require assistance throughout the journey.",
    },

    {
      img: effect,
      head: "Affordable and Effective",
      para: "Our services are affordable and cost effective.",
    },
  ];
  // console.log(data);

  return (
    <div className="md:px-20 md:py-12 max-md:p-6">
      <p className="font-semibold md:text-base max-md:text-sm uppercase text-orange text-center md:p-2">
        Our Benefits
      </p>
      <p className="bold md:text-3xl max-md:text-2xl font-bold text-primary text-center md:p-2">
        Why Choose Ferrymed Rescue
      </p>
      <div className="grid md:grid-cols-4 gap-8 mt-8 ">
        {data.map((each, index) => {
          return (
            <div
              className="bg-sky p-4 flex flex-col rounded-[40px]  "
              key={index}
            >
              <div className="bg-white h-16 w-16 p-4 rounded-full flex items-center justify-center ">
                <Image
                  quality={100}
                  unoptimized
                  src={each.img}
                  alt="img"
                ></Image>
              </div>
              <div className="flex flex-col ">
                <p className="text-xl leading-8 w-[80%] text-black font-bold mt-2">
                  {each.head}
                </p>
                <p className="text-bona leading-5 w-[79%] font-semibold text-black mt-4 mb-1">
                  {each.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;

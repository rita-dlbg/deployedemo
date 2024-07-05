import React from "react";
import Image from "next/image";
import Semi from "@/assets/semi.svg";
import Phnsemi from "@/assets/phnsemi.svg";
const Howwework = () => {
  const data = [
    {
      content:
        "As soon as you provide the necessary information, our team will provide you with all the details about the transfer.",
      color: "#C1F0FB",
    },
    {
      content:
        "As part of our process of understanding the patients’ medical condition, our team collects all the information possible from the patients’ family and primarydoctor.",
      color: "#C5E9FB",
    },
    {
      content:
        "We take care of all the communications which includes discharging facilities, medical procedures, visa requirements, and documentation.",
      color: "#CDDDF8",
    },
    {
      content:
        "Our doctors ensure that the patient is stabilized before a transfer, facilitating a hassle-free experience.",
      color: "#C9D9EC",
    },
    {
      content:
        "Every thing is overseen by highly trained and certified paramedics, who arrive with the appropriate medical equipment ready to go.",
      color: "#D7DFE7",
    },
  ];
  return (
    <div className="md:px-20 md:py-12 max-md:p-6">
      <p className="md:text-base max-md:text-sm text-orange text-semibold text-center">
        Our Process
      </p>
      <p className="text-black font-bold md:text-3xl max-md:text-2xl text-center md:my-3 max-md:mb-2">
        How We Work
      </p>
      {/* <div className="boxes flex gap-4 mt-12">
        {data.map((each, index) => {
          return (
            <div
              before={"0" + (index + 1)}
              key={index}
              className={`each-semibox p-12 px-6  relative  before:content-[attr(before)]  `}
              style={{ background: each.color }}
            >
              <p className="text-bona text-black  text-center ">
                {each.content}
              </p>
            </div>
          );
        })}
      </div> */}
      <div className="semi-box max-md:hidden">
        <Image src={Semi} unoptimized quality={100} height={600} alt="img" />
      </div>
      <div className="semi-box md:hidden">
        <Image
          src={Phnsemi}
          unoptimized
          quality={100}
          className="w-[100%]"
          height={600}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Howwework;

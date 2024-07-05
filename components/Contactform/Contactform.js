import React from "react";

const Contactform = () => {
  return (
    <div className="contactform flex flex-col align-center justify-center">
      <div className="">
        <p className="md:text-base max-md:text-sm text-orange font-semibold text-center">
          DON’T HESITATE
        </p>
        <p className="max-md:text-2xl md:text-3xl text-primary font-bold text-center md:my-3 max-md:mb-3">
          To Contact Us
        </p>
        <div>
          <div className="flex gap-3 items-center justify-center max-md:flex-col">
            <input
              className="border-none outline-none p-3 w-[33%] max-md:w-4/5 rounded-2xl"
              placeholder="Full Name"
            ></input>
            <input
              className="border-none outline-none p-3 w-[33%]  max-md:w-4/5 rounded-2xl"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="flex gap-3 items-center justify-center max-md:flex-col my-6">
            <input
              placeholder="Mobile Number"
              className="border-none outline-none p-3 w-[33%]  max-md:w-4/5 rounded-2xl"
            ></input>
            <input
              className="border-none outline-none p-3 w-[33%]  max-md:w-4/5 rounded-2xl"
              placeholder="Service Type"
            ></input>
          </div>
          <div className="flex  items-center justify-center">
            <textarea
              className="border-none outline-none p-3 w-[67%]   max-md:w-4/5 min-[20]: rounded-2xl"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;

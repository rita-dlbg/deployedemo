import React from "react";
import Image from "next/image";

const Wecanhelp = () => {
  return (
    <div className="md:px-20 md:py-12  bg-white relative md:z-0">
      <div className="bg-cement md:rounded-[75px] flex max-md:flex-col justify-between z-1 relative wecanhelp">
        <div className="md:w-[60%] md:py-20 md:px-10 max-md:p-6 ">
          <p className="text-2xl text-primary font-bold max-md:text-xl max-md:text-center">
            We can help, today.
          </p>
          <p className="text-xs text-kala leading-5 max-md:mt-2">
            24 hours a day, 7 days a week support. Free, no obligation price
            quotes.
          </p>
        </div>
        <div className="max-md:p-6 max-md:pt-0 md:hidden">
          <div className="md:w-[33%] rounded-[75px] md:relative bg-orange">
            <div className="bg-white submit flex items-center md:absolute justify-around md:w-[90%] p-2  md:top-1/2 left-[25%] md:transform md:-translate-x-1/2 md:-translate-y-1/2">
              <p className="text-xl text-orange font-bold">040 4189 1299</p>
              <button className="bg-primary rounded-[15px] text-white text-base max-md:text-sm px-6 py-2 ">
                Submit Query
              </button>
            </div>
          </div>
        </div>
        {/* <div className="max-md:p-6 max-md:pt-0"> */}
          <div className="md:w-[33%] rounded-[75px] max-md:hidden md:relative bg-orange">
            <div className="bg-white submit flex items-center md:absolute justify-around md:w-[90%] p-2  md:top-1/2 left-[25%] md:transform md:-translate-x-1/2 md:-translate-y-1/2">
              <p className="text-xl text-orange font-bold">040 4189 1299</p>
              <button className="bg-primary rounded-[15px] text-white text-base max-md:text-sm px-6 py-2 ">
                Submit Query
              </button>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Wecanhelp;

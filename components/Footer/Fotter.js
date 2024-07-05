import React from "react";
import Image from "next/image";
import call from "@/assets/call.svg";
import arrow from "@/assets/arrow.svg";
import mail from "@/assets/mail.svg";
import fb from "@/assets/fb.svg";
import Link from "next/link";
import insta from "@/assets/insta.svg";
import loc from "@/assets/loc.svg";
import shape from "@/assets/Shape.svg";
import shapw2 from "@/assets/shapw2.svg";
import fotterlogo from "@/assets/footerlogo.svg";
const Fotter = () => {
  const Services = [
    "Patient transport on commercial flight",
    "Train Medical Transportation",
    "Medical Stretchers",
    "Patient Transport in Business Class",
    "Medical Assistance",
    " Medical Tourism",
    "ECMO Patient Transfer",
  ];
  return (
    <div className="bg-primary md:px-20 md:py-12 max-md:p-6">
      <div className="flex gap-10 justify-between max-md:flex-col">
        <div className="md:w-[20%] ">
          <Image
            src={fotterlogo}
            unoptimized
            alt="img"
            height={90}
            quality={100}
          />
          <p className="text-xl text-white mt-4 ">
            Subscribe
            <br /> Our News Letter
          </p>
          <div className="flex justify-between items-center pb-4 newsletter mt-4">
            <p className="text-white text-xs ">Enter your email address here</p>{" "}
            <Image
              src={arrow}
              height={15}
              unoptimized
              alt="img"
              quality={100}
            />
          </div>
        </div>
        <div className="md:w-[30%] ">
          <p className="text-white text-base">Contact Information</p>
          <div className="flex items-start my-4 gap-4">
            <Image src={call} unoptimized quality={100} alt="img" />
            <p className="text-xs text-white leading-5">+ 91 97170 71250</p>
          </div>
          <div className="flex  items-start my-4 gap-4">
            <Image src={mail} unoptimized quality={100} alt="img" />
            <a
              className="text-xs text-white"
              href="mailto:support@ferrymedrescue.com"
            >
              support@ferrymedrescue.com
            </a>
          </div>
          <div className="flex items-start my-4 gap-4">
            <Image src={loc} unoptimized quality={100} alt="img" />
            <p className="text-xs text-white leading-7">
              Building no 6, First floor, near Hanuman Temple Corner Market,
              Sadhna Enclave, Malviya Nagar, New Delhi, 110017
            </p>
          </div>
        </div>
        <div className="md:w-[20%]">
          <p className="text-white text-base">Quick Links</p>
          <ul>
            <li className="my-1 mt-2">
              <i className="fa-solid fa-period"></i>
              <Link className="text-xs text-white leading-5" href="#">
                • About us
              </Link>
            </li>
            <li className="my-1">
              <Link className="text-xs text-white leading-5" href="#">
                • Our Services
              </Link>
            </li>
            <li className="my-1">
              <Link className="text-xs text-white leading-5" href="#">
                • Privacy Policy{" "}
              </Link>
            </li>
            <li className="my-1">
              <Link className="text-xs text-white  leading-5" href="#">
                • Terms and Conditions
              </Link>
            </li>
            <li className="my-1">
              <Link className="text-xs text-white leading-5" href="#">
                • Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-[20%]">
          <p className="text-white text-base">Services</p>
          <ul className=" text-white">
            <li className="my-1 mt-2">
              <Link className="text-xs text-white leading-5" href="#">
                • Chartered Air Ambulance
              </Link>
            </li>
            {Services.map((each) => {
              return (
                <li className="my-1">
                  <Link className="text-xs text-white leading-5" href="#">
                    • {each}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t pt-10 border-top mt-20 flex justify-between items-center max-md:flex-col">
        <ul className=" text-white text-xs">
          <li className="max-md:text-center">
            Copyright © 2023 Ferrymed Rescue All Rights Reserved. Developed by
            Digital 24
          </li>
        </ul>
        <div className="flex gap-5 max-md:mt-4">
          <div className="rounded-full border border-white h-6 w-6 flex items-center justify-center">
            <Image alt="img" unoptimized quality={100} src={shape} />
          </div>
          <div className="rounded-full border border-white h-6 w-6 flex items-center justify-center">
            <Image alt="img" unoptimized quality={100} src={shapw2} />
          </div>
          <div className="rounded-full border border-white h-6 w-6 flex items-center justify-center">
            <Image alt="img" unoptimized quality={100} src={fb} />
          </div>
          <div className="rounded-full border border-white h-6 w-6 flex items-center justify-center">
            <Image alt="img" unoptimized quality={100} src={insta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;

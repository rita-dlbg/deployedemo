import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const [mobmenu, setmobMenu] = useState(false);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#aboutus" },
    { name: "Service", link: "/#service" },
    { name: "Blog", link: "/#blog" },
  ];
  return (
    <div className="navbar relative">
      <div className="flex items-center justify-between ">
        <div
          className="logo cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={logo} alt="imf" height={50} quality={100} unoptimized />
        </div>
        <div className="menu hidden md:block">
          <ul className="flex gap-10">
            {menu.map((each) => {
              return (
                <li className="p-1">
                  <Link
                    href={each.link}
                    className="text-xs font-normal font-lexend"
                  >
                    {each.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact button ">
          <i
            className="fa-solid text-greyishblue text-4xl fa-bars max-md:block hidden"
            onClick={() => {
              setmobMenu(!mobmenu);
            }}
          ></i>
          <button className="bg-orange rounded-lg font-base text-white p-2 px-4 max-md:hidden block">
            Contact Us
          </button>
        </div>
      </div>
      {mobmenu && (
        <div className="mt-4 bg-cream">
          <div className="menu hidden max-sm:block ">
            <ul className="flex gap-10 items-center justify-center">
              {menu.map((each) => {
                return (
                  <li className="p-1">
                    <Link
                      href={each.link}
                      className="text-xs font-normal font-lexend"
                    >
                      {each.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

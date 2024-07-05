import React from "react";
import Image from "next/image";
import arro from "@/assets/arro.svg";
import Modal from "react-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Select from "react-select";
import { useState, useEffect } from "react";
import dart from "@/assets/dart.svg";
import axios from "axios";
import Contactform from "../Contactform/Contactform";
const FindLoc = () => {
  const router = useRouter();
  const redirectTo = (href) => {
    router.push(href);
  };
  const [fromCountries, setFromCountries] = useState();
  const [toCountries, setToCountries] = useState();
  const [countryFrom, setCountryFrom] = useState(null);
  const [countryTo, setCountryTO] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);
  const [state, setState] = useState(false);
  // console.log(toast);
  const tenMinutesFromNow = new Date(new Date().getTime() + 10 * 60 * 1000);
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJuaWtoaWwua2hhdHJpQHRoZW1hZ2lpY2lhbnMuY29tIiwiYXBpX3Rva2VuIjoiRW00MERPelVEWUo5aVFhUXRxLXM4YnVvNnRXWS1mbjJNRlItMmwtclJJZEN5QU1HVFpJeHl0RW9tRW91T1Z2QlFfVSJ9LCJleHAiOjE3MDgxOTk4Mzd9.MSIlUcwfpP_nPC1JSJrzWx6B9glAlhf48YEpqgo5kOU",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res, "yourToken");
        const a = res.data.data.map((each) => {
          console.log(each, "this is country");
          const b = {
            name: "country",
            value: each.name,
            label: each.name,
          };
          return b;
        });
        console.log(a, "yooooo");
        setFromCountries(a);
        setToCountries(a);
      })
      .catch((err) => {
        console.log(err, "yourToken,no");
      });
    // })
    // .catch((err) => {
    //   console.log(err, "yourToken");
    // });
  }, []);
  const data = [
    { from: "USA", to: " India" },
    { from: "India", to: "Usa" },
    { from: "UK", to: "India" },
    { from: "India", to: "UK" },
    { from: "Canada", to: "India" },
    { from: "India", to: "Canada" },
    { from: "Dubai", to: "India" },
    { from: "India", to: "Dubai" },
    { from: "Europe", to: "India" },
    { from: "India", to: "Europe" },
  ];
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "50%",
      right: "auto",
      minWidth: "300px",
      bottom: "auto",
      marginRight: "-50%",
      linearGradient: "(to right, #ffffff, #c7dcf1)",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    if (!(countryFrom === null) && !(countryTo === null)) {
      setButtonClick(true);
    }
    if (countryFrom === null || countryTo === null) {
      toast.error("Please choose the country", {});
    }
  }
  function closeModal() {
    setButtonClick(false);
  }

  const [userInfo, serUserInfo] = useState({ name: "", mobile: "", email: "" });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [regErrors, setRegErrors] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const required = {
    name: "name is required field",
    mobile: "mobile number is required field",
    email: "email is required field",
  };
  const valid = {
    mobile: "mobile number is not valid",
    email: "email is not valid",
  };
  const validRegrex = {
    email(thisemail) {
      return /\S+@\S+\.\S+/.test(thisemail);
    },
    mobile(mobile) {
      const mobileRegex =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return mobileRegex.test(mobile);
    },
  };
  const handleChange = (e) => {
    serUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handlesubmit = (e) => {
    e?.preventDefault();
    const newErrors = {};
    const newRegErrors = {};
    for (const fieldName in required) {
      if (!userInfo[fieldName]) {
        newErrors[fieldName] = required[fieldName];
      }
    }
    for (const fieldName in valid) {
      if (userInfo[fieldName]) {
        if (!validRegrex[fieldName]([userInfo[fieldName]])) {
          newRegErrors[fieldName] = valid[fieldName];
        }
      }
    }

    if (newErrors) {
      setErrors(newErrors);
    }
    if (newRegErrors) {
      setRegErrors(newRegErrors);
    }
    console.log(!Object.keys(newErrors));
    if (!Object.keys(newErrors).length && !Object.keys(newRegErrors).length) {
      console.log("woring");
      const a = Math.random();
      Cookies.set("myCookieName", a, {
        expires: 1,
      });
    }
    if (!Object.keys(newErrors).length && !Object.keys(newRegErrors).length) {
      redirectTo("/thankyou");
    }
  };
  return (
    <div className="md:pl-20 md:py-12  bg-cement ">
      <div className="flex max-md:flex-col">
        <div className="w-3/5 max-md:w-full max-md:p-6">
          <p className="font-bold md:text-3xl max-md:text-2xl text-black ">
            Let’s Find a location
          </p>
          <div className="flex  max-md:flex-col justify-start items-center">
            <div className="w-[30%] max-md:w-full p-2 md:pl-0">
              <p className="text-xs">From</p>
              {!state && (
                <Select
                  onChange={(e) => {
                    setCountryFrom(e.value);
                    setToCountries(
                      fromCountries.filter((each) => {
                        return each.value !== e.value;
                      })
                    );
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,

                    colors: {
                      ...theme.colors,
                      text: "orangered",
                      primary25: "#FF6341",
                      primary: "#174275",
                    },
                  })}
                  options={fromCountries}
                  placeholder={"Country from"}
                  styles={{
                    placeholder: (baseStyles, state) => ({
                      ...baseStyles,
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                    }),
                  }}
                />
              )}
              {state && (
                <div className=" border bg-white border-border flex items-center justify-between">
                  <input
                    value={countryFrom}
                    onClick={() => {
                      setState(false);
                    }}
                    className="p-2 border-none outline-none w-[70%]"
                  />
                  <div className="bg-white flex itemx-center justify-between gap-3 mr-2 pl-2 border-s-2">
                    <i
                      className="fa-solid fa-chevron-down font-bold text-lg"
                      style={{ color: "#e5e7eb" }}
                    ></i>{" "}
                  </div>
                </div>
              )}
            </div>

            <div className="w-[30%] p-2 max-md:w-full">
              <p className="text-xs">to</p>
              {!state && (
                <Select
                  onChange={(e) => {
                    setCountryTO(e.value);
                    setFromCountries(
                      toCountries.filter((each) => {
                        return each.value !== e.value;
                      })
                    );
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,

                    colors: {
                      ...theme.colors,
                      text: "orangered",
                      primary25: "#FF6341",
                      primary: "#174275",
                    },
                  })}
                  options={toCountries}
                  placeholder="Country to"
                  styles={{
                    placeholder: (baseStyles, state) => ({
                      ...baseStyles,
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                    }),
                  }}
                />
              )}{" "}
              {state && (
                <div className=" border bg-white border-border flex items-center justify-between">
                  <input
                    value={countryTo}
                    onClick={() => {
                      setState(false);
                    }}
                    className="p-2 border-none outline-none w-[70%]"
                  />
                  <div className="bg-white flex itemx-center justify-between gap-3 mr-2 pl-2 border-s-2">
                    <i
                      className="fa-solid fa-chevron-down font-bold text-lg"
                      style={{ color: "#e5e7eb" }}
                    ></i>{" "}
                  </div>
                </div>
              )}
            </div>
            <div className="w-[30%] max-md:w-4/5 flex flex-col items-center justify-end pt-4">
              <button
                className="text-base bg-primary text-white w-full p-2 rounded-xl"
                onClick={() => {
                  openModal();

                  // redirectTo.push("/thankyou");
                }}
              >
                Find a Location
              </button>
            </div>
          </div>
        </div>
        <div
          // style={{ borderRadius: "200px 0 0 200px" }}
          className="explore md:w-2/5 bg-orange flex items-center justify-center md:gap-12 max-md:gap-5 md:pr-20 py-3 max-md:flex-col "
        >
          <Image
            src={dart}
            id="rotateImage"
            alt="img"
            quality={100}
            unoptimized
          />
          <p className="font-bold md:text-3xl max-md:text-2xl text-white ">
            Explore
            <br className="max-md:contents" /> Locations
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap gap-4 items-center justify-center md:pr-20 mt-4">
        {data.map((each, index) => {
          return (
            <div
              className="bg-ice flex px-6 max-md:px-2 py-2 gap-2 items-center justify-center rounded-[15px] cursor-pointer hover:border "
              key={index}
              onClick={() => {
                setCountryFrom(each.from);
                setCountryTO(each.to);
                setState(true);
              }}
            >
              <p className="text-base max-sm:text-sm text-black font-semibold">
                {each.from}
              </p>
              <Image src={arro} alt="img" quality={100} unoptimized />
              <p className="text-base max-sm:text-sm text-black font-semibold">
                {each.to}
              </p>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={buttonClick}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div id="locationform rounded-3xl">
          <p className="font-bold text-3xl text-black text-left ">
            To guide you better we need some basic information
          </p>
          <p className="text-sm text-black ">
            We respect your decisions and ensure you that your data is safe with
            us
          </p>

          <form onSubmit={handlesubmit}>
            <div className="flex-col flex">
              <label className="mt-4">Name*</label>
              <input
                placeholder="enter your name"
                className="border border-black  p-3  rounded-2xl"
                value={userInfo.name}
                name="name"
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
              <label className="mt-4">E-mail*</label>
              <input
                placeholder="enter your e-mail"
                value={userInfo.email}
                name="email"
                onChange={handleChange}
                className="border border-black  p-3  rounded-2xl"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
              {regErrors.email && (
                <p className="text-sm text-red-600">{regErrors.email}</p>
              )}
              <label className="mt-4">Mobile Number*</label>
              <input
                type="number"
                value={userInfo.mobile}
                name="mobile"
                onChange={handleChange}
                placeholder="enter your mobile number"
                className="border border-black  p-3  rounded-2xl"
              />{" "}
              {errors.mobile && (
                <p className="text-sm text-red-600">{errors.mobile}</p>
              )}
              {regErrors.mobile && (
                <p className="text-sm text-red-600">{regErrors.mobile}</p>
              )}
              <button
                type="submit"
                className="bg-[#2e5bf4] p-2 w-2/5 m-auto rounded-md text-white mt-3"
              >
                Lets Begin
              </button>
            </div>{" "}
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FindLoc;

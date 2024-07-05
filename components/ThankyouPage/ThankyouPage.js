import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const ThankyouPage = () => {
  const router = useRouter();
  const redirectTo = (href) => {
    router.push(href);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      Cookies.remove("myCookieName");
      redirectTo("/");
      console.log("Function executed after 10 seconds");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="thankspageform flex items-center justify-center flex-col">
      <p className="text-3xl text-primary font-bold text-center">
        Thank you for reaching out.
      </p>
      <p className="text-base text-orange font-semibold text-center">
        Our team will contact you shortly.
      </p>
    </div>
  );
};

export default ThankyouPage;

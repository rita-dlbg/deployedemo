import "@/styles/globals.css";
import "@/styles/global.scss";

import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }) {
  return (
    // <Component {...pageProps} >
    //
    //   <Component /><>
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
    // <Component {...pageProps}>
    //   <ToastContainer />
    // </Component>
  );
}

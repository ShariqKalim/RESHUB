import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useEffect } from "react";
import router from "next/router";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      router.push("/dashboard");
    } else return;
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

import router from "next/router";
import { useState, useEffect } from "react";
import { firebase } from "../../firebase";
import Link from "next/link";
import Image from 'next/image'

import VisibilityIcon from "@mui/icons-material/Visibility";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar_dashboard from "../../components/Navbar_dashboard";
const Index = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } else setIsUserSignedIn(false);
  });
  if (isUserSignedIn === true) {
  } else {
    router.push("/login");
  }

  useEffect(() => {
    setTimeout(() => {
      toast.success("Welcome to dashboard", {
        position: "top-center",
        autoClose: 3000,
      });
    }, 1000);
  }, []);

  return (
    <>
      <Navbar_dashboard />
      <div className="p-3 shadow-xl border-2 mt-5">
        <h1 className="font-bold text-xl text-center">
          Choose Resume Template From Below
        </h1>
      </div>

      {/* starting of body part */}
      <div className="w-11/12 mx-auto mt-5">
        {/* starting of parts */}
        <div className="w-80 rounded-xl h-80 border-2 border-indigo-200 transform hover:scale-105 shadow-lg">
        <Image src="/images/templates/1.jpg"
            alt="template 1"
            className="" height="250" width="300"></Image>
          <div className="w-32 mr-3 mt-3 flex justify-around float-right ">
            <h1>
              <Link href="/dashboard/tempview/one">
                <VisibilityIcon className="text-4xl cursor-pointer" />
              </Link>
            </h1>
            <Link href="/dashboard/tempedit/edit1">
              <h1 className="border-2 border-indigo-500 text-indigo-700 p-1 w-32 font-medium text-center cursor-pointer rounded-full ml-5">
                create
              </h1>
            </Link>
          </div>
        </div>
        {/* ending of parts */}
      </div>

      <ToastContainer />
    </>
  );
};

export default Index;

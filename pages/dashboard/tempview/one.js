import Navbar_dashboard from "../../../components/Navbar_dashboard";
import Notices from "../../../components/Notices";
import { useState } from "react";
import { firebase } from "../../../firebase";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const One = () => {
  const router = useRouter();
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

  return (
    <>
      <Navbar_dashboard />
      <Notices />

      <div className="-mt-28 -ml-40 h-screen">
        <div className="  border-4 shadow-lg border-indigo-100 w-6/12  float-right m-10  h-3/5 overflow-y-auto -mt-96">
          <Image width="900" height="1300" src="/images/templates/1.jpg" alt="" className="mx-auto " ></Image>
        </div>
      </div>
      <div className="-mt-60">
        <Link href="/dashboard/tempedit/edit1">
          <button
            className="w-40 float-right mr-14 p-1 rounded-full text-white font-medium text-lg tracking-wide bg-gradient-to-r from-indigo-600
       to-indigo-500 -mt-96"
          >
            Edit
          </button>
        </Link>
      </div>
    </>
  );
};

export default One;

import Link from "next/link";
import { firebase, auth } from "../firebase";
import { useRouter } from "next/router";

const Navbar_dashboard = () => {
  const router = useRouter();
  const signout = () => {
    localStorage.removeItem("auth");
    firebase.auth().signOut();
    router.push("/login");
  };
  return (
    <>
      <div className="mt-2 flex justify-between">
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className="w-40 ml-10" />
          </Link>
        </div>
        <div className="w-8/12 mt-3">
          <ul className="flex float-right mx-20 w-6/12 justify-between font-normal tracking-wider">
            <Link href="/">
              <li className="cursor-pointer border-2 border-indigo-700 text-indigo-700 font-medium rounded p-1 w-20 text-center ">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer mt-1 ">About</li>
            </Link>

            <Link href="/contact">
              <li className="cursor-pointer mt-1 ">Contact</li>
            </Link>

            <button
              onClick={signout}
              className="p-1 w-40 text-center text-white  cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar_dashboard;

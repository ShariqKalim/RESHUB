import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import Link from "next/Link";
import { firebase, auth } from "../firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
const login = () => {
  const router = useRouter();
  const signInWithGoogle = async () => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    const res = await firebase.auth().signInWithPopup(google_provider);
    if (res) {
      localStorage.setItem("auth", "ok");
      router.push("/dashboard");
    }
  };
  const signInWithFacebook = async () => {
    const facebook_provider = new firebase.auth.FacebookAuthProvider();
    const res = await firebase.auth().signInWithPopup(facebook_provider);
    if (res) {
      localStorage.setItem("auth", "ok");
      router.push("/dashboard");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = auth.signInWithEmailAndPassword(email, password);
    if (response) {
      localStorage.setItem("auth", "ok");
      router.push("/dashboard");
    } else {
      toast.error("Invalid Credentials", {
        autoClose: 2500,
        position: "top-center",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-around shadow-xl w-8/12 mx-auto">
        <div className="w-8/12 mx-auto my-28  p-10">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-10">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="w-full "
                required
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                className="w-full"
                required
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full my-5 text-white font-medium tracking-wide text-xl bg-gradient-to-r from-indigo-600 to-indigo-500 rounded p-2">
              Log In
            </button>
          </form>
          <Link href="/register">
            <p className="cursor-pointer text-center text-indigo-700">
              Dont have an account? Register Here
            </p>
          </Link>
        </div>
        <div className="my-40 p-10 border-l-4 h-auto border-gray-700">
          <button
            onClick={signInWithGoogle}
            className="my-5 w-80 p-1 text-white bg-gradient-to-r from-red-500 to-red-400 font-medium tracking-wide text-lg rounded"
          >
            Login with google
          </button>
          <h4 className="text-center text-gray-800 text-lg font-medium">or</h4>
          <button
            onClick={signInWithFacebook}
            type="submit"
            className="my-5 w-80 p-1 text-white bg-gradient-to-r from-blue-500 to-blue-400 font-medium tracking-wide text-lg rounded"
          >
            Login with facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default login;

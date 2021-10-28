import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import { auth } from "../firebase";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [cpassword, setCpassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://reshub-auth-aeead-default-rtdb.firebaseio.com/registration.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          designation,
          password,
          cpassword,
        }),
      }
    );

    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (res) {
      toast.success("Registered successfully!", {
        autoClose: 2500,
        position: "top-center",
      });
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    }
  };
  return (
    <>
      <Navbar />
      <div className="w-8/12 mx-auto my-10">
        <h1 className="p-2 text-center text-xl bg-gradient-to-r from-indigo-600 to-indigo-400 text-white mb-5 rounded font-medium tracking-wider">
          Register Here
        </h1>
        <form onSubmit={(e) => handleRegister(e)} method="POST">
          <div className="mb-5">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              className="w-full"
              autoComplete="none"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="mb-5">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-full"
              required
              autoComplete="none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="flex justify-between mb-10">
            <TextField
              id="outlined-basic"
              label="Designation"
              variant="outlined"
              className="w-6/12"
              autoComplete="off"
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
            <TextField
              id="outlined-number"
              type="number"
              label="Mobile"
              variant="outlined"
              className="w-5/12"
              autoComplete="off"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <TextField
              id="outlined-password-input"
              type="password"
              label="Password"
              variant="outlined"
              className="w-full"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <br />
          <div className="mb-5">
            <TextField
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              className="w-full"
              autoComplete="off"
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
          </div>
          <br />

          <button
            type="submit"
            className="w-60 float-right font-medium text-lg tracking-wide text-white p-2 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default register;

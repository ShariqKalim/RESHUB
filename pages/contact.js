import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    designation: "",
    message: "",
  });

  const postData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    const { name, email, designation, message } = user;
    if (name && email && designation && message) {
      const res = await fetch(
        "https://reshub-2cd4e-default-rtdb.firebaseio.com/reshubcontact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            designation,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          designation: "",
          message: "",
        });
        toast.warn("Thanks for submitting!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } else {
      toast.error("Please fill all the data!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="w-8/12 mx-auto shadow-lg p-16 -mt-5">
        <form method="POST">
          <div className="mb-10">
            <TextField
              id="outlined-basic"
              label="Full Name"
              name="name"
              variant="outlined"
              value={user.name}
              onChange={postData}
              className="w-full
            "
              required
            />
          </div>
          <div className="mb-10">
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              value={user.email}
              onChange={postData}
              className="w-full
            "
              required
            />
          </div>
          <div className="mb-10">
            <TextField
              id="outlined-basic"
              label="Designation"
              name="designation"
              variant="outlined"
              value={user.designation}
              onChange={postData}
              className="w-full"
              required
            />
          </div>
          <textarea
            cols="116"
            rows="10"
            className="border-2 border-gray-300 p-3 rounded"
            placeholder="Type here......"
            value={user.message}
            name="message"
            onChange={postData}
            required
          ></textarea>
          <button
            onClick={sendData}
            className="w-40 text-md font-medium tracking-wide bg-gradient-to-r from-indigo-500 to-indigo-400 text-white p-1 rounded-full float-right my-5"
          >
            Get in touch
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default contact;

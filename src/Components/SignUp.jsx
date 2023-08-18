import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import bg from "../Assets/bg.jpg";
import OAth from "./OAth";
import { toast } from "react-toastify";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../Firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  function onchange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/welcome");
    } catch (error) {
      toast.error("Something went wrong with the registration");
    }
  }
  return (
    <div className="relativ">
      <div className="w-1/2 absolute ">
      <div>
        <img src={bg} alt="bg" className=" h-[706px] relative " />
        <h1 className="absolute bottom-[50%] ml-36 text-white rotate-45  text-6xl bg-transparent p-4 rounded border border-gray-100 ">wonderland</h1>
        </div>
      </div>

      <div className="   absolute left-[50%] w-1/2 ">
        <form onSubmit={onSubmit}>
          <div className="border border-blue-800 bg-blue-100 rounded-md w-[400px] h-[530px]  p-10 ml-[180px] mt-[100px]">
            <h1 className="text-center font-bold text-2xl ">Sign Up</h1>
            <div className="flex flex-col mt-3">
              <input
                type="text"
                id="name"
                value={name}
                onChange={onchange}
                placeholder="Enter your Name"
                className="border border-gray-300 text-xl rounded p-3"
              />
            </div>
            <div className="flex flex-col mt-3">
              <input
                type="email"
                id="email"
                value={email}
                onChange={onchange}
                placeholder="Enter your email"
                className="border border-gray-300 text-xl rounded p-3"
              />
            </div>

            <div className="relative mt-3">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onchange}
                placeholder="password"
                className="w-full p-3 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <Link
              to="/forgotpassword"
              className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-[220px] mt-2 text-xs font-poppins whitespace-nowrap"
            >
              Forgot Password?
            </Link>
            <div className="  mt-6">
              <button className="bg-blue-700 hover:bg-blue-900     text-white text-center w-full p-2 rounded text-lg">
                Sign Up
              </button>
            </div>
            <div className=" flex my-4 before:border-t items-center before:flex-1  before:border-gray-300 after:flex-1  after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAth className=" " />
            <p className=" text-black text-xs mt-4 ml-16  font-poppins">
              Already have an account
              <Link
                to="/"
                className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

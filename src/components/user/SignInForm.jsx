"use client";
import React, { useEffect, useState } from "react";
import { getUsers, setIsLoggedIn } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const SignInForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { users, isLoggedIn } = useSelector((store) => store.user);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  let userInfo = users.find((user) => user.email == input.email);
  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.name == "" || input.email == "") {
      setErrorMessage("Inputs can't blank");
      return false;
    } else if (input.name == "" && input.email == "") {
      setErrorMessage("All inputs can't blank");
      return false;
    } else if (
      users.some(
        (user) => user.email == input.email && user.password == input.password
      )
    ) {
      localStorage.setItem("userId", userInfo.id);
    //   dispatch(setIsLoggedIn());
      router.replace("/");
    } else {
      setErrorMessage("Something wrong");
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {errorMessage ? (
        <div className=" bg-red-600 ">
          <h2 className="text-center text-2xl font-bold">{errorMessage}</h2>
        </div>
      ) : (
        ""
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around items-center w-full h-full px-16 py-5"
      >
        <h2 className="text-4xl font-bold">Sign In</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="h-8 rounded-md focus:outline-0 text-black px-2"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="h-8 rounded-md focus:outline-0 text-black px-2"
            onChange={handleChange}
          />
        </div>
        <button className="bg-orange-400 rounded-xl py-3 w-1/2">Sign In</button>
      </form>
    </>
  );
};

export default SignInForm;

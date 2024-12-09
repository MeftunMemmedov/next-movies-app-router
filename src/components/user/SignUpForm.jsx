"use client";
import React, { useEffect, useState } from "react";
import { getUsers } from "@/redux/userSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "@/api/server";

const SignUpForm = () => {
  const { users } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.name == "" || input.email == "" || input.password == "") {
      setErrorMessage("Inputs can't blank");
      return false;
    } else if (input.name == "" && input.email == "" && input.password == "") {
      setErrorMessage("All inputs can't blank");
      return false;
    } else if (users.some((user) => user.email == input.email)) {
      setErrorMessage("User with this email is already exists");
      return false;
    } else {
      createNewUser(input);
      setErrorMessage("");
      router.replace("/sign-in");
      return true;
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (input.name != "" || input.email != "") {
      setErrorMessage("");
    }
  }, [input]);
  return (
    <>
      <div className="lg:w-2/5 md:w-1/2 w-full h-96">
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
          <h2 className="text-4xl font-bold">Sign Up</h2>
          <div className="flex flex-col w-full ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-8 rounded-md focus:outline-0 text-black px-2"
              onChange={handleChange}
            />
          </div>
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
          <button className="bg-orange-400 rounded-xl py-3 w-1/2">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;

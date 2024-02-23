"use client";
import React from "react";
import Link from "next/link"
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export default function Signup(){
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
    return (

        <>
       
        <head>
      <title>
        Employee-management-SignUp
      </title>
     </head>
        <main>
            <section className="bg-white">
            <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      Webknot
    </span>{" "}
    Technologies
  </h1>
  <p className="text-center text-lg font-normal text-gray-500 lg:text-xl">
    Employee Management System
  </p>
  <br />
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-2/3 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-teal-500 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
          Signup
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <input
              type="text"
              name="text"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="First name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="text"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Last name"
              required
            />
          </div>
          <div>
          <label for="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex relative justify-center align-middle ">
          
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={showPassword ? "text" : "password"}
                  className="px-4 py-6 mt-2 mb-3 bg-white text-black"
                  required
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />

                {showPassword ? (
                  <EyeClosedIcon
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ fontSize: "30px !important" }}
                    className="hover:text-purple-400 cursor-pointer absolute right-6 top-6"
                  />
                ) : (
                  <EyeOpenIcon
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ fontSize: "30px !important" }}
                    className="hover:text-purple-400 cursor-pointer absolute right-6 top-6"
                  />
                )}
              </div>
          <div>
            <input
              type="text"
              name="text"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Role"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-black"
              >
                I accept the{" "}
                <Link
                  className="font-medium text-primary-600 hover:underline "
                  href="#"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full text-white bg-primary-600 border border-grey-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-white hover:text-teal-500">
          
          <Link href="/profile">Create account
          </Link> 
          </button>
          <p className="text-sm font-light text-white">
            Already have an account?{" "}
            <Link
              href="/"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

        </main>
        </>
    )
}
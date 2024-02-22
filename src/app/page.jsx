"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  return (
    <>
    <div className="cover flex flex-col min-h-screen items-center justify-content py-2">
     <head>
      <title>
        Employee-management-Login
      </title>
     </head>
     
     <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
     <section className="w-2/3 bg-white">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-2/3  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-teal-500 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
          Login
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
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
                  className="px-4 py-6 mt-2 mb-3 bg-white text-gray-200"
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
          <div className="flex items-start"></div>
          <button
            type="submit"
            className="w-full text-white bg-primary-600 border border-grey-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-white hover:text-teal-500"
          >
            Login
          </button>
          <p className="text-sm font-light text-white">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Create here
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

      
    </main>
    </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import SIgnupbackground from "../assets/SIgnupbackground.png";
import Link from "next/link";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <div className="flex items-center justify-center ">
        <Image src={SIgnupbackground} />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden border-t-4 border-b-4 border-blue-200">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-full opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-50 rounded-tl-full opacity-70"></div>

          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100"></div>

          <div
            className="absolute -bottom-5 left-0 right-0 h-12 bg-blue-100 opacity-30"
            style={{ borderRadius: "100% 100% 0 0" }}
          ></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                  Create Account
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label
                  htmlFor="username"
                  className="block text-blue-800 text-sm font-semibold transition-all duration-300 hover:text-blue-600"
                >
                  Username
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full text-black  px-4 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300 pl-10 bg-gradient-to-r from-white to-blue-50 shadow-sm group-hover:shadow-md"
                    placeholder="Choose a username"
                    required
                  />
                  <div className="absolute left-3 top-3 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-blue-800 text-sm font-semibold transition-all duration-300 hover:text-blue-600"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    className="w-full text-black px-4 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300 pl-10 bg-gradient-to-r from-white to-blue-50 shadow-sm group-hover:shadow-md"
                    placeholder="Enter your email"
                    required
                  />
                  <div className="absolute left-3 top-3 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-blue-800 text-sm font-semibold transition-all duration-300 hover:text-blue-600"
                  >
                    Password
                  </label>
                  <span className="text-xs text-blue-500 italic">
                    Min. 8 characters
                  </span>
                </div>
                <div className="relative group">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-black  px-4 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300 pl-10 bg-gradient-to-r from-white to-blue-50 shadow-sm group-hover:shadow-md"
                    placeholder="Create a password"
                    required
                  />
                  <div className="absolute left-3 top-3 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-blue-500 border-2 border-blue-200 rounded focus:ring-blue-200"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-blue-700">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline font-medium"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg transform hover:-translate-y-1"
                >
                  Sign Up
                </button>
              </div>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-blue-100"></div>
                <span className="flex-shrink mx-4 text-blue-400 text-sm">
                  Already registered?
                </span>
                <div className="flex-grow border-t border-blue-100"></div>
              </div>

              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-block bg-white text-blue-500 hover:text-blue-700 font-medium py-2 px-6 border-2 border-blue-200 rounded-lg transition-all duration-300 hover:shadow-md hover:border-blue-300"
                >
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

"use client"
import React, { useState } from "react";
import Image from "next/image";
import Loginbg from "../assets/Login.png"
import Link from "next/link";
import Loginbackground from "../assets/Loginbackground.png"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
    // Add your authentication logic here
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Left side - Image */}
      <div className="flex items-center justify-center ">
        <Image src={Loginbackground} alt="loginbg" />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-4 border-cyan-100 relative overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-cyan-50 rounded-br-3xl border-r-4 border-b-4 border-cyan-200"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-50 rounded-bl-3xl border-l-4 border-b-4 border-cyan-200"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-50 rounded-tr-3xl border-r-4 border-t-4 border-cyan-200"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-50 rounded-tl-3xl border-l-4 border-t-4 border-cyan-200"></div>

          {/* Decorative waves */}
          <div
            className="absolute -bottom-12 left-0 right-0 h-16 bg-cyan-100 opacity-20"
            style={{ borderRadius: "100% 100% 0 0" }}
          ></div>
          <div
            className="absolute -top-12 left-0 right-0 h-16 bg-cyan-100 opacity-20"
            style={{ borderRadius: "0 0 100% 100%" }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-700 to-cyan-500 text-transparent bg-clip-text drop-shadow">
              Welcome To Tutador
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-cyan-800 text-sm font-semibold mb-2 transition-all duration-300 hover:text-cyan-600"
                >
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full text-black px-4 py-3 border-2 border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 pl-10 bg-cyan-50 shadow-sm hover:shadow-md"
                    placeholder="Enter your username"
                    required
                  />
                  <div className="absolute left-3 top-3 text-cyan-500">
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

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-cyan-800 text-sm font-semibold transition-all duration-300 hover:text-cyan-600"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-cyan-600 hover:text-cyan-800 font-medium transition-all duration-300 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 text-black border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 pl-10 bg-cyan-50 shadow-sm hover:shadow-md"
                    placeholder="Enter your password"
                    required
                  />
                  <div className="absolute left-3 top-3 text-cyan-500">
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

              <div className="mb-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white py-3 px-4 rounded-lg hover:from-cyan-700 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg transform hover:-translate-y-1"
                >
                  <Link
                    href="/question"
                    className="flex items-center justify-center"
                  >
                    <span>Log In</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </button>
              </div>

              <div className="text-center relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-cyan-200"></div>
                </div>
                <div className="relative">
                  <span className="bg-white px-4 text-cyan-600 text-sm font-medium">
                    OR
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-cyan-700 text-sm">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-bold text-cyan-500 hover:text-cyan-700 transition-all duration-300 hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

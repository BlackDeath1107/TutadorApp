"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Question = () => {
  // Initial state with 6 empty answers
  const [answers, setAnswers] = useState(Array(6).fill(""));
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "What is your favorite color?",
    "How many hours do you sleep on average?",
    "What is your preferred programming language?",
    "How often do you exercise per week?",
    "What is your favorite book?",
    "Where would you like to travel next?",
  ];

  // Handle input changes
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted answers:", answers);
    setSubmitted(true);
    // Add your submission logic here
  };

  // Set focus on active question
  useEffect(() => {
    const input = document.getElementById(`question-${activeQuestion}`);
    if (input) {
      input.focus();
    }
  }, [activeQuestion]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-2xl p-8 border border-cyan-200 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-cyan-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>

        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-8 text-center">
          <span className="relative inline-block animate-pulse">
            Questionnaire
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="relative z-10">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`mb-8 transform transition-all duration-500 ${
                activeQuestion === index ? "scale-105" : "scale-100"
              }`}
              style={{
                opacity: submitted
                  ? 1
                  : Math.max(1 - Math.abs(activeQuestion - index) * 0.2, 0.6),
              }}
            >
              <label
                htmlFor={`question-${index}`}
                className="block text-cyan-800 font-medium mb-3 text-lg transition-all duration-300 group"
              >
                <span className="inline-flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold mr-3 shadow-md group-hover:shadow-cyan-300/50">
                    {index + 1}
                  </span>
                  <span className="group-hover:text-blue-600 transition-colors duration-300">
                    {question}
                  </span>
                </span>
              </label>
              <div className="relative">
                <input
                  id={`question-${index}`}
                  type="text"
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  onFocus={() => setActiveQuestion(index)}
                  className="w-full px-4 py-3 border-2 border-cyan-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           hover:border-cyan-400 bg-white bg-opacity-80 transition-all duration-300
                           placeholder-cyan-300 text-cyan-800"
                  placeholder={`Enter your ${question
                    .toLowerCase()
                    .split(" ")
                    .slice(-1)[0]
                    .replace("?", "")}`}
                />
                <div
                  className={`absolute inset-0 -z-10 rounded-lg transition-opacity duration-500 ${
                    activeQuestion === index ? "opacity-100" : "opacity-0"
                  } bg-gradient-to-r from-cyan-300/20 to-blue-300/20 blur-md`}
                ></div>
              </div>
            </div>
          ))}

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-8 rounded-lg
                        shadow-lg hover:shadow-xl hover:shadow-cyan-500/30
                        transform hover:-translate-y-1 active:translate-y-0
                        transition-all duration-300 focus:outline-none group overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="absolute inset-0 w-1/3 h-full bg-white opacity-10 skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                <span>Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <Link href="/dashboard" className="absolute inset-0"></Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;

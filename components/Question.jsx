"use client"
import React, { useState } from "react";
import Link from "next/link";


const Question = () => {
  // Initial state with 6 empty answers
  const [answers, setAnswers] = useState(Array(6).fill(""));

  // Sample questions - replace with your actual questions
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
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-8 border border-cyan-200">
        <h1 className="text-2xl font-bold text-cyan-800 mb-6 text-center">
          Questionnaire
        </h1>

        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <label
                htmlFor={`question-${index}`}
                className="block text-cyan-700 font-medium mb-2"
              >
                {index + 1}. {question}
              </label>
              <input
                id={`question-${index}`}
                type="text"
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                className="w-full px-4 py-2 border border-cyan-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-200"
                placeholder="Your answer"
              />
            </div>
          ))}

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-md
                        shadow-md hover:shadow-lg transform hover:-translate-y-1
                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            >
              <Link href="/dashboard">Submit</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Dash from "../assets/Dash.jpeg";
import Online from "../assets/Online.jpeg";
import Teacher from "../assets/Teacher.jpeg";

const Library = () => {
  const suggestedCourses = [
    {
      id: 1,
      title: "JEE Physics Masterclass",
      instructor: "Dr. Rohit Sharma",
      category: "Physics",
      image: Online,
    },
    {
      id: 2,
      title: "Advanced Mechanics",
      instructor: "Prof. Ananya Das",
      category: "Physics",
      image: Online,
    },
    {
      id: 3,
      title: "Chemistry for JEE",
      instructor: "Dr. Priya Patel",
      category: "Chemistry",
      image: Online,
    },
    {
      id: 4,
      title: "Mathematics for JEE",
      instructor: "Prof. Arjun Reddy",
      category: "Mathematics",
      image: Online,
    },
    {
      id: 5,
      title: "Electromagnetism Deep Dive",
      instructor: "Dr. Sanjay Verma",
      category: "Physics",
      image: Online,
    },
    {
      id: 6,
      title: "Thermodynamics & Modern Physics",
      instructor: "Prof. Meera Iyer",
      category: "Physics",
      image: Online,
    },
  ];

  const physicsTopics = [
    {
      id: 1,
      topic: "Mechanics & Fluids",
      description: "Focus on rotational motion and fluid dynamics",
      difficulty: "High",
      importance: "Very High",
    },
    {
      id: 2,
      topic: "Electromagnetism",
      description: "Master electromagnetic induction and AC circuits",
      difficulty: "High",
      importance: "High",
    },
    {
      id: 3,
      topic: "Optics",
      description: "Practice wave optics and polarization concepts",
      difficulty: "Medium",
      importance: "Medium",
    },
    {
      id: 4,
      topic: "Modern Physics",
      description: "Focus on quantum mechanics and nuclear physics",
      difficulty: "High",
      importance: "High",
    },
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100 transition-all duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-300 opacity-20"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <nav
        className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg transition-all duration-300"
        style={{
          transform: `translateY(${scrollPosition > 50 ? "-10px" : "0"})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-500 hover:to-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  TUTADOR
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#courses"
                className="text-cyan-700 hover:text-cyan-500 px-3 py-2 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
              >
                Courses
              </a>
              <a
                href="#focus-topics"
                className="text-cyan-700 hover:text-cyan-500 px-3 py-2 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
              >
                Focus Topics
              </a>
              <Link
                href="/dashboard"
                className="text-cyan-700 hover:text-cyan-500 px-3 py-2 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
              >
                Profile
              </Link>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-white mb-4">
                Recommended JEE Courses For You
              </h1>
              <p className="text-cyan-100 text-lg mb-2">
                Based on your interests in JEE preparation, we've curated these
                courses to help you excel.
              </p>
            </div>
          </div>

          <div id="courses" className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-cyan-800 relative inline-block">
                Suggested Courses
                <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"></span>
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-all duration-300">
                  All
                </button>
                <button className="px-3 py-1 text-sm rounded-full bg-white text-cyan-700 hover:bg-cyan-100 transition-all duration-300">
                  Physics
                </button>
                <button className="px-3 py-1 text-sm rounded-full bg-white text-cyan-700 hover:bg-cyan-100 transition-all duration-300">
                  Chemistry
                </button>
                <button className="px-3 py-1 text-sm rounded-full bg-white text-cyan-700 hover:bg-cyan-100 transition-all duration-300">
                  Mathematics
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="transform transition-all duration-500 ease-out"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isLoaded
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.95)",
                    opacity: isLoaded ? 1 : 0,
                  }}
                >
                  <Link href={`/course/${course.id}`} className="block group">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                      <div className="relative overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.title}
                          className="w-full h-40 object-cover transition-all duration-700 group-hover:transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                          <div className="text-white font-medium">
                            {course.instructor}
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-lg font-semibold text-cyan-800 group-hover:text-cyan-600 mb-1 truncate transition-all duration-300">
                          {course.title}
                        </div>
                        <p className="text-cyan-600 text-sm mb-2">
                          {course.instructor}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-cyan-200">
                            {course.category}
                          </span>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-cyan-600 text-sm ml-1">
                              4.8
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div id="focus-topics" className="mt-16">
            <h2 className="text-2xl font-bold text-cyan-800 relative inline-block mb-6">
              Physics Topics to Focus On
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"></span>
            </h2>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-cyan-700 mb-4">
                Based on JEE exam patterns and student performance data, we
                recommend focusing on these key physics topics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {physicsTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="border border-cyan-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-cyan-50"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-cyan-800">
                        {topic.topic}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          topic.importance === "Very High"
                            ? "bg-red-100 text-red-700"
                            : topic.importance === "High"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {topic.importance}
                      </span>
                    </div>
                    <p className="text-cyan-600 mt-2">{topic.description}</p>
                    <div className="flex justify-between mt-3">
                      <span className="text-xs text-gray-500">
                        Difficulty: {topic.difficulty}
                      </span>
                      <button className="text-xs text-cyan-600 hover:text-cyan-800 font-medium">
                        View Resources →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Physics Study Plan</h3>
              <p className="mb-4">
                Follow this structured approach to master JEE Physics:
              </p>
              <ol className="space-y-2 pl-5 list-decimal">
                <li>Start with Mechanics foundations (1-2 months)</li>
                <li>Move to Electromagnetism core concepts (1-1.5 months)</li>
                <li>Cover Thermodynamics and Waves (1 month)</li>
                <li>Focus on Modern Physics and Optics (1 month)</li>
                <li>Regular problem solving and mock tests (throughout)</li>
              </ol>
              <button className="mt-4 bg-white text-cyan-700 px-4 py-2 rounded-md font-medium hover:bg-cyan-50 transition-all duration-300">
                Get Detailed Study Plan
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-cyan-800 to-cyan-900 text-white mt-16 py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                TUTADOR
              </div>
              <p className="text-cyan-200">
                Empowering students with quality education
              </p>
            </div>
            <div className="text-cyan-400">
              © 2025 Tutador. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default Library;

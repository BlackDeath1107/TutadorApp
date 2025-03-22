"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Dash from "../assets/Dash.jpeg"
import Online from "../assets/Online.jpeg"
import Teacher from "../assets/Teacher.jpeg"

const Dashboard = () => {
  const courses = [
    {
      id: 1,
      title: "WBJEE",
      instructor: "John Doe",
      category: "Competitive exams",
    },
    {
      id: 2,
      title: "JEE",
      instructor: "Jane Smith",
      category: "Competitive exams",
    },
    {
      id: 3,
      title: "JEE-ADVANCED",
      instructor: "Alex Johnson",
      category: "Competitive exams",
    },
    {
      id: 4,
      title: "NEET",
      instructor: "Sarah Wilson",
      category: "Competitive exams",
    },
    {
      id: 5,
      title: "GATE",
      instructor: "Michael Brown",
      category: "Competitive exams",
    },
    {
      id: 6,
      title: "CAT",
      instructor: "Emily Davis",
      category: "Competitive exams",
    },
    {
      id: 7,
      title: "KVPY",
      instructor: "David Miller",
      category: "Competitive exams",
    },
  ];

  const teacherVideos = [
    {
      id: 1,
      name: "Prof. John Doe",
      subject: "JEE",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      subject: "JEE-ADVANCED",
    },
    {
      id: 3,
      name: "Alex Johnson",
      subject: "JEE",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      subject: "NEET",
    },
    {
      id: 5,
      name: "Michael Brown",
      subject: "KVPY",
    },
    {
      id: 6,
      name: "Emily Davis",
      subject: "NEET",
    },
    {
      id: 7,
      name: "Emily Davis",
      subject: "WBJEE",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollLeft = (elementId) => {
    document
      .getElementById(elementId)
      .scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (elementId) => {
    document
      .getElementById(elementId)
      .scrollBy({ left: 300, behavior: "smooth" });
  };

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
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-500 hover:to-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-105">
                TUTADOR
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="border text-black border-cyan-200 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64 bg-white transition-all duration-300 group-hover:shadow-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg
                    className="w-5 h-5 absolute right-3 top-3 text-cyan-500 transition-all duration-300 group-hover:text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <a
                href="#courses"
                className="text-cyan-700 hover:text-cyan-500 px-3 py-2 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
              >
                Courses
              </a>
              <a
                href="#profile"
                className="text-cyan-700 hover:text-cyan-500 px-3 py-2 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
              >
                Profile
              </a>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <section
          className={`mb-16 transition-all duration-1000 ease-out transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Expand Your Knowledge With Expert-Led Courses
                </h1>
                <p className="text-cyan-100 text-lg mb-6">
                  Discover top-quality courses taught by industry experts and
                  elevate your skills today.
                </p>
                <button className="bg-white text-cyan-600 font-medium py-3 px-6 rounded-md hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Browse All Courses
                </button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-xl rotate-3 hover:rotate-0 transition-all duration-500 transform hover:scale-105">
                  <Image src={Dash}></Image>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-cyan-800 relative inline-block">
              Featured Courses
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"></span>
            </h2>
            <button className="text-cyan-600 hover:text-cyan-500 font-medium transition-all duration-300 transform hover:translate-x-1 flex items-center">
              View All
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="relative">
            <div
              id="coursesCarousel"
              className="overflow-x-auto flex space-x-6 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="flex-none w-72 transform transition-all duration-500 ease-out"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isLoaded
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.95)",
                    opacity: isLoaded ? 1 : 0,
                  }}
                >
                  <Link href="/courseone" className="block group">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                      <div className="relative overflow-hidden">
                        <Image
                          src={Online}
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

            <button
              onClick={() => scrollLeft("coursesCarousel")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-cyan-50 transition-all duration-300 hover:scale-110 z-10 opacity-80 hover:opacity-100"
            >
              <svg
                className="w-6 h-6 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollRight("coursesCarousel")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-cyan-50 transition-all duration-300 hover:scale-110 z-10 opacity-80 hover:opacity-100"
            >
              <svg
                className="w-6 h-6 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-cyan-800 relative inline-block">
              Get Demo Videos by Teachers
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"></span>
            </h2>
            <button className="text-cyan-600 hover:text-cyan-500 font-medium transition-all duration-300 transform hover:translate-x-1 flex items-center">
              View All
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="relative">
            <div
              id="teachersCarousel"
              className="overflow-x-auto flex space-x-6 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {teacherVideos.map((teacher, index) => (
                <div
                  key={teacher.id}
                  className="flex-none w-72 transform transition-all duration-500 ease-out"
                  style={{
                    transitionDelay: `${index * 100 + 300}ms`,
                    transform: isLoaded
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.95)",
                    opacity: isLoaded ? 1 : 0,
                  }}
                >
                  <Link href={`/teacher/${teacher.id}`} className="block group">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                      <div className="relative overflow-hidden">
                        <Image
                          src={Teacher}
                          alt={teacher.name}
                          className="w-full h-40 object-cover transition-all duration-700 group-hover:transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 to-transparent opacity-30 group-hover:opacity-70 transition-all duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                          <button className="bg-cyan-600 bg-opacity-90 rounded-full p-3 text-white hover:bg-opacity-100 transition-all duration-500 transform hover:scale-110 group-hover:shadow-lg">
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="absolute -bottom-10 group-hover:bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-900 to-cyan-900/60 p-4 backdrop-blur-sm transition-all duration-500">
                          <div className="text-white font-medium">
                            Watch Introduction Video
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-lg font-semibold text-cyan-800 group-hover:text-cyan-600 mb-1 transition-all duration-300">
                          {teacher.name}
                        </div>
                        <p className="text-cyan-600 text-sm">
                          {teacher.subject} Specialist
                        </p>
                      </div>
                      <div className="h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Scroll buttons */}
            <button
              onClick={() => scrollLeft("teachersCarousel")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-cyan-50 transition-all duration-300 hover:scale-110 z-10 opacity-80 hover:opacity-100"
            >
              <svg
                className="w-6 h-6 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollRight("teachersCarousel")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-cyan-50 transition-all duration-300 hover:scale-110 z-10 opacity-80 hover:opacity-100"
            >
              <svg
                className="w-6 h-6 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { count: "10,000+", label: "Students", icon: "👨‍🎓" },
              { count: "200+", label: "Courses", icon: "📚" },
              { count: "50+", label: "Instructors", icon: "👨‍🏫" },
              { count: "95%", label: "Satisfaction", icon: "🌟" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white"
                style={{
                  transitionDelay: `${index * 100 + 600}ms`,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan-700">
                  {stat.count}
                </div>
                <div className="text-cyan-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-800 to-cyan-900 text-white mt-16 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                TUTADOR
              </div>
              <p className="text-cyan-200 max-w-md">
                Empowering students worldwide with high-quality education and
                expert-led courses.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Courses
                </h3>
                <ul className="space-y-2">
                  {[
                    "Web Development",
                    "Programming",
                    "Design",
                    "Data Science",
                    "AI",
                  ].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-cyan-300 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Company
                </h3>
                <ul className="space-y-2">
                  {["About Us", "Careers", "Partners", "Blog", "Contact"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-cyan-300 hover:text-white transition-colors duration-300"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Legal</h3>
                <ul className="space-y-2">
                  {["Terms", "Privacy", "Cookies", "Copyright", "FAQ"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-cyan-300 hover:text-white transition-colors duration-300"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-cyan-400 mb-4 md:mb-0">
              © 2025 Tutador. All rights reserved.
            </div>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin", "youtube"].map(
                (social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-cyan-700 p-2 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-auto"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.05)"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,584,77.64,692.26,104.27ZM1200,0V120H0V0Z"
            ></path>
            <path
              fill="rgba(255, 255, 255, 0.03)"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            ></path>
          </svg>
        </div>
      </footer>

      {/* Add global CSS for animations */}
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

        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* For Firefox */
        .scrollbar-hide {
          scrollbar-width: none;
        }

        /* Additional hover effects */
        .glow-on-hover:hover {
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.7);
        }

        /* Pulse animation for buttons */
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Add pulse effect to certain elements */
        .pulse-effect:hover {
          animation: pulse 1.5s infinite;
        }

        /* Gradient animation */
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient {
          background: linear-gradient(
            -45deg,
            #0891b2,
            #06b6d4,
            #0e7490,
            #0284c7
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
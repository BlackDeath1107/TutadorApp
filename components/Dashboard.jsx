"use client";
import React, { useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: "Introduction to React",
      instructor: "John Doe",
      image: "/api/placeholder/300/180",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      image: "/api/placeholder/300/180",
      category: "Programming",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Alex Johnson",
      image: "/api/placeholder/300/180",
      category: "Design",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Sarah Wilson",
      image: "/api/placeholder/300/180",
      category: "Data Science",
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      instructor: "Michael Brown",
      image: "/api/placeholder/300/180",
      category: "AI",
    },
    {
      id: 6,
      title: "Full Stack Development",
      instructor: "Emily Davis",
      image: "/api/placeholder/300/180",
      category: "Web Development",
    },
    {
      id: 7,
      title: "Mobile App Development",
      instructor: "David Miller",
      image: "/api/placeholder/300/180",
      category: "Programming",
    },
  ];

  // Sample data for teacher videos
  const teacherVideos = [
    {
      id: 1,
      name: "Prof. John Doe",
      subject: "React Hooks",
      image: "/api/placeholder/300/180",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      subject: "JavaScript ES6",
      image: "/api/placeholder/300/180",
    },
    {
      id: 3,
      name: "Alex Johnson",
      subject: "Design Thinking",
      image: "/api/placeholder/300/180",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      subject: "Python Pandas",
      image: "/api/placeholder/300/180",
    },
    {
      id: 5,
      name: "Michael Brown",
      subject: "Neural Networks",
      image: "/api/placeholder/300/180",
    },
    {
      id: 6,
      name: "Emily Davis",
      subject: "Node.js Basics",
      image: "/api/placeholder/300/180",
    },
    {
      id: 7,
      name: "Emily Davis",
      subject: "Node.js Basics",
      image: "/api/placeholder/300/180",
    },
  ];

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on search term
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">
                TUTADOR
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="w-5 h-5 absolute right-3 top-3 text-gray-400"
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
              <a
                href="#courses"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium"
              >
                Courses
              </a>
              <a
                href="#profile"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium"
              >
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Courses Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Courses
            </h2>
            <button className="text-indigo-600 hover:text-indigo-800">
              View All
            </button>
          </div>

          <div className="relative">
            <div className="overflow-x-auto flex space-x-6 pb-4 scrollbar-hide">
              {filteredCourses.map((course) => (
                <div key={course.id} className="flex-none w-72">
                  <Link href="/courseone" className="block">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <div className="text-lg font-semibold text-gray-800 hover:text-indigo-600 mb-1 truncate">
                          {course.title}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {course.instructor}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
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
                            <span className="text-gray-600 text-sm ml-1">
                              4.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Scroll buttons */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
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
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
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

        {/* Teacher Videos Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Meet Our Teachers
            </h2>
            <button className="text-indigo-600 hover:text-indigo-800">
              View All
            </button>
          </div>

          <div className="relative">
            <div className="overflow-x-auto flex space-x-6 pb-4 scrollbar-hide">
              {teacherVideos.map((teacher) => (
                <div key={teacher.id} className="flex-none w-72">
                  <Link href={`/teacher/${teacher.id}`} className="block">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-indigo-600 bg-opacity-75 rounded-full p-3 text-white hover:bg-opacity-90 transition-all">
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
                      </div>
                      <div className="p-4">
                        <div className="text-lg font-semibold text-gray-800 hover:text-indigo-600 mb-1">
                          {teacher.name}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {teacher.subject} Specialist
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Scroll buttons */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
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
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
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
      </main>
    </div>
  );
};

export default Dashboard;

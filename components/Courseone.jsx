"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Courseone = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoSpeed, setVideoSpeed] = useState(1);
  const [videoQuality, setVideoQuality] = useState("720p");
  const [showSettings, setShowSettings] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const course = {
    title: "Complete JEE Preparation Course",
    description:
      "Master JEE Physics, Chemistry, and Mathematics with our comprehensive preparation course. Designed by IIT alumni and experienced educators, this course covers the entire JEE syllabus with proven strategies to crack the exam.",
    details:
      "Duration: 12 weeks | Difficulty: Advanced | Prerequisites: 11th Standard Knowledge | Instructors: Dr. Sharma, Prof. Gupta, Dr. Singh",
    chapters: [
      {
        id: 1,
        title: "Physics: Mechanics & Kinematics",
        duration: "1:15:30",
        subject: "physics",
      },
      {
        id: 2,
        title: "Chemistry: Organic Reactions",
        duration: "58:45",
        subject: "chemistry",
      },
      {
        id: 3,
        title: "Mathematics: Calculus Fundamentals",
        duration: "1:10:20",
        subject: "maths",
      },
      {
        id: 4,
        title: "Physics: Electromagnetism",
        duration: "1:05:30",
        subject: "physics",
      },
      {
        id: 5,
        title: "Chemistry: Thermodynamics",
        duration: "52:15",
        subject: "chemistry",
      },
      {
        id: 6,
        title: "Mathematics: Coordinate Geometry",
        duration: "1:08:45",
        subject: "maths",
      },
      {
        id: 7,
        title: "Physics: Modern Physics",
        duration: "1:12:00",
        subject: "physics",
      },
      {
        id: 8,
        title: "Chemistry: Inorganic Chemistry",
        duration: "59:30",
        subject: "chemistry",
      },
      {
        id: 9,
        title: "Mathematics: Probability",
        duration: "1:02:15",
        subject: "maths",
      },
      {
        id: 10,
        title: "JEE Advanced Problem Solving",
        duration: "1:25:00",
        subject: "combined",
      },
    ],
    assessmentLink: "/course/jee/mock-test",
  };

  const getSubjectIcon = (subject) => {
    switch (subject) {
      case "physics":
        return "⚛️";
      case "chemistry":
        return "🧪";
      case "maths":
        return "📐";
      default:
        return "📚";
    }
  };

  const getSubjectColor = (subject) => {
    switch (subject) {
      case "physics":
        return "from-cyan-600 to-blue-600";
      case "chemistry":
        return "from-cyan-500 to-teal-500";
      case "maths":
        return "from-cyan-400 to-indigo-500";
      default:
        return "from-cyan-600 to-purple-600";
    }
  };

  const handleChapterClick = (index) => {
    setCurrentVideo(index);
  };

  const handlePrevVideo = () => {
    if (currentVideo > 0) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  const handleNextVideo = () => {
    if (currentVideo < course.chapters.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const button = document.getElementById("assessment-button");
      if (button) {
        button.classList.add("animate-pulse");
        setTimeout(() => {
          button.classList.remove("animate-pulse");
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100">
      <div className="flex-1 p-4 lg:p-8">
        <div
          className="relative w-full rounded-lg overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-[1.01]"
          style={{
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)",
          }}
        >
          <div className="h-[550px] relative">
            <div
              className={`flex items-center justify-center h-full bg-gradient-to-br ${getSubjectColor(
                course.chapters[currentVideo].subject
              )}`}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce">
                  {getSubjectIcon(course.chapters[currentVideo].subject)}
                </div>
                <p className="text-white text-2xl font-bold">
                  Now Playing: {course.chapters[currentVideo].title}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-cyan-900/90 backdrop-blur-sm p-4 flex justify-between items-center">
              <div className="flex space-x-4">
                <button
                  onClick={handlePrevVideo}
                  className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
                  disabled={currentVideo === 0}
                >
                  &laquo; Previous
                </button>
                <button
                  onClick={handleNextVideo}
                  className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
                  disabled={currentVideo === course.chapters.length - 1}
                >
                  Next &raquo;
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={toggleSettings}
                  className="text-white bg-cyan-800 hover:bg-cyan-700 px-4 py-2 rounded-md transition duration-300 hover:shadow-lg"
                >
                  Settings
                </button>

                {showSettings && (
                  <div className="absolute right-0 bottom-12 bg-white shadow-xl rounded-md p-4 w-48 z-10 animate-fadeIn">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-cyan-800 mb-1">
                        Quality
                      </label>
                      <select
                        value={videoQuality}
                        onChange={(e) => setVideoQuality(e.target.value)}
                        className="w-full border border-cyan-300 text-cyan-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="360p">360p</option>
                        <option value="480p">480p</option>
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-cyan-800 mb-1">
                        Playback Speed
                      </label>
                      <select
                        value={videoSpeed}
                        onChange={(e) =>
                          setVideoSpeed(parseFloat(e.target.value))
                        }
                        className="w-full border border-cyan-300 text-cyan-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="0.5">0.5x</option>
                        <option value="0.75">0.75x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <h1
          className="text-4xl font-bold mt-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700"
          style={{
            textShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
          }}
        >
          {course.title}
        </h1>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6 transition-all duration-300 hover:shadow-cyan-200 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-800">
            About This Course
          </h2>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <p className="text-cyan-600 text-sm font-medium">{course.details}</p>
        </div>

        <Link
          id="assessment-button"
          href="/assessment"
          className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-bold py-4 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-200/50"
          style={{
            boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)",
          }}
        >
          TAKE JEE MOCK TEST
        </Link>
      </div>

      <div className="w-full lg:w-96 bg-white/90 backdrop-blur-sm p-4 lg:p-6 shadow-lg lg:h-screen lg:overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-800 border-b-2 border-cyan-500 pb-2">
          Course Modules
        </h2>
        <ul className="space-y-3">
          {course.chapters.map((chapter, index) => (
            <li
              key={chapter.id}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <button
                onClick={() => handleChapterClick(index)}
                className={`w-full text-left p-4 rounded-md transition-all duration-300 transform ${
                  isHovered === index ? "scale-[1.02]" : ""
                } ${
                  currentVideo === index
                    ? `bg-gradient-to-r ${getSubjectColor(
                        chapter.subject
                      )} text-white font-medium shadow-md`
                    : `hover:bg-cyan-50 border border-transparent hover:border-cyan-200 ${
                        isHovered === index ? "shadow-md" : ""
                      }`
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="mr-2 text-xl">
                      {getSubjectIcon(chapter.subject)}
                    </span>
                    <span>{chapter.title}</span>
                  </div>
                  <span
                    className={`text-sm ${
                      currentVideo === index ? "text-cyan-100" : "text-cyan-600"
                    }`}
                  >
                    {chapter.duration}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t-2 border-cyan-100 pt-4">
          <h3 className="text-lg font-semibold mb-3 text-cyan-800">
            Filter by Subject
          </h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-medium transition duration-300 hover:shadow-md hover:scale-105">
              Physics
            </button>
            <button className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-sm font-medium transition duration-300 hover:shadow-md hover:scale-105">
              Chemistry
            </button>
            <button className="px-3 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-white rounded-full text-sm font-medium transition duration-300 hover:shadow-md hover:scale-105">
              Mathematics
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Courseone;

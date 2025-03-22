"use client";
import React, { useState } from "react";

const Courseone = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoSpeed, setVideoSpeed] = useState(1);
  const [videoQuality, setVideoQuality] = useState("720p");
  const [showSettings, setShowSettings] = useState(false);

  const course = {
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This comprehensive course covers everything from basic markup to advanced interactive web applications.",
    details:
      "Duration: 8 weeks | Difficulty: Beginner | Prerequisites: None | Instructor: Jane Doe",
    chapters: [
      { id: 1, title: "Getting Started with HTML", duration: "45:30" },
      { id: 2, title: "CSS Fundamentals", duration: "52:15" },
      { id: 3, title: "JavaScript Basics", duration: "1:05:45" },
      { id: 4, title: "DOM Manipulation", duration: "58:20" },
      { id: 5, title: "Responsive Design", duration: "47:10" },
      { id: 6, title: "API Integration", duration: "1:12:30" },
      { id: 7, title: "Form Validation", duration: "39:45" },
      { id: 8, title: "Final Project", duration: "1:25:00" },
    ],
    assessmentLink: "/course/web-dev/assessment",
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

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        {/* Video Player */}
        <div className="relative w-full bg-black rounded-lg overflow-hidden">
          {/* Video container with fixed height */}
          <div className="h-[750px] relative">
            {/* Video player placeholder - Replace with actual video component */}
            <div className="flex items-center justify-center h-full bg-gray-900">
              <p className="text-white text-lg">
                Now Playing: {course.chapters[currentVideo].title}
              </p>
            </div>

            {/* Video Controls - Positioned at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center">
              <div className="flex space-x-4">
                <button
                  onClick={handlePrevVideo}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                  disabled={currentVideo === 0}
                >
                  &laquo; Back
                </button>
                <button
                  onClick={handleNextVideo}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                  disabled={currentVideo === course.chapters.length - 1}
                >
                  Forward &raquo;
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={toggleSettings}
                  className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
                >
                  Settings
                </button>

                {showSettings && (
                  <div className="absolute right-0 bottom-12 bg-white shadow-lg rounded-md p-4 w-48 z-10">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quality
                      </label>
                      <select
                        value={videoQuality}
                        onChange={(e) => setVideoQuality(e.target.value)}
                        className="w-full border border-gray-300 text-cyan-300 rounded-md px-3 py-2"
                      >
                        <option value="360p">360p</option>
                        <option value="480p">480p</option>
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Playback Speed
                      </label>
                      <select
                        value={videoSpeed}
                        onChange={(e) =>
                          setVideoSpeed(parseFloat(e.target.value))
                        }
                        className="w-full border text-cyan-300 border-gray-300 rounded-md px-3 py-2"
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

        {/* Course Title */}
        <h1 className="text-3xl font-bold mt-6 mb-4">{course.title}</h1>

        {/* Course Description */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-3">About This Course</h2>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <p className="text-gray-600 text-sm">{course.details}</p>
        </div>

        {/* Assessment Button */}
        <a
          href={course.assessmentLink}
          className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-4 rounded-lg text-xl transition duration-200"
        >
          TAKE ASSESSMENT
        </a>
      </div>

      {/* Chapter Navigation Sidebar */}
      <div className="w-full lg:w-80 bg-white p-4 lg:p-6 shadow-md lg:h-screen lg:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Course Chapters</h2>
        <ul className="space-y-2">
          {course.chapters.map((chapter, index) => (
            <li key={chapter.id}>
              <button
                onClick={() => handleChapterClick(index)}
                className={`w-full text-left p-3 rounded-md transition duration-200 ${
                  currentVideo === index
                    ? "bg-blue-100 text-blue-800 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{chapter.title}</span>
                  <span className="text-sm text-gray-500">
                    {chapter.duration}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courseone;

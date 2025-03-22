"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Assess = () => {
  const [currentSubject, setCurrentSubject] = useState("physics");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [allSubjectsAttempted, setAllSubjectsAttempted] = useState({
    physics: false,
    chemistry: false,
    mathematics: false,
  });
  const [finalScores, setFinalScores] = useState(null);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const [loading, setLoading] = useState(true);
  const [generatingReport, setGeneratingReport] = useState(false);

  const questionsBySubject = {
    physics: [
      {
        id: "p1",
        question:
          "A particle moves in a circle of radius 20 cm with constant tangential acceleration. The magnitude of the total acceleration of the particle at the end of the first revolution is 20√2 cm/s². The total time taken by the particle to complete the first revolution is:",
        options: ["2 s", "4 s", "6 s", "8 s"],
        correctAnswer: "b",
      },
      {
        id: "p2",
        question:
          "A body is thrown vertically upward with a velocity of 20 m/s. The time after which the body will be at a height of 20 m is (g = 10 m/s²):",
        options: ["1 s", "2 s", "3 s", "4 s"],
        correctAnswer: "c",
      },
      {
        id: "p3",
        question:
          "Two blocks of masses 2 kg and 3 kg connected by a light string passing over a frictionless pulley. The acceleration of the system is (g = 10 m/s²):",
        options: ["2 m/s²", "4 m/s²", "6 m/s²", "10 m/s²"],
        correctAnswer: "a",
      },
    ],
    chemistry: [
      {
        id: "c1",
        question: "The hybridization involved in the formation of SF₆ is:",
        options: ["sp³", "sp³d", "sp³d²", "sp³d³"],
        correctAnswer: "c",
      },
      {
        id: "c2",
        question: "Identify the molecule that has zero dipole moment:",
        options: ["NH₃", "BF₃", "CHCl₃", "H₂O"],
        correctAnswer: "b",
      },
      {
        id: "c3",
        question:
          "In the reaction, MnO₄⁻ + C₂O₄²⁻ + H⁺ → Mn²⁺ + CO₂ + H₂O, the number of electrons transferred is:",
        options: ["2", "3", "5", "6"],
        correctAnswer: "d",
      },
    ],
    mathematics: [
      {
        id: "m1",
        question:
          "If z = x + iy is a complex number such that |z| = 1 and arg(z) = π/3, then the value of z² is:",
        options: ["1", "-1", "i", "-i"],
        correctAnswer: "c",
      },
      {
        id: "m2",
        question: "The integral ∫(x²)/(x⁴+1) dx equals:",
        options: [
          "(1/2)tan⁻¹(x²) + C",
          "(1/2)tan⁻¹(1/x²) + C",
          "(1/4)ln(x⁴+1) + C",
          "tan⁻¹(x²) + C",
        ],
        correctAnswer: "a",
      },
      {
        id: "m3",
        question:
          "The sum of the infinite series 1 + 1/4 + 1/9 + 1/16 + ... is:",
        options: ["π/2", "π²/6", "π²/8", "π²/12"],
        correctAnswer: "b",
      },
    ],
  };

  const getAllQuestions = () => {
    return [
      ...questionsBySubject.physics,
      ...questionsBySubject.chemistry,
      ...questionsBySubject.mathematics,
    ];
  };

  useEffect(() => {
    setTimeout(() => {
      setQuestions(questionsBySubject[currentSubject]);
      setLoading(false);
    }, 800);
  }, [currentSubject]);

  useEffect(() => {
    
    setSubmitted(false);
  }, [currentSubject]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinalSubmit();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleOptionSelect = (questionId, option) => {
    if (submitted) return;

    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubjectSubmit = () => {
    setAllSubjectsAttempted((prev) => ({
      ...prev,
      [currentSubject]: true,
    }));
  };

  const handleFinalSubmit = () => {
    setSubmitted(true);

    const allQuestions = getAllQuestions();

    const physicsQuestions = questionsBySubject.physics;
    const chemistryQuestions = questionsBySubject.chemistry;
    const mathQuestions = questionsBySubject.mathematics;

    const physicsScore = calculateSubjectScore(physicsQuestions);
    const chemistryScore = calculateSubjectScore(chemistryQuestions);
    const mathScore = calculateSubjectScore(mathQuestions);

    const totalScore = physicsScore + chemistryScore + mathScore;

    setFinalScores({
      physics: {
        total: physicsQuestions.length,
        correct: physicsQuestions.filter(
          (q) => userAnswers[q.id] === q.correctAnswer
        ).length,
        incorrect: physicsQuestions.filter(
          (q) => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer
        ).length,
        unattempted: physicsQuestions.filter((q) => !userAnswers[q.id]).length,
        score: physicsScore,
      },
      chemistry: {
        total: chemistryQuestions.length,
        correct: chemistryQuestions.filter(
          (q) => userAnswers[q.id] === q.correctAnswer
        ).length,
        incorrect: chemistryQuestions.filter(
          (q) => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer
        ).length,
        unattempted: chemistryQuestions.filter((q) => !userAnswers[q.id])
          .length,
        score: chemistryScore,
      },
      mathematics: {
        total: mathQuestions.length,
        correct: mathQuestions.filter(
          (q) => userAnswers[q.id] === q.correctAnswer
        ).length,
        incorrect: mathQuestions.filter(
          (q) => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer
        ).length,
        unattempted: mathQuestions.filter((q) => !userAnswers[q.id]).length,
        score: mathScore,
      },
      total: {
        total: allQuestions.length,
        correct: allQuestions.filter(
          (q) => userAnswers[q.id] === q.correctAnswer
        ).length,
        incorrect: allQuestions.filter(
          (q) => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer
        ).length,
        unattempted: allQuestions.filter((q) => !userAnswers[q.id]).length,
        score: totalScore,
      },
    });
  };

  const calculateSubjectScore = (questions) => {
    let score = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score += 4; 
      } else if (userAnswers[q.id]) {
        score -= 1; 
      }
    });
    return score;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubjectChange = (subject) => {
    setLoading(true);
    setCurrentSubject(subject);
  };

  const areAllSubjectsAttempted = () => {
    return (
      allSubjectsAttempted.physics &&
      allSubjectsAttempted.chemistry &&
      allSubjectsAttempted.mathematics
    );
  };

  const getSubjectsProgress = () => {
    const subjects = ["physics", "chemistry", "mathematics"];
    return subjects.filter((subject) =>
      questionsBySubject[subject].some((q) => userAnswers[q.id])
    ).length;
  };

  const handleGenerateReport = () => {
    setGeneratingReport(true);
    setTimeout(() => {
      setGeneratingReport(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100">
      <header className="bg-gradient-to-r from-cyan-600 to-cyan-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="text-white font-bold text-3xl tracking-tight mr-2 relative group">
                <span className="relative z-10">JEE</span>
                <span className="absolute -inset-1 scale-110 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300"></span>
              </div>
              <div className="text-cyan-100 text-xl">Assessment Platform</div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-white font-medium flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Time Remaining:{" "}
                <span className="ml-2 font-bold">{formatTime(timeLeft)}</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-white font-medium flex items-center">
                <span>Progress: {getSubjectsProgress()}/3 subjects</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {["physics", "chemistry", "mathematics"].map((subject) => (
              <button
                key={subject}
                onClick={() => handleSubjectChange(subject)}
                className={`px-6 py-4 font-medium transition-all duration-300 border-b-2 whitespace-nowrap ${
                  currentSubject === subject
                    ? "border-cyan-500 text-cyan-600"
                    : "border-transparent text-gray-500 hover:text-cyan-500"
                } ${allSubjectsAttempted[subject] ? "bg-cyan-50" : ""}`}
              >
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
                {allSubjectsAttempted[subject] && (
                  <span className="ml-2 text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                    Attempted
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-4">
                <h2 className="text-white text-xl font-medium">
                  {currentSubject.charAt(0).toUpperCase() +
                    currentSubject.slice(1)}{" "}
                  Questions
                </h2>
              </div>

              <div className="p-6">
                {questions.map((q, index) => (
                  <div
                    key={q.id}
                    className={`mb-8 p-6 rounded-lg transition-all duration-300 ${
                      submitted
                        ? userAnswers[q.id] === q.correctAnswer
                          ? "bg-green-50 border border-green-200"
                          : userAnswers[q.id]
                          ? "bg-red-50 border border-red-200"
                          : "bg-yellow-50 border border-yellow-200"
                        : "bg-gray-50 hover:bg-cyan-50"
                    }`}
                  >
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-medium mr-3">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          {q.question}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {q.options.map((option, optIndex) => {
                            const optionLabel = String.fromCharCode(
                              97 + optIndex
                            ); // a, b, c, d
                            return (
                              <div
                                key={optionLabel}
                                onClick={() =>
                                  handleOptionSelect(q.id, optionLabel)
                                }
                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-102 ${
                                  !submitted &&
                                  userAnswers[q.id] === optionLabel
                                    ? "bg-cyan-100 border-2 border-cyan-500 shadow-md"
                                    : submitted &&
                                      optionLabel === q.correctAnswer
                                    ? "bg-green-100 border-2 border-green-500"
                                    : submitted &&
                                      userAnswers[q.id] === optionLabel &&
                                      optionLabel !== q.correctAnswer
                                    ? "bg-red-100 border-2 border-red-500"
                                    : "bg-white border border-gray-200 hover:border-cyan-300 hover:shadow"
                                }`}
                              >
                                <div
                                  className={`w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center mr-3 ${
                                    !submitted &&
                                    userAnswers[q.id] === optionLabel
                                      ? "bg-cyan-500 text-white"
                                      : submitted &&
                                        optionLabel === q.correctAnswer
                                      ? "bg-green-500 text-white"
                                      : submitted &&
                                        userAnswers[q.id] === optionLabel &&
                                        optionLabel !== q.correctAnswer
                                      ? "bg-red-500 text-white"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {optionLabel.toUpperCase()}
                                </div>
                                <span className="text-gray-800">{option}</span>
                              </div>
                            );
                          })}
                        </div>

                        {submitted && (
                          <div className="mt-4 text-sm">
                            {userAnswers[q.id] === q.correctAnswer ? (
                              <div className="text-green-600 font-medium">
                                Correct! +4 marks
                              </div>
                            ) : userAnswers[q.id] ? (
                              <div className="text-red-600 font-medium">
                                Incorrect. -1 mark. Correct answer is{" "}
                                {q.correctAnswer.toUpperCase()}.
                              </div>
                            ) : (
                              <div className="text-yellow-600 font-medium">
                                Not attempted. 0 marks. Correct answer is{" "}
                                {q.correctAnswer.toUpperCase()}.
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {!submitted && !allSubjectsAttempted[currentSubject] && (
                <button
                  onClick={handleSubjectSubmit}
                  className="px-6 py-3 rounded-lg font-medium text-cyan-700 bg-white border border-cyan-500 shadow transition-all duration-300 hover:bg-cyan-50 hover:shadow-md"
                >
                  Mark {currentSubject} Section Complete
                </button>
              )}

              {!submitted && (
                <button
                  onClick={handleFinalSubmit}
                  disabled={submitted}
                  className={`px-8 py-4 rounded-lg font-bold text-white shadow-lg transform transition-all duration-300 ${
                    submitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-cyan-300/50"
                  }`}
                >
                  Submit All Sections
                  <span className="ml-2">➤</span>
                </button>
              )}
            </div>

            {submitted && finalScores && (
              <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl animate-fadeIn">
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-4">
                  <h2 className="text-white text-xl font-medium">
                    Complete Test Results
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {["physics", "chemistry", "mathematics", "total"].map(
                      (section) => (
                        <div
                          key={section}
                          className={`rounded-lg p-4 text-center border ${
                            section === "total"
                              ? "bg-cyan-100 border-cyan-300"
                              : "bg-white border-gray-200"
                          }`}
                        >
                          <div
                            className={`text-lg font-medium mb-2 ${
                              section === "total"
                                ? "text-cyan-800"
                                : "text-gray-700"
                            }`}
                          >
                            {section === "total"
                              ? "Overall Score"
                              : section.charAt(0).toUpperCase() +
                                section.slice(1)}
                          </div>
                          <div
                            className={`text-3xl font-bold mb-2 ${
                              section === "total"
                                ? "text-cyan-700"
                                : "text-gray-800"
                            }`}
                          >
                            {finalScores[section].score}
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                            <div className="bg-green-50 p-2 rounded border border-green-100">
                              <div className="text-green-800">Correct</div>
                              <div className="font-medium text-green-700">
                                {finalScores[section].correct}
                              </div>
                            </div>
                            <div className="bg-red-50 p-2 rounded border border-red-100">
                              <div className="text-red-800">Incorrect</div>
                              <div className="font-medium text-red-700">
                                {finalScores[section].incorrect}
                              </div>
                            </div>
                            <div className="bg-yellow-50 p-2 rounded border border-yellow-100">
                              <div className="text-yellow-800">Skipped</div>
                              <div className="font-medium text-yellow-700">
                                {finalScores[section].unattempted}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200">
                    <div className="text-cyan-800 font-medium mb-2">
                      Score Calculation
                    </div>
                    <div className="flex flex-col space-y-2 text-sm">
                      {["physics", "chemistry", "mathematics"].map(
                        (subject) => (
                          <div
                            key={subject}
                            className="flex justify-between text-black"
                          >
                            <span>
                              {subject.charAt(0).toUpperCase() +
                                subject.slice(1)}
                              :
                            </span>
                            <span className="font-medium">
                              {finalScores[subject].correct} × 4 ={" "}
                              {finalScores[subject].correct * 4},
                              {finalScores[subject].incorrect} × (-1) ={" "}
                              {finalScores[subject].incorrect * -1}, Total:{" "}
                              {finalScores[subject].score}
                            </span>
                          </div>
                        )
                      )}
                      <div className="flex justify-between text-black pt-2 border-t border-cyan-200">
                        <span className="font-medium">Grand Total:</span>
                        <span className="font-bold">
                          {finalScores.total.score}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-lg border border-cyan-300">
                    <div className="text-center">
                      <div className="text-cyan-800 font-bold text-lg mb-2">
                        Performance Summary
                      </div>
                      <div className="text-cyan-800">
                        You answered {finalScores.total.correct} out of{" "}
                        {finalScores.total.total} questions correctly.
                      </div>
                      <div className="text-cyan-700 mt-2">
                        {finalScores.total.score >= 20
                          ? "Excellent work! Your JEE preparation looks strong."
                          : finalScores.total.score >= 10
                          ? "Good effort! Continue practicing to improve your score."
                          : "Keep practicing! With more preparation, you'll see improvement."}
                      </div>

                      <button
                        onClick={handleGenerateReport}
                        disabled={generatingReport}
                        className={`mt-4 px-6 py-3 rounded-lg font-bold text-white shadow-lg transform transition-all duration-300 ${
                          generatingReport
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:scale-105 hover:shadow-indigo-300/50"
                        }`}
                      >
                        {generatingReport ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Generating...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              ></path>
                            </svg>
                            <Link href="/result">Generate AI Report</Link>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <style jsx global>{`
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
          animation: fadeIn 0.5s ease-out forwards;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        /* Add a subtle glow effect to buttons on hover */
        button:not([disabled]):hover {
          box-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Assess;

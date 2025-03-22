"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Result() {
  const [mockScore, setMockScore] = useState("");
  const [percentile, setPercentile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [animateIn, setAnimateIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  useEffect(() => {
    if (percentile !== null) {
      setAnimateIn(true);
    }
  }, [percentile]);

  const handleScoreChange = (e) => {
    setMockScore(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      console.log("Submitting score:", mockScore);

      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mockScore: parseFloat(mockScore) }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get prediction");
      }

      const data = await response.json();
      console.log("Prediction result:", data);

      setPercentile(data.percentile);
    } catch (err) {
      console.error("Error:", err);
      setError("Error fetching prediction: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-32 w-32 rounded-full bg-cyan-500/20 blur-xl top-1/4 left-1/4 animate-pulse"></div>
        <div
          className="absolute h-48 w-48 rounded-full bg-cyan-400/10 blur-xl top-3/4 right-1/4 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute h-24 w-24 rounded-full bg-blue-500/20 blur-xl bottom-1/4 right-1/3 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className={`max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-cyan-200/30 transition-all duration-700 transform ${
          animateIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 w-full transform -skew-x-12 translate-x-full animate-shimmer"></div>
          <h2 className="text-2xl font-bold text-white relative z-10 flex items-center">
            <span className="mr-2 text-3xl">⚡</span>
            AI Performance Prediction
          </h2>
        </div>

        <div className="px-6 py-8 backdrop-blur-sm">
          {!percentile ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="mockScore"
                  className="block text-sm font-medium text-cyan-100"
                >
                  Enter Mock Assessment Score (0-100)
                </label>
                <div className="mt-1 relative group">
                  <input
                    id="mockScore"
                    name="mockScore"
                    type="number"
                    required
                    value={mockScore}
                    onChange={handleScoreChange}
                    className="appearance-none block w-full px-3 py-3 bg-white/20 border border-cyan-200/30 rounded-md shadow-sm placeholder-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-cyan-50 transition-all duration-300"
                    placeholder="Enter your score"
                    min="0"
                    max="100"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-400/40 to-blue-500/40 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
                </div>
              </div>

              {error && (
                <div className="text-red-300 text-sm bg-red-900/20 p-3 rounded-md border border-red-400/30 animate-pulse">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        Analyzing...
                      </span>
                    ) : (
                      "Generate AI Report"
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 w-full transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center transition-all duration-700 transform scale-100">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-4 relative animate-bounce-slow">
                  {percentile.toFixed(2)}%
                </div>
              </div>
              <p className="text-cyan-100 mb-6 transform transition-all duration-500 animate-fade-in">
                Based on your mock assessment score, you are predicted to be in
                the{" "}
                <span className="font-semibold text-cyan-300">
                  {percentile.toFixed(2)}th
                </span>{" "}
                percentile.
              </p>
              <p className="text-sm text-cyan-300/80 mb-8 transform transition-all duration-500 delay-300 animate-fade-in">
                This prediction is generated by our AI model trained on
                historical assessment data.
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setPercentile(null)}
                  className="inline-flex items-center px-5 py-3 border border-cyan-400/30 text-sm font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group"
                >
                  <span className="relative z-10">Make Another Prediction</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 w-full transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                </button>

                <button
                  onClick={() =>
                    console.log("Generate suggestive materials clicked")
                  }
                  className="inline-flex items-center px-5 py-3 border border-purple-400/30 text-sm font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group"
                >
                  <Link className="relative z-10" href="/library">
                    Generate Suggestive Materials
                  </Link>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-indigo-500/40 w-full transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

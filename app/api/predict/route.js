import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { mockScore } = await request.json();

    if (mockScore === undefined || isNaN(mockScore)) {
      return NextResponse.json(
        { error: "Invalid score provided" },
        { status: 400 }
      );
    }

    const percentile = calculatePercentile(parseFloat(mockScore));

    return NextResponse.json({ percentile });
  } catch (error) {
    console.error("Error processing prediction:", error);
    return NextResponse.json(
      { error: "Failed to process prediction" },
      { status: 500 }
    );
  }
}

function calculatePercentile(score) {
  return 50 + score / 5;
}

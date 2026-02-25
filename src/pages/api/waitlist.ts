import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://rklxwoy2kf.execute-api.us-east-1.amazonaws.com/waitlist";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });

  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
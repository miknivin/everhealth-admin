import { NextResponse } from "next/server";

export async function GET(req) {
  const response = NextResponse.json(
    { success: true, message: "Logged Out" },
    { status: 200 },
  );

  response.cookies.set("adminToken", "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return response;
}

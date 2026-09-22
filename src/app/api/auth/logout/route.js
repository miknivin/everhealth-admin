import { NextResponse } from "next/server";

export async function GET(req) {
  const response = NextResponse.json(
    { message: "Logged Out", success: true },
    { status: 200 },
  );

  response.cookies.set("adminToken", "", {
    path: "/",
    expires: new Date(0),
    maxAge: 0,
    httpOnly: true,
  });

  return response;
}

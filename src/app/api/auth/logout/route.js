import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function handleLogout() {
  try {
    cookies().delete("adminToken");
  } catch (error) {
    console.error("Error deleting cookie via cookies():", error);
  }

  const response = NextResponse.json(
    { success: true, message: "Logged Out Successfully" },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    },
  );

  response.cookies.delete("adminToken");
  response.cookies.set("adminToken", "", {
    path: "/",
    expires: new Date(0),
    maxAge: 0,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}

export async function POST(req) {
  return handleLogout();
}

export async function GET(req) {
  return handleLogout();
}

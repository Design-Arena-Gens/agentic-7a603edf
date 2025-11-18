import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log("Founding membership application:", payload);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to process application", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
export async function POST(req) {
  const { name, email, message } = await req.json().catch(() => ({}));
  if (!name?.trim() || !/\S+@\S+\.\S+/.test(email || "") || !message?.trim()) {
    return NextResponse.json({ message: "Enter your name, a valid email address and a message, then send again." }, { status: 400 });
  }
  // TODO: send email or save to a database (e.g. Resend, Postgres) once contact details are confirmed.
  return NextResponse.json({ message: "Prototype only: your enquiry was checked but not sent." });
}

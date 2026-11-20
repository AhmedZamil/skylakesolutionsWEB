import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const from = "skylakesolutionsplc@gmail.com";
const to = ["ahmedlutfulzamil@gmail.com"];
const sentence =
  "I have seen the team and their experience, along with Ahmed Zamil, Raihana Fardous, and Sabber Ahammed. I liked the team. Please reach me to talk.";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Add your name and a work email." }, { status: 400 });
  }

  const record = payload && typeof payload === "object" ? (payload as { name?: unknown; email?: unknown }) : {};
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";

  if (name.length < 1 || name.length > 80 || email.length > 120 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Add your name and a work email." }, { status: 400 });
  }

  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!pass) {
    return NextResponse.json({ error: "The note could not be delivered." }, { status: 503 });
  }

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: from, pass },
    });
    await transport.sendMail({
      from,
      to,
      replyTo: email,
      subject: "An employer liked to hire you",
      text: `An employer liked to hire you\n\nName: ${name}\nEmail: ${email}\n\n${sentence}\n`,
    });
  } catch {
    return NextResponse.json({ error: "The note could not be delivered." }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}

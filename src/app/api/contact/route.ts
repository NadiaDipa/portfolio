import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";
import { validateContact } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  // 1. Read the JSON body
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // 2. Honeypot: real people never fill this hidden field, bots often do.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // 3. Validate again on the server (never trust the browser)
  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json(
      { error: "Please check the form fields.", errors: result.errors },
      { status: 400 },
    );
  }

  // 4. Make sure email sending is configured
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const { name, email, message } = result.data;
  const resend = new Resend(apiKey);

  // 5. Send the email to the site owner
  try {
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? site.email,
      replyTo: email, // hitting "Reply" answers the visitor directly
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}

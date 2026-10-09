import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      movingFrom,
      movingTo,
      propertyOption,
      numberOfBedrooms,
      packingService,
      dismantleReassemble,
      storageRequired,
      movingDate,
      message,
    } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL_TO;
    // Until your domain is verified in Resend, use "onboarding@resend.dev"
    // (it can only deliver to the email address you signed up to Resend with).
    const fromEmail =
      process.env.CONTACT_EMAIL_FROM ||
      "Herts Man With A Van <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
      console.error("Missing Resend environment variables");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const htmlBody = `
      <h2>New Enquiry from hertsmanwithavan.com</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 10px; font-weight: bold; width: 200px;">Name</td>
          <td style="padding: 10px;">${escapeHtml(name)}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 10px; font-weight: bold;">Phone</td>
          <td style="padding: 10px;">${escapeHtml(phone)}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 10px; font-weight: bold;">Email</td>
          <td style="padding: 10px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        ${movingFrom ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Moving From</td><td style="padding: 10px;">${escapeHtml(movingFrom)}</td></tr>` : ""}
        ${movingTo ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Moving To</td><td style="padding: 10px;">${escapeHtml(movingTo)}</td></tr>` : ""}
        ${propertyOption ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Property Type</td><td style="padding: 10px;">${escapeHtml(propertyOption)}</td></tr>` : ""}
        ${numberOfBedrooms ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Bedrooms</td><td style="padding: 10px;">${escapeHtml(numberOfBedrooms)}</td></tr>` : ""}
        ${packingService ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Packing Service</td><td style="padding: 10px;">${escapeHtml(packingService)}</td></tr>` : ""}
        ${dismantleReassemble ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Dismantle / Reassemble</td><td style="padding: 10px;">${escapeHtml(dismantleReassemble)}</td></tr>` : ""}
        ${storageRequired ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Storage Required</td><td style="padding: 10px;">${escapeHtml(storageRequired)}</td></tr>` : ""}
        ${movingDate ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Approx Moving Date</td><td style="padding: 10px;">${escapeHtml(movingDate)}</td></tr>` : ""}
        ${message ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; font-weight: bold;">Message</td><td style="padding: 10px;">${escapeHtml(message)}</td></tr>` : ""}
      </table>
    `;

    const textBody = `
New Enquiry from hertsmanwithavan.com

Name: ${name}
Phone: ${phone}
Email: ${email}
${movingFrom ? `Moving From: ${movingFrom}` : ""}
${movingTo ? `Moving To: ${movingTo}` : ""}
${propertyOption ? `Property Type: ${propertyOption}` : ""}
${numberOfBedrooms ? `Bedrooms: ${numberOfBedrooms}` : ""}
${packingService ? `Packing Service: ${packingService}` : ""}
${dismantleReassemble ? `Dismantle / Reassemble: ${dismantleReassemble}` : ""}
${storageRequired ? `Storage Required: ${storageRequired}` : ""}
${movingDate ? `Approx Moving Date: ${movingDate}` : ""}
${message ? `Message: ${message}` : ""}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail.split(",").map((e) => e.trim()),
        subject: `New Enquiry from ${name} - hertsmanwithavan.com`,
        html: htmlBody,
        text: textBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      throw new Error(`Resend responded ${res.status}`);
    }

    return NextResponse.json(
      { message: "Enquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

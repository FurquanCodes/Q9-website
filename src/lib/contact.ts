import { ContactFormData } from "./schema";
import { site } from "@/config/site";

export interface ContactSubmissionResult {
  success: boolean;
  message?: string;
  fallbackUsed?: boolean;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

  // If honeypot is filled, silently pretend success
  if (data.company_website && data.company_website.length > 0) {
    return { success: true };
  }

  // Fallback if no Web3Forms access key is configured
  if (!accessKey) {
    const subjectEncoded = encodeURIComponent(`[Website Contact] ${data.subject}: ${data.name}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`
    );

    // In browser, trigger client mailto
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${site.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    }

    return {
      success: true,
      fallbackUsed: true,
      message: `Your default email client has been opened with your pre-filled inquiry to ${site.email}.`,
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        subject: `[Website Inquiry] ${data.subject}`,
        message: data.message,
        from_name: "Q9 Technologies Website",
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: "Thank you. Your message has been sent. We will get back to you soon.",
      };
    }

    return {
      success: false,
      message:
        result.message ||
        `Something went wrong. Please try again or email us directly at ${site.email}.`,
    };
  } catch {
    return {
      success: false,
      message: `Network error. Please try again or email us directly at ${site.email}.`,
    };
  }
}

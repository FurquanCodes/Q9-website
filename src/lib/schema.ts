import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name cannot exceed 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(
      /^$|^[\d\s+\-()]{7,20}$/,
      "Please enter a valid phone number (7-20 digits, spaces, or +-())"
    )
    .optional(),
  subject: z.enum(
    ["General inquiry", "Partnership", "Careers", "Feedback", "Other"] as const,
    {
      message: "Please select a valid subject",
    }
  ),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1500, "Message cannot exceed 1500 characters"),
  // Honeypot field - must stay empty
  company_website: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

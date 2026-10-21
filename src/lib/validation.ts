// Contact form validation, shared by the browser (ContactForm) and the server (/api/contact).

export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const LIMITS = {
  nameMax: 80,
  emailMax: 120,
  messageMin: 10,
  messageMax: 2000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; errors: ContactErrors };

export function validateContact(
  input: Partial<Record<keyof ContactInput, unknown>>,
): ValidationResult {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  const errors: ContactErrors = {};

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.nameMax)
    errors.name = `Name must be ${LIMITS.nameMax} characters or fewer.`;

  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(email) || email.length > LIMITS.emailMax)
    errors.email = "Please enter a valid email address.";

  if (!message) errors.message = "Please write a message.";
  else if (message.length < LIMITS.messageMin)
    errors.message = `Message should be at least ${LIMITS.messageMin} characters.`;
  else if (message.length > LIMITS.messageMax)
    errors.message = `Message must be ${LIMITS.messageMax} characters or fewer.`;

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, email, message } };
}

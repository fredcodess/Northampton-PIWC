import { Resend } from "resend";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "npiwc24@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});

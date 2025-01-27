import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Section } from "~/components/section";
import nodemailer from "nodemailer";
import styles from "./contact.module.css";

export const meta = () => ({
  title: "Contact",
  description: "Send me a message if you’re interested in discussing a project or just want to say hi.",
});

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";
  const errors = {};

  if (!email.includes("@") || email.length > MAX_EMAIL_LENGTH) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    errors.message = "Message must not exceed 4096 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "lolliji2255@gmail.com",
      pass: "your-app-password", // Replace with your app-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <lolliji2255@gmail.com>`,
      to: "lolliji2255@gmail.com",
      subject: `New Message from ${email}`,
      text: message,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { errors: { general: "Failed to send your message. Please try again later." } };
  }
}

export const Contact = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Section className={styles.contact}>
      <Form method="post" className={styles.form}>
        <h3 className={styles.title}>Say hello</h3>
        <div className={styles.inputWrapper}>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={MAX_EMAIL_LENGTH}
            required
            placeholder=" "
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>
            Your email
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <textarea
            id="message"
            name="message"
            maxLength={MAX_MESSAGE_LENGTH}
            required
            placeholder=" "
            className={styles.input}
          />
          <label htmlFor="message" className={styles.label}>
            Your message
          </label>
        </div>
        {actionData?.errors && (
          <div className={styles.error}>
            {actionData.errors.email && <p>{actionData.errors.email}</p>}
            {actionData.errors.message && <p>{actionData.errors.message}</p>}
          </div>
        )}
        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {actionData?.success && <p className={styles.success}>Message sent! I’ll get back to you soon.</p>}
      </Form>
    </Section>
  );
};

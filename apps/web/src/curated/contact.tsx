"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon, Mail, MapPin, Phone } from "lucide-react";

const APP_EMAIL = "muhimpunduan@gmail.com";
const APP_PHONE = "+92 300 1234567";
const APP_PHONE_2 = "+92 321 9876543";

export function Contact() {
  const socialLinks = [
    { icon: GithubIcon, href: "#", label: "GitHub" },
    { icon: XIcon, href: "#", label: "Twitter" },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [info, setInfo] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function update<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function validate() {
    const errors: string[] = [];
    if (!form.name.trim()) errors.push("Please enter your name.");
    if (!form.message.trim()) errors.push("Please enter a message.");
    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      errors.push("Please enter a valid email address.");
    }
    return errors;
  }

  function openMailClient() {
    const subject =
      form.subject.trim() ||
      "New message from Vizit Africa website";

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email || "Not provided"}`,
      "",
      "Message:",
      form.message,
      "",
      "—",
      "Sent from Vizit Africa contact form",
    ].join("\r\n");

    const mailto = `mailto:${APP_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    setInfo(null);

    const errors = validate();
    if (errors.length) {
      setInfo({ type: "error", text: errors.join(" ") });
      return;
    }

    openMailClient();

    setInfo({
      type: "success",
      text:
        "Your email app has opened. Please review the message and click Send.",
    });
  }

  return (
    <div className="mx-auto min-h-screen max-w-5xl bg-background lg:border-x">
      {/* Header */}
      <div className="px-6 py-16 md:flex md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a question, partnership inquiry, or vendor request?
            Send us a message and we’ll respond within 24–48 hours.
          </p>
        </div>
      </div>

      <div className="border-t" />

      {/* Contact cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ContactCard
          icon={Mail}
          title="Email"
          description="We respond to all emails within 24 hours."
        >
          <a
            className="font-mono text-sm font-medium tracking-wide hover:underline"
            href={`mailto:${APP_EMAIL}`}
          >
            {APP_EMAIL}
          </a>
        </ContactCard>

        <ContactCard
          icon={MapPin}
          title="Office"
          description="Drop by our office for a chat."
        >
          <address className="not-italic font-mono text-sm font-medium tracking-wide">
            Office #100, 2nd Floor, Kohinoor 1, Faisalabad, Pakistan
          </address>
        </ContactCard>

        <ContactCard
          icon={Phone}
          title="Phone"
          description="We’re available Mon–Fri, 9am–5pm."
        >
          <div>
            <a
              className="block font-mono text-sm font-medium tracking-wide hover:underline"
              href={`tel:${APP_PHONE}`}
            >
              {APP_PHONE}
            </a>
            <a
              className="block font-mono text-sm font-medium tracking-wide hover:underline"
              href={`tel:${APP_PHONE_2}`}
            >
              {APP_PHONE_2}
            </a>
          </div>
        </ContactCard>
      </div>

      <div className="border-t" />

      {/* Form */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-semibold">
          Send us a message
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This form will open your email app so you can review and
          send your message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 rounded-lg bg-card p-6 shadow"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">
                Your name
              </span>
              <input
                className="mt-1 w-full rounded border bg-input px-3 py-2 text-sm"
                value={form.name}
                onChange={(e) =>
                  update("name", e.target.value)
                }
                onBlur={() =>
                  setTouched((t) => ({ ...t, name: true }))
                }
                required
              />
              {touched.name && !form.name.trim() && (
                <span className="mt-1 text-xs text-red-600">
                  Name is required.
                </span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">
                Your email (optional)
              </span>
              <input
                type="email"
                className="mt-1 w-full rounded border bg-input px-3 py-2 text-sm"
                value={form.email}
                onChange={(e) =>
                  update("email", e.target.value)
                }
                onBlur={() =>
                  setTouched((t) => ({ ...t, email: true }))
                }
              />
              {touched.email &&
                form.email &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                  form.email
                ) && (
                  <span className="mt-1 text-xs text-red-600">
                    Invalid email address.
                  </span>
                )}
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              Subject
            </span>
            <input
              className="mt-1 w-full rounded border bg-input px-3 py-2 text-sm"
              value={form.subject}
              onChange={(e) =>
                update("subject", e.target.value)
              }
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              Message
            </span>
            <textarea
              className="mt-1 min-h-[120px] w-full rounded border bg-input px-3 py-2 text-sm"
              value={form.message}
              onChange={(e) =>
                update("message", e.target.value)
              }
              onBlur={() =>
                setTouched((t) => ({ ...t, message: true }))
              }
              required
            />
            {touched.message &&
              !form.message.trim() && (
                <span className="mt-1 text-xs text-red-600">
                  Message is required.
                </span>
              )}
          </label>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <Mail className="h-4 w-4" />
              Open email & send
            </button>

            {info && (
              <span
                className={cn(
                  "text-sm",
                  info.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                )}
              >
                {info.text}
              </span>
            )}
          </div>
        </form>
      </section>

      <div className="border-t" />

      {/* Footer */}
      <footer className="flex flex-col items-center gap-4 py-12">
        <h3 className="text-lg font-medium text-muted-foreground">
          Find us online
        </h3>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 shadow hover:bg-accent"
            >
              <link.icon className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono text-xs font-medium tracking-wide">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

/* Contact Card */
function ContactCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between border-b bg-card p-6 md:border-r">
      <div className="flex items-center gap-3 pb-4">
        <Icon className="h-6 w-6 text-muted-foreground" />
        <h4 className="text-lg font-medium">{title}</h4>
      </div>
      <div className="mb-4">{children}</div>
      {description && (
        <div className="text-sm text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  );
}

/* Icons */
const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.09-.73.09-.73a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.5 1 2.57 2.57 0 01.76-1.6c-2.66-.3-5.46-1.33-5.46-5.93a4.64 4.64 0 011.24-3.22 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.18 4.64 4.64 0 011.24 3.22c0 4.61-2.8 5.63-5.47 5.93a2.87 2.87 0 01.82 2.23v3.3c0 .32.22.69.82.58A12 12 0 0012 .5z" />
  </svg>
);

const XIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.9 1.15h3.68l-8.04 9.19 9.46 12.5h-7.4l-5.8-7.58-6.63 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93z" />
  </svg>
);

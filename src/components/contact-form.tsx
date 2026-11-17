"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emptyFields: Fields = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState<Fields>(emptyFields);

  function updateField<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (status === "error" || status === "sent") {
      setStatus("idle");
    }
  }

  function submitInquiry() {
    const name = fields.name.trim();
    const email = fields.email.trim();
    const phone = fields.phone.trim();
    const message = fields.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
    );

    // Open mail client without navigating the page away via form GET.
    window.location.assign(`${CONTACT.emailHref}?subject=${subject}&body=${body}`);
    window.setTimeout(() => {
      setStatus("sent");
      setFields(emptyFields);
    }, 400);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    submitInquiry();
  }

  return (
    <section id="contact" className="bg-parchment text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-ink/55 uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Tell me where you want to go next
          </h2>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink/70">
            Buying or selling in Middle Tennessee — Nashville, Franklin,
            Brentwood, and nearby communities — send a note and I will follow up
            personally.
          </p>
          <div className="mt-10 space-y-3 font-sans text-sm text-ink/75">
            <p>
              <a
                href={CONTACT.phoneHref}
                className="border-b border-ink/25 transition-colors hover:border-ink"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={CONTACT.emailHref}
                className="border-b border-ink/25 transition-colors hover:border-ink"
              >
                {CONTACT.email}
              </a>
            </p>
            <p className="tracking-wide">{CONTACT.domain}</p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          action="#contact"
          method="post"
          className="space-y-5 border border-ink/10 bg-cream/40 p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="tracking-[0.18em] uppercase">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={fields.name}
                onChange={(e) => updateField("name", e.target.value)}
                autoComplete="name"
                aria-invalid={status === "error" && !fields.name.trim()}
                className="h-11 rounded-none border-ink/20 bg-transparent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="tracking-[0.18em] uppercase">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={fields.email}
                onChange={(e) => updateField("email", e.target.value)}
                autoComplete="email"
                aria-invalid={status === "error" && !fields.email.trim()}
                className="h-11 rounded-none border-ink/20 bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="tracking-[0.18em] uppercase">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={fields.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              autoComplete="tel"
              className="h-11 rounded-none border-ink/20 bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="tracking-[0.18em] uppercase">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={fields.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="What are you hoping to buy or sell in Middle Tennessee?"
              aria-invalid={status === "error" && !fields.message.trim()}
              className="rounded-none border-ink/20 bg-transparent"
            />
          </div>

          {status === "error" ? (
            <p className="font-sans text-sm text-red-800" role="alert">
              Please add your name, email, and a short message.
            </p>
          ) : null}
          {status === "sent" ? (
            <p className="font-sans text-sm text-ink/75" role="status">
              Opening your email app with the message ready to send.
            </p>
          ) : null}

          <Button
            type="button"
            disabled={status === "sending"}
            onClick={submitInquiry}
            className="h-11 w-full rounded-none border border-ink bg-ink px-6 font-sans text-xs tracking-[0.28em] text-cream uppercase hover:bg-ink/90 sm:w-auto"
          >
            {status === "sending" ? "Preparing…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}

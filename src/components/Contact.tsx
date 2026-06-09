"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, revealViewport } from "@/lib/animations";
import type { ContactFormValues } from "@/types/portfolio";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink";

export default function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Compose an email to Sergio with the form contents and open the
    // visitor's mail client, pre-addressed and pre-filled.
    const subject = `Portfolio enquiry from ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || "—"}`,
      "",
      values.message,
    ].join("\n");

    const mailto = `mailto:sergiomichelottic@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSubmitted(true);
    setValues(initialValues);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section
      id="contact"
      className="container-px mx-auto max-w-[1200px] py-[var(--spacing-section)]"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
          Get in touch
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-[length:var(--text-section)] font-bold leading-[var(--text-section--line-height)] tracking-tight text-ink">
          Looking for a Backend Developer?
        </h2>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="relative mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold text-ink">
            Name:<span className="text-accent-alt">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Hello…"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-ink">
            Email.<span className="text-accent-alt">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="Where can i reply"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="company" className="text-sm font-bold text-ink">
            Company name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            placeholder="Company, your name or Linkedin?"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-ink">
            Message<span className="text-accent-alt">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell me …"
            className={`${fieldClass} resize-none`}
          />
        </div>

        {/* Send button (right) with hand-drawn arrow pointing at it */}
        <div className="flex items-center justify-end gap-3 sm:col-span-2">
          <motion.button
            type="submit"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-pill bg-ink px-9 py-4 text-sm font-medium text-ink-inverse"
          >
            {submitted ? (
              <>
                Sent <Check className="size-4" />
              </>
            ) : (
              "Send Me"
            )}
          </motion.button>
          <Image
            src="/images/arrow-send.png"
            alt=""
            aria-hidden
            width={179}
            height={174}
            className="mb-4 size-16"
          />
        </div>
      </motion.form>
    </section>
  );
}

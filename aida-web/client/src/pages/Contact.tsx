/*
 * AIDA Ventures — Contact Page
 * NO headquarters/Madrid mention per user request.
 * Three email columns (Founders, LPs, General) + contact form.
 * Font sizes: body 18px+, headlines 56-72px, section 32-40px.
 * NO emojis, NO pill buttons.
 */
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Thank you for reaching out. We'll be in touch soon.");
    setForm({ name: "", email: "", type: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-[140px] pb-[56px] lg:pt-[180px] lg:pb-[72px] bg-[#FAF9F6]">
        <div className="container">
          <SectionReveal>
            <p className="section-label mb-4">Contact</p>
            <h1
              className="text-[36px] sm:text-[50px] lg:text-[60px] leading-[1.08] text-[#1A1A1A] max-w-[500px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Get in touch
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Email Columns */}
      <section className="py-14 lg:py-16 bg-[#FAF9F6] border-t border-[#E5E5E5]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
            {[
              {
                label: "Founders",
                email: "founders@aidaventures.vc",
                cta: "Apply for Funding",
                href: "/founders",
              },
              {
                label: "Limited Partners",
                email: "investors@aidaventures.vc",
                cta: "Request Materials",
                href: "/lp",
              },
              {
                label: "General",
                email: "info@aidaventures.vc",
                cta: "Get in Touch",
                href: "mailto:info@aidaventures.vc",
              },
            ].map((col, i) => (
              <SectionReveal key={col.label} delay={i * 0.1}>
                <div>
                  <p
                    className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#737373] mb-3"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {col.label}
                  </p>
                  <a
                    href={`mailto:${col.email}`}
                    className="text-[18px] text-[#1A1A1A] hover:text-[#14B8A6] transition-colors no-underline block mb-4"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {col.email}
                  </a>
                  <a
                    href={col.href}
                    className="text-[14px] font-medium tracking-[0.04em] text-[#0F172A] border-b border-[#0F172A] hover:text-[#14B8A6] hover:border-[#14B8A6] transition-colors no-underline pb-0.5"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {col.cta}
                  </a>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 lg:py-16 bg-[#F5F5F4] border-t border-[#E5E5E5]">
        <div className="container">
          <div className="max-w-[600px]">
            <SectionReveal>
              <p className="section-label mb-8">Send a Message</p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-[14px] font-medium tracking-[0.04em] text-[#737373] mb-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4D4D4] text-[18px] text-[#1A1A1A] focus:outline-none focus:border-[#0F172A] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[14px] font-medium tracking-[0.04em] text-[#737373] mb-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4D4D4] text-[18px] text-[#1A1A1A] focus:outline-none focus:border-[#0F172A] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[14px] font-medium tracking-[0.04em] text-[#737373] mb-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    I am a
                  </label>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4D4D4] text-[18px] text-[#1A1A1A] focus:outline-none focus:border-[#0F172A] transition-colors appearance-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <option value="" disabled>Select one</option>
                    <option value="founder">Founder</option>
                    <option value="lp">LP</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-[14px] font-medium tracking-[0.04em] text-[#737373] mb-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4D4D4] text-[18px] text-[#1A1A1A] focus:outline-none focus:border-[#0F172A] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="text-[15px] font-medium tracking-[0.04em] px-8 py-3.5 bg-[#0F172A] text-[#FAFAF9] hover:bg-[#1e293b] transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Send
                </button>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}

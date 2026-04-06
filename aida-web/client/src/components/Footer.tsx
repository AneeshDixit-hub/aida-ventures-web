/*
 * AIDA Ventures — Footer
 * Design: Clean editorial footer. NO headquarters/Madrid mention per user request.
 * Thin divider top, wordmark left, nav links right, copyright bottom.
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FAF9F6]">
      <div className="container py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          {/* Left: Wordmark + email */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-baseline gap-0 no-underline">
              <span
                className="text-[22px] tracking-[0.02em] text-[#0F172A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <span style={{ fontSize: "24px" }}>AI</span>
                <span style={{ opacity: 0.7 }}>DA</span>
              </span>
              <span
                className="ml-2 text-[13px] font-medium tracking-[0.08em] uppercase text-[#0F172A]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Ventures
              </span>
            </Link>
            <a
              href="mailto:info@aidaventures.vc"
              className="text-[15px] text-[#737373] hover:text-[#404040] transition-colors no-underline"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              info@aidaventures.vc
            </a>
          </div>

          {/* Right: Nav links + LinkedIn */}
          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Focus", href: "/#focus" },
                { label: "Model", href: "/#model" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium tracking-[0.04em] text-[#404040] hover:text-[#1A1A1A] transition-colors no-underline"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium tracking-[0.04em] text-[#737373] hover:text-[#1A1A1A] transition-colors no-underline flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              LinkedIn
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline-block">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-5 border-t border-[#E5E5E5]">
          <p
            className="text-[13px] text-[#737373] tracking-[0.02em]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            &copy; 2026 AIDA Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

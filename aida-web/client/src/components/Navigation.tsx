/*
 * AIDA Ventures — Navigation
 * Design: Fixed top, clean horizontal. AIDA wordmark left, nav center, dual CTAs right.
 * "AI" in AIDA subtly bolder. Sharp, institutional. No pill buttons.
 * Transparent on hero (white text), solid on scroll (dark text).
 * Mobile: hamburger menu.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // On homepage, nav starts transparent with white text; on other pages, always solid
  const isHome = location === "/";
  const isTransparent = isHome && !scrolled && !mobileOpen;

  const textColor = isTransparent ? "text-white" : "text-[#0F172A]";
  const linkColor = isTransparent ? "text-[#CBD5E1] hover:text-white" : "text-[#404040] hover:text-[#1A1A1A]";
  const hamburgerColor = isTransparent ? "bg-white" : "bg-[#0F172A]";

  const navLinks = [
    { label: "Focus", href: "/#focus" },
    { label: "Model", href: "/#model" },
    { label: "Team", href: "/team" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E5E5E5]"
        }`}
      >
        <div className="container flex items-center justify-between h-[72px]">
          {/* Wordmark */}
          <Link href="/" className="flex items-baseline gap-0 no-underline">
            <span
              className={`text-[22px] tracking-[0.02em] transition-colors duration-300 ${textColor}`}
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <span className="font-normal" style={{ fontSize: "24px" }}>AI</span>
              <span style={{ opacity: 0.7 }}>DA</span>
            </span>
            <span
              className={`ml-2 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${textColor}`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Ventures
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`text-[15px] font-medium tracking-[0.04em] transition-colors no-underline ${linkColor}`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/lp"
              className={`text-[14px] font-medium tracking-[0.04em] px-5 py-2.5 border transition-all duration-200 no-underline ${
                isTransparent
                  ? "border-white/50 text-white hover:bg-white hover:text-[#0F172A]"
                  : "border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-[#FAFAF9]"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              I'm an Investor
            </Link>
            <Link
              href="/founders"
              className={`text-[14px] font-medium tracking-[0.04em] px-5 py-2.5 transition-all duration-200 no-underline ${
                isTransparent
                  ? "bg-white text-[#0F172A] hover:bg-[#E5E5E5]"
                  : "bg-[#0F172A] text-[#FAFAF9] hover:bg-[#1e293b]"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              I'm a Founder
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 ${hamburgerColor} ${
                mobileOpen ? "rotate-45 translate-y-[6.5px] !bg-[#0F172A]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 ${hamburgerColor} ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 ${hamburgerColor} ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px] !bg-[#0F172A]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F6] pt-[72px]">
          <div className="container flex flex-col gap-8 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                  setMobileOpen(false);
                }}
                className="text-[30px] text-[#1A1A1A] no-underline"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="editorial-divider mt-4" />
            <div className="flex flex-col gap-3 mt-2">
              <Link
                href="/lp"
                className="text-[15px] font-medium tracking-[0.04em] px-5 py-3 border border-[#0F172A] text-[#0F172A] text-center no-underline"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                I'm an Investor
              </Link>
              <Link
                href="/founders"
                className="text-[15px] font-medium tracking-[0.04em] px-5 py-3 bg-[#0F172A] text-[#FAFAF9] text-center no-underline"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                I'm a Founder
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

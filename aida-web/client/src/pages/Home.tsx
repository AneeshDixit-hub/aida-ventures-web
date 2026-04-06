/*
 * AIDA Ventures — Homepage
 * Design: Editorial broadsheet. Instrument Serif headings, DM Sans body.
 * Visual rhythm: Dark Hero → Light Metrics → Textured Focus → Textured Model → Dark Why LatAm → Textured Beyond Capital → Textured Team → Dark CTA
 * Team photos: grayscale, circular crop, consistent treatment.
 * Font sizes: body 18px+, headlines 56-72px, section 32-40px, card titles 24-28px.
 * NO emojis, NO pill buttons, NO fund size, NO headquarters.
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import ApplicationModal from "@/components/ApplicationModal";
import TeamMemberModal, { type TeamMemberFull } from "@/components/TeamMemberModal";

/* ─── Blueprint Lines Background Pattern ──────────────────────────── */
function BlueprintLines({ opacity = 0.04, id = "bp" }: { opacity?: number; id?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`${id}-blueprint`} width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="80" y2="0" stroke="#0F172A" strokeWidth="0.6" />
            <line x1="0" y1="0" x2="0" y2="80" stroke="#0F172A" strokeWidth="0.6" />
            <line x1="0" y1="40" x2="80" y2="40" stroke="#0F172A" strokeWidth="0.3" strokeDasharray="4 4" />
            <line x1="40" y1="0" x2="40" y2="80" stroke="#0F172A" strokeWidth="0.3" strokeDasharray="4 4" />
            <line x1="0" y1="8" x2="4" y2="8" stroke="#0F172A" strokeWidth="0.4" />
            <line x1="8" y1="0" x2="8" y2="4" stroke="#0F172A" strokeWidth="0.4" />
            <line x1="72" y1="0" x2="72" y2="4" stroke="#0F172A" strokeWidth="0.4" />
            <line x1="76" y1="8" x2="80" y2="8" stroke="#0F172A" strokeWidth="0.4" />
            <circle cx="0" cy="0" r="1.2" fill="none" stroke="#0F172A" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-blueprint)`} />
      </svg>
    </div>
  );
}

/* ─── Gradient Mesh Background ─────────────────────────────────── */
function GradientMesh() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(245, 240, 235, 0.7) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(230, 235, 240, 0.5) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function Hero({ onApply }: { onApply: () => void }) {
  return (
    <section className="relative bg-[#0F172A] overflow-hidden min-h-[88vh] flex items-end">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/s14le0yOYFMqXlI0mtHMl5/sandbox/DbYmhc3bITmTdUfHEm32Bi-img-1_1770892793000_na1fn_YWlkYS1oZXJvLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczE0bGUweU9ZRk1xWGxJMG10SE1sNS9zYW5kYm94L0RiWW1oYzNiSVRtVGRVZkhFbTMyQmktaW1nLTFfMTc3MDg5Mjc5MzAwMF9uYTFmbl9ZV2xrWVMxb1pYSnZMV0puLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AEZnKXkStV7~VN-Hg-qbB75BzU1ZGanJYxoEopUN6~FvzGKGJqtfW5wqdawZ-YP4GWEOuEw1o494fEwya05EnKf3Cor9TI1dJG2kLsVFftac6fofG7bh6U22HyXE3hxPCehmSvV9pSorGXbpbom8EidD5erBRZgQk102vK-cQZhVbeQpdLyDYgUorEtYLaC8PnE3y15O-F4R59dBfU2~YK5UOvUsIxuKY2u4Ow4cQHHBI2KKkuXzVu3L-WaSaAmuxow7zyySUEjdShiSQy~qhAssVJ0vTmDtWJQ0d8hciMfFgKCjHQuXxDtBpxEDDnxNydEoVgueid41PhaCwLBbEw__')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/40" />
      <div className="relative container pb-[72px] lg:pb-[88px] pt-[160px] lg:pt-[200px]">
        <SectionReveal>
          <p
            className="text-[13px] font-medium tracking-[0.14em] uppercase text-[#14B8A6] mb-5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Early-Stage Fund II
          </p>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h1
            className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.06] text-white max-w-[820px] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Building the next generation of infrastructure in LatAm
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <p
            className="text-[18px] lg:text-[20px] leading-[1.7] text-[#94A3B8] max-w-[580px] mb-9"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            A hybrid VC + Venture Studio model led by operators, designed to de-risk early stages and accelerate time to Series A.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onApply}
              className="inline-block text-[15px] font-medium tracking-[0.04em] px-7 py-3.5 bg-white text-[#0F172A] hover:bg-[#E5E5E5] transition-colors text-center"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Apply as Founder
            </button>
            <a
              href="/#model"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("model")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block text-[15px] font-medium tracking-[0.04em] px-7 py-3.5 border border-[#475569] text-[#CBD5E1] hover:border-white hover:text-white transition-colors no-underline text-center"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Explore Our Strategy
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Metrics Strip ────────────────────────────────────────────── */
function MetricsStrip() {
  const metrics = [
    { value: "Pre-Seed \u2192 Series A", label: "Investment Stage" },
    { value: "Fintech | LogTech | SaaS", label: "Sectors" },
    { value: "VC + Studio", label: "Hybrid Model" },
    { value: "LatAm Focus", label: "Regional Focus" },
  ];

  return (
    <section className="border-b border-[#E5E5E5] bg-[#FAF9F6]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-[#E5E5E5]">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`py-7 lg:py-9 px-0 lg:px-6 first:lg:pl-0 last:lg:pr-0 ${
                i < 2 ? "border-b lg:border-b-0 border-[#E5E5E5]" : ""
              } ${i % 2 === 0 ? "pr-4" : "pl-4 lg:pl-6"}`}
            >
              <p
                className="text-[17px] lg:text-[18px] font-medium text-[#1A1A1A] mb-1"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {m.value}
              </p>
              <p
                className="text-[12px] tracking-[0.08em] uppercase text-[#737373]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Investment Focus ─────────────────────────────────────────── */
function InvestmentFocus() {
  const sectors = [
    {
      title: "Fintech",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      description: "Fraud detection, digital payments, lending platforms, and alternative credit scoring.",
      tags: ["B2B Payments", "Embedded Finance", "Infrastructure"],
    },
    {
      title: "Supply Chain",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      description: "E-commerce growth enablers, supply chain optimization, and last-mile delivery.",
      tags: ["LogTech", "Cross-border Trade", "Fulfillment"],
    },
    {
      title: "Enterprise SaaS",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      description: "Business digitalization, operational efficiency solutions, and cloud adoption.",
      tags: ["Vertical SaaS", "AI Automation", "Data Infrastructure"],
    },
  ];

  return (
    <section id="focus" className="section-spacing bg-[#F5F5F4] relative overflow-hidden">
      <BlueprintLines opacity={0.09} id="focus" />
      <GradientMesh />
      <div className="relative container">
        <SectionReveal>
          <p className="section-label mb-4">Investment Focus</p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#1A1A1A] max-w-[700px] mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            We target high-impact sectors where digital infrastructure is critical for growth.
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {sectors.map((sector, i) => (
            <SectionReveal key={sector.title} delay={i * 0.1}>
              <div className="border border-[#E5E5E5] bg-white/60 backdrop-blur-sm p-6 lg:p-8 hover:border-[#C4C4C4] transition-colors h-full">
                <div className="text-[#0F172A] mb-5">{sector.icon}</div>
                <h3
                  className="text-[24px] lg:text-[28px] text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {sector.title}
                </h3>
                <p
                  className="text-[18px] text-[#404040] leading-[1.7] mb-5"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-medium tracking-[0.04em] text-[#737373] border border-[#E5E5E5] px-2.5 py-1"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Hybrid Model ────────────────────────────────────────────── */
function HybridModel() {
  return (
    <section id="model" className="section-spacing bg-[#F5F5F4] relative overflow-hidden border-t border-[#E5E5E5]">
      <BlueprintLines opacity={0.08} id="model" />
      <div className="relative container">
        <SectionReveal>
          <p className="section-label mb-4">The Hybrid Model</p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#1A1A1A] max-w-[700px] mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Traditional VC funds write checks. Venture Studios build companies.
          </h2>
          <p
            className="text-[20px] text-[#404040] max-w-[600px] mb-10"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            We do both — and that changes everything.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SectionReveal delay={0.1}>
            <div className="border border-[#E5E5E5] bg-white/60 backdrop-blur-sm p-6 lg:p-8 h-full">
              <p
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#14B8A6] mb-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Venture Capital
              </p>
              <h3
                className="text-[24px] lg:text-[26px] text-[#1A1A1A] mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Back exceptional founders with capital and support
              </h3>
              <p
                className="text-[18px] text-[#737373]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Seed to Series A
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="border border-[#E5E5E5] bg-white/60 backdrop-blur-sm p-6 lg:p-8 h-full">
              <p
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#14B8A6] mb-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Venture Studio
              </p>
              <h3
                className="text-[24px] lg:text-[26px] text-[#1A1A1A] mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Co-build with operators from problem to product
              </h3>
              <p
                className="text-[18px] text-[#737373]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Phase 0 → Phase 3 — Idea to Exit-Ready
              </p>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-8 border-t border-[#E5E5E5] pt-6">
            <p
              className="text-[20px] text-[#1A1A1A] font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              De-Risked Pipeline
            </p>
            <p
              className="text-[18px] text-[#737373] mt-1"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Higher conviction. Faster execution. Better outcomes.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Why Latin America ───────────────────────────────────────── */
function WhyLatAm() {
  const stats = [
    { value: "50%+", desc: "population underbanked — Fintech opportunity" },
    { value: "15%", desc: "of GDP spent on logistics vs 8% in developed markets — LogTech opportunity" },
    { value: "30%", desc: "SME digitization gap below global average — SaaS opportunity" },
  ];

  return (
    <section className="section-spacing bg-[#0F172A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/s14le0yOYFMqXlI0mtHMl5/sandbox/DbYmhc3bITmTdUfHEm32Bi-img-5_1770892793000_na1fn_YWlkYS13aHktbGF0YW0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczE0bGUweU9ZRk1xWGxJMG10SE1sNS9zYW5kYm94L0RiWW1oYzNiSVRtVGRVZkhFbTMyQmktaW1nLTVfMTc3MDg5Mjc5MzAwMF9uYTFmbl9ZV2xrWVMxM2FIa3RiR0YwWVcwLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Fhw2DjJqjLyNqPjPqaHPJLqrKBfXZPUFfqDCPZXzlXn8sSz-fB~Vj5PFoqDFEJzwIqKLGR8Ql7Ql5Wy~xGEJyKVJBkIoWkjBjNWCZlRiWFnqJj0Iu4f-ywHWBBHYrWQCOxHW3bKPjqjIjVGVqQ~cNUCIJYlBpJJYkAJKFPkUdN8RKbZlOWJ5Bq4LlXHqIqEIJqGqKqFqDqBqAq9q8q7q6q5q4q3q2q1q0pZpYpXpWpVpUpTpSpRpQpPpOpNpMpLpKpJpIpHpGpFpEpDpCpBpApz')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 to-[#0F172A]/90" />
      <div className="relative container">
        <SectionReveal>
          <p
            className="text-[13px] font-medium tracking-[0.14em] uppercase text-[#14B8A6] mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Why Latin America
          </p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] text-white max-w-[600px] mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            650M consumers. Massive infrastructure gaps.
          </h2>
          <p
            className="text-[20px] text-[#94A3B8] max-w-[500px] mb-10"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            The opportunity is structural, not speculative.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {stats.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="border-l border-[#14B8A6]/40 pl-5">
                <p
                  className="text-[36px] lg:text-[44px] text-white mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[16px] text-[#94A3B8] leading-[1.6]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {stat.desc}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <p
            className="text-[20px] text-[#CBD5E1] max-w-[500px]"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            We don't bet on Latin America. We build the infrastructure it needs.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Beyond Capital ──────────────────────────────────────────── */
function BeyondCapital() {
  const cards = [
    {
      title: "Venture Studio Methodology",
      desc: "Operational playbooks refined over 14+ years and 50+ projects.",
      detail: "We don't just advise. We've built companies ourselves.",
    },
    {
      title: "Operator Support",
      desc: "KPI-driven, not just advice — hands-on execution support.",
      detail: "Weekly check-ins, milestone tracking, direct intervention when needed.",
    },
    {
      title: "Soft-Landing Engine",
      desc: "Structured market entry support for portfolio companies.",
      detail: "Regulatory navigation, local partnerships, talent networks.",
    },
    {
      title: "Series A Readiness",
      desc: "Direct path to Series A with milestone-driven development.",
      detail: "We prepare you for what Series A investors expect before you meet them.",
    },
  ];

  return (
    <section className="section-spacing bg-[#F5F5F4] relative overflow-hidden border-t border-[#E5E5E5]">
      <BlueprintLines opacity={0.09} id="beyond" />
      <GradientMesh />
      <div className="relative container">
        <SectionReveal>
          <p className="section-label mb-4">How We Create Value</p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#1A1A1A] mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Beyond Capital
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.08}>
              <div className="border border-[#E5E5E5] bg-white/60 backdrop-blur-sm p-6 lg:p-8 hover:border-[#C4C4C4] transition-colors h-full">
                <h3
                  className="text-[24px] lg:text-[26px] text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[18px] text-[#404040] leading-[1.7] mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.desc}
                </p>
                <p
                  className="text-[16px] text-[#737373] leading-[1.6]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.detail}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team Data (shared for preview + modal) ────────────────── */
const teamData: TeamMemberFull[] = [
  {
    initials: "LH",
    name: "Luis Hernandez Alburquerque",
    title: "General Partner",
    shortBio: "Pioneering force in Corporate Venture Capital across LatAm. 30+ years at IBM, HSBC. Raised up to $500M for tech companies.",
    fullTitle: "General Partner",
    bio: [
      "Luis is a pioneering force in Corporate Venture Capital and innovation infrastructure across Latin America. With over 30 years of experience, spanning global companies like IBM and HSBC\u2014where he served as LATAM Director for Global Banking & Markets Department\u2014Luis specializes in digital transformation, fintech, product development, and structuring financial services ventures.",
      "He has raised up to $500M for technology-based companies and was key in launching a $30B fund at HSBC. As Founder of Scale Radical (serving 30+ brands) and Managing Partner of AIDA Ventures, Luis invests in early-stage fintech, logtech, and enterprise AI infrastructure throughout the region.",
    ],
    linkedin: "https://www.linkedin.com/in/luishernandezalburquerque/",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663054812106/8JSreaKzAnEDJAzeuVibB4/LuisHeadshot_c5f12769.jpg",
  },
  {
    initials: "NS",
    name: "Nelly Salas",
    title: "General Partner",
    shortBio: "CFO of VC funds across Mexico, U.S., and LatAm. MBA from EGADE Business School. Startup investor & podcast host.",
    fullTitle: "General Partner",
    bio: [
      "Nelly is a finance executive and venture capital operator with deep expertise across Mexico, the United States, and Latin America. She has served as CFO at Alta Global Ventures for over 8 years and at Kickstart Peru for over 12 years, giving her extensive experience in fund operations and financial management.",
      "Beyond her operating roles, Nelly is an early-stage startup investor and advisor. She teaches as Profesora de C\u00E1tedra at Tecnol\u00F3gico de Monterrey and hosts two podcasts focused on entrepreneurship: Escalables and Fuera de L\u00EDneas. She holds an MBA from EGADE Business School and serves as Board Member of the Entrepreneurship and Venture Capital Club.",
    ],
    linkedin: "https://www.linkedin.com/in/nelly-salas-02b47b40/",
  },
  {
    initials: "GG",
    name: "Guillermo Guzm\u00E1n",
    title: "General Partner",
    shortBio: "75+ startups launched. 470+ mentor network across LatAm. Former GP at Indio VC. Founder Institute leader.",
    fullTitle: "General Partner",
    bio: [
      "Guillermo is a founder and startup builder with deep experience across the Latin American ecosystem. He has helped launch over 75 startups in 5 years and built a network of 470+ mentors across the region.",
      "He currently serves as Local Leader of the Founder Institute Colombia Chapter, a role he has held for over 5 years. Previously, Guillermo was General Partner at Indio VC, where he focused on FinTech and HealthTech investments. He also founded Finbox, a FinTech platform, and co-founded FlotaGur\u00FA. His experience includes serving as Representante Legal at AsoStartups Colombia, the national startup association.",
    ],
    linkedin: "https://www.linkedin.com/in/guillermo-guzman-fi/",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663054812106/YHiBMddYAwezYQsv.jpeg",
  },
];

/* ─── Team on Homepage ────────────────────────────────────────── */
function TeamPreview({ onSelectMember }: { onSelectMember: (m: TeamMemberFull) => void }) {
  return (
    <section id="team-preview" className="section-spacing bg-[#0F172A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/s14le0yOYFMqXlI0mtHMl5/sandbox/DbYmhc3bITmTdUfHEm32Bi-img-1_1770892793000_na1fn_YWlkYS1oZXJvLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczE0bGUweU9ZRk1xWGxJMG10SE1sNS9zYW5kYm94L0RiWW1oYzNiSVRtVGRVZkhFbTMyQmktaW1nLTFfMTc3MDg5Mjc5MzAwMF9uYTFmbl9ZV2xrWVMxb1pYSnZMV0puLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AEZnKXkStV7~VN-Hg-qbB75BzU1ZGanJYxoEopUN6~FvzGKGJqtfW5wqdawZ-YP4GWEOuEw1o494fEwya05EnKf3Cor9TI1dJG2kLsVFftac6fofG7bh6U22HyXE3hxPCehmSvV9pSorGXbpbom8EidD5erBRZgQk102vK-cQZhVbeQpdLyDYgUorEtYLaC8PnE3y15O-F4R59dBfU2~YK5UOvUsIxuKY2u4Ow4cQHHBI2KKkuXzVu3L-WaSaAmuxow7zyySUEjdShiSQy~qhAssVJ0vTmDtWJQ0d8hciMfFgKCjHQuXxDtBpxEDDnxNydEoVgueid41PhaCwLBbEw__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container">
        <SectionReveal>
          <p
            className="text-[13px] font-medium tracking-[0.14em] uppercase text-[#14B8A6] mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Team
          </p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] text-white mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Led by Operators
          </h2>
          <p
            className="text-[18px] text-[#94A3B8] max-w-[550px] mb-10"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Decades of experience in banking, venture capital, and startup scaling.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamData.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 0.1}>
              <div
                className="text-center md:text-left cursor-pointer group"
                onClick={() => onSelectMember(member)}
              >
                {/* Avatar — COLOR, larger circular crop */}
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] rounded-full object-cover object-top mx-auto md:mx-0 mb-5 ring-2 ring-white/10 group-hover:ring-[#14B8A6]/40 transition-all grayscale"
                  />
                ) : (
                  <div className="w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] rounded-full bg-[#1E293B] flex items-center justify-center mx-auto md:mx-0 mb-5 ring-2 ring-white/10 group-hover:ring-[#14B8A6]/40 transition-all">
                    <span
                      className="text-[38px] font-medium text-[#94A3B8]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                )}
                <h3
                  className="text-[24px] text-white mb-1 group-hover:text-[#14B8A6] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[14px] font-medium tracking-[0.06em] uppercase text-[#64748B] mb-3"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {member.title}
                </p>
                <p
                  className="text-[16px] text-[#94A3B8] leading-[1.6]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {member.shortBio}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <div className="mt-10 pt-6 border-t border-white/10">
            <Link
              href="/team"
              className="text-[15px] font-medium tracking-[0.04em] text-white border-b border-white/40 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-colors no-underline pb-0.5 inline-flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Meet the Full Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Dual CTA ─────────────────────────────────────────────────── */
function DualCTA({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-12 lg:py-14 bg-[#0F172A]">
      <div className="container">
        <div className="py-8 lg:py-10 text-center">
          <SectionReveal>
            <h2
              className="text-[30px] sm:text-[38px] lg:text-[44px] text-white max-w-[620px] mx-auto mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Whether you're building the future or investing in it, we'd like to hear from you.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onApply}
                className="inline-block text-[15px] font-medium tracking-[0.04em] px-8 py-3.5 bg-white text-[#0F172A] hover:bg-[#E5E5E5] transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                I'm a Founder
              </button>
              <Link
                href="/lp"
                className="inline-block text-[15px] font-medium tracking-[0.04em] px-8 py-3.5 border border-[#475569] text-[#CBD5E1] hover:border-white hover:text-white transition-colors no-underline"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                I'm an Investor
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMemberFull | null>(null);

  return (
    <Layout>
      <Hero onApply={() => setShowModal(true)} />
      <MetricsStrip />
      <InvestmentFocus />
      <HybridModel />
      <WhyLatAm />
      <BeyondCapital />
      <TeamPreview onSelectMember={setSelectedMember} />
      <DualCTA onApply={() => setShowModal(true)} />
      <ApplicationModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </Layout>
  );
}

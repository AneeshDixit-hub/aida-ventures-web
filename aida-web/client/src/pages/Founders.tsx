/*
 * AIDA Ventures — Founders Page
 * Target: Young founders, entrepreneurs seeking funding.
 * Tone: Energetic but professional, operator credibility.
 * Background: Warm #F8F7F5 with subtle blueprint texture, NOT pure white.
 * Apply Now / Apply as Founder → opens ApplicationModal popup.
 * Font sizes: body 18px+, headlines 56-72px, section 32-40px, card titles 24-28px.
 * NO headquarters, NO emojis, NO pill buttons.
 */
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import ApplicationModal from "@/components/ApplicationModal";
import { useEffect, useState } from "react";

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

export default function Founders() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      {/* Hero — warm background with subtle texture */}
      <section className="pt-[140px] pb-[64px] lg:pt-[180px] lg:pb-[80px] bg-[#F8F7F5] relative overflow-hidden">
        <BlueprintLines opacity={0.06} id="founders-hero" />
        {/* Subtle warm gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(180deg, rgba(248,247,245,0) 0%, rgba(245,243,240,0.8) 100%)"
        }} />
        <div className="relative container">
          <SectionReveal>
            <p className="section-label mb-4">For Founders</p>
            <h1
              className="text-[36px] sm:text-[50px] lg:text-[60px] leading-[1.08] text-[#1A1A1A] max-w-[700px] mb-5"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              If you're building critical infrastructure for Latin America, we want to hear from you.
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* What We Invest In */}
      <section className="py-14 lg:py-16 bg-[#F8F7F5] border-t border-[#E5E5E5] relative overflow-hidden">
        <BlueprintLines opacity={0.04} id="founders-invest" />
        <div className="relative container">
          <SectionReveal>
            <p className="section-label mb-8">What We Invest In</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {[
                { label: "Sectors", value: "Fintech, LogTech, Enterprise SaaS" },
                { label: "Stage", value: "Pre-Seed, Seed" },
                { label: "Geography", value: "Latin America" },
                { label: "Check Size", value: "$200K \u2013 $1M" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#737373] mb-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[18px] text-[#1A1A1A] font-medium leading-[1.5]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How We Create Value */}
      <section className="py-14 lg:py-16 bg-[#F5F3F0] border-t border-[#E5E5E5] relative overflow-hidden">
        <BlueprintLines opacity={0.06} id="founders-value" />
        <div className="relative container">
          <SectionReveal>
            <p className="section-label mb-4">How We Create Value</p>
            <h2
              className="text-[32px] sm:text-[38px] text-[#1A1A1A] mb-10"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Beyond Capital
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
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
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <div className="border border-[#E5E5E5] bg-white/50 backdrop-blur-sm p-6 lg:p-8 hover:border-[#C4C4C4] transition-colors h-full">
                  <h3
                    className="text-[24px] text-[#1A1A1A] mb-3"
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

      {/* What We Don't Invest In */}
      <section className="py-14 lg:py-16 bg-[#F8F7F5] border-t border-[#E5E5E5] relative overflow-hidden">
        <BlueprintLines opacity={0.04} id="founders-dont" />
        <div className="relative container">
          <SectionReveal>
            <p className="section-label mb-6">What We Don't Invest In</p>
            <div className="max-w-[600px] space-y-3">
              {[
                "Hardware-only companies",
                "B2C consumer apps without infrastructure layer",
                "Companies outside LatAm focus",
                "Pre-idea / concept stage without validation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#737373] mt-2.5 shrink-0" />
                  <p
                    className="text-[18px] text-[#404040] leading-[1.7]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-14 lg:py-16 bg-[#F5F3F0] border-t border-[#E5E5E5] relative overflow-hidden">
        <BlueprintLines opacity={0.05} id="founders-process" />
        <div className="relative container">
          <SectionReveal>
            <p className="section-label mb-4">Our Process</p>
            <h2
              className="text-[32px] sm:text-[38px] text-[#1A1A1A] mb-10"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              We respect your time.
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                week: "Week 1\u20132",
                title: "Initial Conversation",
                desc: "Thesis fit and mutual alignment",
              },
              {
                week: "Week 3\u20134",
                title: "Deep Dive",
                desc: "Team, market, and product evaluation",
              },
              {
                week: "Week 4\u20136",
                title: "Decision",
                desc: "Term sheet if aligned",
              },
            ].map((step, i) => (
              <SectionReveal key={step.week} delay={i * 0.1}>
                <div className="relative pl-6 border-l border-[#E5E5E5]">
                  <p
                    className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#14B8A6] mb-3"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {step.week}
                  </p>
                  <h3
                    className="text-[24px] text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[18px] text-[#404040] leading-[1.7]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <p
              className="text-[20px] text-[#404040] mt-10"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              Clear feedback within 2 weeks.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-14 lg:py-16 bg-[#0F172A]">
        <div className="container text-center">
          <SectionReveal>
            <h2
              className="text-[32px] sm:text-[42px] text-white mb-7"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ready to grow?
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block text-[15px] font-medium tracking-[0.04em] px-8 py-3.5 bg-white text-[#0F172A] hover:bg-[#E5E5E5] transition-colors mb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Apply Now
            </button>
            <p
              className="text-[15px] text-[#94A3B8]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <a
                href="mailto:founders@aidaventures.vc"
                className="text-[#94A3B8] hover:text-white transition-colors no-underline"
              >
                founders@aidaventures.vc
              </a>
            </p>
          </SectionReveal>
        </div>
      </section>

      <ApplicationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </Layout>
  );
}

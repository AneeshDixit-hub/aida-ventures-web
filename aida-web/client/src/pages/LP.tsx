/*
 * AIDA Ventures — LP Page
 * Target: Institutional LPs, family offices, fund of funds.
 * Tone: Structured, professional, metrics-focused.
 * Font sizes: body 18px+, headlines 56-72px, section 32-40px, card titles 24-28px.
 * NO headquarters, NO emojis, NO pill buttons.
 */
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { useEffect } from "react";

export default function LP() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-[140px] pb-[64px] lg:pt-[180px] lg:pb-[80px] bg-[#FAF9F6]">
        <div className="container">
          <SectionReveal>
            <p className="section-label mb-4">For Limited Partners</p>
            <h1
              className="text-[36px] sm:text-[50px] lg:text-[60px] leading-[1.08] text-[#1A1A1A] max-w-[750px] mb-5"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              AIDA Ventures Fund II is an early-stage fund focused on Latin American B2B infrastructure.
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-14 lg:py-16 bg-[#FAF9F6] border-t border-[#E5E5E5]">
        <div className="container">
          <SectionReveal>
            <p className="section-label mb-8">Strategy</p>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <SectionReveal delay={0.1}>
              <div>
                <h3
                  className="text-[26px] text-[#1A1A1A] mb-5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Hybrid VC + Venture Studio model
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Venture Capital", desc: "Back exceptional founders at Pre-Seed and Seed" },
                    { label: "Venture Studio", desc: "Co-build companies with operator teams from idea to exit-ready" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#14B8A6] mt-2.5 shrink-0" />
                      <p className="text-[18px] text-[#404040] leading-[1.7]" style={{ fontFamily: "var(--font-sans)" }}>
                        <span className="font-medium text-[#1A1A1A]">{item.label}:</span> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3
                  className="text-[26px] text-[#1A1A1A] mb-5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Portfolio Construction
                </h3>
                <div className="space-y-3">
                  {[
                    "4-phase development model (Discovery \u2192 MVP \u2192 Growth \u2192 Scale)",
                    "Staged capital deployment aligned to de-risking milestones",
                    "Follow-on reserves for winners",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#14B8A6] mt-2.5 shrink-0" />
                      <p className="text-[18px] text-[#404040] leading-[1.7]" style={{ fontFamily: "var(--font-sans)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why We Win */}
      <section className="py-14 lg:py-16 bg-[#F5F5F4] border-t border-[#E5E5E5]">
        <div className="container">
          <SectionReveal>
            <p className="section-label mb-4">Why We Win</p>
            <h2
              className="text-[32px] sm:text-[38px] text-[#1A1A1A] mb-10"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Unfair Advantages
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Operator's Edge",
                desc: "GPs with institutional experience (HSBC, financial institutions, venture building)",
              },
              {
                title: "Venture Studio De-Risking",
                desc: "Manufacture high-conviction opportunities, validate before heavy capital deployment",
              },
              {
                title: "LatAm Nexus",
                desc: "Deep regional networks, corporate relationships, regulatory knowledge",
              },
              {
                title: "Soft-Landing Engine",
                desc: "Structured market entry support for portfolio companies",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <div className="bg-[#FAF9F6] border border-[#E5E5E5] p-6 lg:p-8 hover:border-[#C4C4C4] transition-colors h-full">
                  <h3
                    className="text-[24px] text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[18px] text-[#404040] leading-[1.7]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-14 lg:py-16 bg-[#FAF9F6] border-t border-[#E5E5E5]">
        <div className="container">
          <SectionReveal>
            <p className="section-label mb-8">Track Record</p>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <SectionReveal delay={0.1}>
              <div>
                <h3
                  className="text-[26px] text-[#1A1A1A] mb-5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  CVC Experience
                </h3>
                <div className="space-y-3">
                  {[
                    "Delta X Ventures \u2014 corporate venture arm launched and managed",
                    "SURA WealthTech \u2014 venture initiatives developed",
                    "MiPaquete \u2014 10.5x MOIC (logistics aggregator, Colombia)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#0F172A] mt-2.5 shrink-0" />
                      <p className="text-[18px] text-[#404040] leading-[1.7]" style={{ fontFamily: "var(--font-sans)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3
                  className="text-[26px] text-[#1A1A1A] mb-5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Methodology Proven
                </h3>
                <div className="space-y-3">
                  {[
                    "50+ corporate innovation projects delivered through Scale Radical",
                    "Structured venture building process refined over 14+ years",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#0F172A] mt-2.5 shrink-0" />
                      <p className="text-[18px] text-[#404040] leading-[1.7]" style={{ fontFamily: "var(--font-sans)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Team & Governance */}
      <section className="py-14 lg:py-16 bg-[#F5F5F4] border-t border-[#E5E5E5]">
        <div className="container">
          <SectionReveal>
            <p className="section-label mb-8">Team & Governance</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                initials: "LH",
                name: "Luis Hernandez Alburquerque",
                title: "General Partner",
                bio: "Pioneering force in Corporate Venture Capital across LatAm. 30+ years at IBM, HSBC. Raised up to $500M for tech companies.",
                photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663054812106/8JSreaKzAnEDJAzeuVibB4/LuisHeadshot_c5f12769.jpg",
              },
              {
                initials: "NS",
                name: "Nelly Salas",
                title: "General Partner",
                bio: "CFO of VC funds across Mexico, U.S., and LatAm. MBA from EGADE Business School. Startup investor & podcast host.",
              },
              {
                initials: "GG",
                name: "Guillermo Guzm\u00E1n",
                title: "General Partner",
                bio: "75+ startups launched. 470+ mentor network across LatAm. Former GP at Indio VC. Founder Institute leader.",
                photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663054812106/YHiBMddYAwezYQsv.jpeg",
              },
            ].map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.1}>
                <div>
                  {(member as any).photo ? (
                    <img
                      src={(member as any).photo}
                      alt={member.name}
                      className="w-[100px] h-[100px] rounded-full object-cover object-top mb-4 grayscale"
                    />
                  ) : (
                    <div className="w-[100px] h-[100px] rounded-full bg-[#0F172A] flex items-center justify-center mb-4">
                      <span
                        className="text-[26px] font-medium text-[#FAFAF9] tracking-[0.04em]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {member.initials}
                      </span>
                    </div>
                  )}
                  <h3
                    className="text-[24px] text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[13px] font-medium tracking-[0.06em] uppercase text-[#737373] mb-3"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {member.title}
                  </p>
                  <p
                    className="text-[16px] text-[#404040] leading-[1.7]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-[#0F172A]">
        <div className="container text-center">
          <SectionReveal>
            <h2
              className="text-[32px] sm:text-[42px] text-white mb-7"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Interested in learning more?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:investors@aidaventures.vc"
                className="inline-block text-[15px] font-medium tracking-[0.04em] px-8 py-3.5 bg-white text-[#0F172A] hover:bg-[#E5E5E5] transition-colors no-underline"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Request Materials
              </a>
              <a
                href="mailto:investors@aidaventures.vc?subject=Schedule a Call"
                className="inline-block text-[15px] font-medium tracking-[0.04em] px-8 py-3.5 border border-[#475569] text-[#CBD5E1] hover:border-white hover:text-white transition-colors no-underline"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Schedule a Call
              </a>
            </div>
            <p
              className="text-[15px] text-[#94A3B8] mt-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <a
                href="mailto:investors@aidaventures.vc"
                className="text-[#94A3B8] hover:text-white transition-colors no-underline"
              >
                investors@aidaventures.vc
              </a>
            </p>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}

/*
 * AIDA Ventures — Team Page
 * Design: "Led by Operators" — editorial, institutional.
 * All team photos: COLOR (no grayscale), larger circular crop, consistent treatment.
 * Click on photo/name opens expanded bio modal.
 * Font sizes: body 18px+, headlines 56-72px, section 32-40px, card titles 24-28px.
 * NO headquarters, NO emojis.
 */
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import TeamMemberModal, { type TeamMemberFull } from "@/components/TeamMemberModal";
import { Link } from "wouter";
import { useEffect, useState } from "react";

const team: TeamMemberFull[] = [
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

export default function Team() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedMember, setSelectedMember] = useState<TeamMemberFull | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-[140px] pb-[56px] lg:pt-[180px] lg:pb-[72px] bg-[#FAF9F6]">
        <div className="container">
          <SectionReveal>
            <p className="section-label mb-4">Team</p>
            <h1
              className="text-[36px] sm:text-[50px] lg:text-[60px] leading-[1.08] text-[#1A1A1A] max-w-[600px] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Led by Operators
            </h1>
            <p
              className="text-[20px] text-[#404040] max-w-[550px] leading-[1.7]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Decades of experience in banking, venture capital, and startup scaling.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-14 lg:py-16 bg-[#FAF9F6] border-t border-[#E5E5E5]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.12}>
                <div
                  className="flex flex-col cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Avatar — COLOR, larger, circular crop */}
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] rounded-full object-cover object-top mb-5 ring-2 ring-[#E5E5E5] group-hover:ring-[#14B8A6]/50 transition-all grayscale"
                    />
                  ) : (
                    <div className="w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] rounded-full bg-[#D4D4D4] flex items-center justify-center mb-5 ring-2 ring-[#E5E5E5] group-hover:ring-[#14B8A6]/50 transition-all">
                      <span
                        className="text-[38px] font-medium text-[#737373]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {member.initials}
                      </span>
                    </div>
                  )}

                  {/* Name & Title */}
                  <h2
                    className="text-[28px] text-[#1A1A1A] mb-1 group-hover:text-[#14B8A6] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {member.name}
                  </h2>
                  <p
                    className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#737373] mb-4"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {member.title}
                  </p>

                  {/* Short Bio */}
                  <p
                    className="text-[18px] text-[#404040] leading-[1.7]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {member.shortBio}
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
              className="text-[32px] sm:text-[40px] text-white max-w-[500px] mx-auto mb-7"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Want to work with us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/founders"
                className="inline-block text-[15px] font-medium tracking-[0.04em] px-8 py-3.5 bg-white text-[#0F172A] hover:bg-[#E5E5E5] transition-colors no-underline"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                I'm a Founder
              </Link>
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
      </section>

      {/* Team Member Modal */}
      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </Layout>
  );
}

/*
 * AIDA Ventures — Team Member Popup Modal
 * Horizontal layout: photo left (35%), text right (65%).
 * Wide modal (70-80% screen width on desktop).
 * Rectangular portrait photos, color, no grayscale.
 * Prose bios (paragraphs, not bullet points).
 * Dark overlay, X close button, LinkedIn link.
 */
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TeamMemberFull {
  initials: string;
  name: string;
  title: string;
  shortBio: string;
  fullTitle: string;
  bio: string[]; // prose paragraphs
  linkedin: string;
  photo?: string;
  // legacy fields kept for compat
  summary?: string;
  credentials?: string[];
  education?: string;
}

interface TeamMemberModalProps {
  member: TeamMemberFull | null;
  onClose: () => void;
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (member) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [member, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-sm" />

          {/* Modal — wide horizontal layout */}
          <motion.div
            className="relative bg-[#FAFAF9] w-full max-w-[960px] max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-[#737373] hover:text-[#1A1A1A] transition-colors z-10 bg-white/80 backdrop-blur-sm rounded-full"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* LEFT: Photo — 35% width on desktop, full width on mobile */}
            <div className="w-full lg:w-[38%] shrink-0">
              {member.photo ? (
                <div className="w-full h-[280px] lg:h-full lg:min-h-[480px] overflow-hidden bg-[#E5E5E5]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
              ) : (
                <div className="w-full h-[280px] lg:h-full lg:min-h-[480px] bg-[#D4D4D4] flex items-center justify-center">
                  <span
                    className="text-[80px] font-medium text-[#A3A3A3]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {member.initials}
                  </span>
                </div>
              )}
            </div>

            {/* RIGHT: Text content — 65% width on desktop */}
            <div className="w-full lg:w-[62%] overflow-y-auto p-7 lg:p-10">
              {/* Name */}
              <h2
                className="text-[28px] lg:text-[34px] text-[#1A1A1A] mb-1 leading-[1.15]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {member.name}
              </h2>

              {/* Title in teal */}
              <p
                className="text-[13px] lg:text-[14px] font-medium tracking-[0.06em] uppercase text-[#14B8A6] mb-6"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {member.fullTitle}
              </p>

              {/* Bio as prose paragraphs */}
              <div className="space-y-4 mb-8">
                {member.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[16px] lg:text-[17px] text-[#404040] leading-[1.75]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* LinkedIn link */}
              <div className="border-t border-[#E5E5E5] pt-5">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-medium tracking-[0.04em] text-[#0F172A] hover:text-[#14B8A6] transition-colors no-underline"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  LinkedIn
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

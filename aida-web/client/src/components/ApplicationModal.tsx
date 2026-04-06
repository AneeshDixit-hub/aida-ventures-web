/*
 * AIDA Ventures — Application Form Modal
 * Triggered by "Apply Now" / "Apply as Founder" buttons.
 * Embeds a Tally form for seamless, functional submissions.
 */
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & lock body scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Load Tally embed script when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const loadTally = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        const existingScript = document.querySelector(
          'script[src="https://tally.so/widgets/embed.js"]'
        );
        if (!existingScript) {
          const script = document.createElement("script");
          script.src = "https://tally.so/widgets/embed.js";
          script.onload = () => {
            if (typeof (window as any).Tally !== "undefined") {
              (window as any).Tally.loadEmbeds();
            }
          };
          script.onerror = () => {
            // Fallback: set src directly on iframes
            document
              .querySelectorAll("iframe[data-tally-src]:not([src])")
              .forEach((el) => {
                const iframe = el as HTMLIFrameElement;
                iframe.src = iframe.dataset.tallySrc || "";
              });
          };
          document.body.appendChild(script);
        } else {
          // Script already exists, just trigger load
          document
            .querySelectorAll("iframe[data-tally-src]:not([src])")
            .forEach((el) => {
              const iframe = el as HTMLIFrameElement;
              iframe.src = iframe.dataset.tallySrc || "";
            });
        }
      }
    };

    // Small delay to ensure the iframe is in the DOM
    const timer = setTimeout(loadTally, 100);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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

          {/* Modal */}
          <motion.div
            className="relative bg-[#FAFAF9] w-full max-w-[640px] max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[#737373] hover:text-[#1A1A1A] transition-colors z-10"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="p-8 lg:p-10">
              {/* Header */}
              <p
                className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#14B8A6] mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Apply for Funding
              </p>
              <h2
                className="text-[28px] lg:text-[32px] text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Tell us about your company
              </h2>

              {/* Tally Embed */}
              <div className="w-full -mx-2">
                <iframe
                  data-tally-src="https://tally.so/embed/rjKVGo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="799"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Apply for Funding"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

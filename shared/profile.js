/* ==========================================================================
   👤  WHO YOU ARE — shared by every version of the site
   ==========================================================================

   Edit this once. The landing page AND both views (pm/ and design/) read it,
   so your name, email and links always stay in sync.

   Everything each audience *sees differently* — role, tagline, case studies,
   resume — lives in that view's own data.js (pm/data.js and design/data.js).

   Same golden rule as always: only change the text between the "quotes",
   keep every comma and bracket. If a page goes blank, undo (Ctrl/Cmd+Z).
   ========================================================================== */

const PROFILE = {
  name: "Alex Morgan",              // Your full name (big headline)
  firstName: "Alex",                // Short name (used in the top bar)

  email: "hello@alexmorgan.design", // Your real email — all contact buttons use this

  location: "Bengaluru, India",     // Shown under your photo
  timezone: "Asia/Kolkata",         // For the live clock tile.
                                    // Examples: "Asia/Kolkata", "Europe/London",
                                    // "America/New_York", "Asia/Dubai"

  // Links shown in the "Find me" tile and the footer — on BOTH views.
  // Want different links per audience? Add a  socials: [ ... ]  list inside
  // that view's data.js instead — a view's data.js always wins over this file.
  socials: [
    { label: "LinkedIn",  url: "https://linkedin.com/in/yourname" },
    { label: "Dribbble",  url: "https://dribbble.com/yourname" },
    { label: "Instagram", url: "https://instagram.com/yourname" },
    { label: "GitHub",    url: "https://github.com/yourname" },
  ],
};

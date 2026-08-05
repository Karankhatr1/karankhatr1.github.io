/* ==========================================================================
   ✏️  PM VIEW — what Product Manager audiences see
   ==========================================================================

   People you send the  /pm/  link to see ONLY this file's content.
   Your name, email, location and social links come from  shared/profile.js
   (edit those once, there). Everything below is PM-specific.

   Want to override something from the shared profile just for this view
   (e.g. a different socials list)? Add it here — this file wins.

   Golden rule: only change text between "quotes"; keep every comma and
   bracket. Blank page after an edit = a missing comma. Undo and retry.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1) HOW YOU INTRODUCE YOURSELF TO PM AUDIENCES
   -------------------------------------------------------------------------- */

const VIEW = {
  role: "Product Manager",
  tagline:
    "I turn fuzzy problems into shipped outcomes — pairing sharp discovery with pragmatic delivery, and measuring what actually matters.",

  availability: "Open to PM roles",  // Little green status chip

  avatar: "images/avatar.svg",       // Photo for THIS view → put it in pm/images/
  resume: "",                        // Link to your PM resume PDF, or leave ""

  about:
    "Six years shipping products across fintech, education and developer tools — running discovery, shaping roadmaps, and launching with small, senior teams. I care about crisp problem statements, honest metrics, and momentum.",

  // Big numbers on the homepage (keep them short!)
  stats: [
    { number: "24",   label: "Launches shipped" },
    { number: "9",    label: "Teams partnered with" },
    { number: "3.2×", label: "Best retention win" },
  ],

  // These scroll across the moving ticker strip
  skills: [
    "Product Strategy", "Discovery", "Roadmapping", "Experimentation",
    "Analytics", "Stakeholder Alignment", "Go-to-market", "Agile Delivery",
  ],

  // The big sign-off in the blue contact tile
  contactHeadline: "Let’s build the right thing.",
  contactLine: "Hiring a product manager, or want to talk strategy, metrics or roadmaps? My inbox is always open.",
};


/* --------------------------------------------------------------------------
   2) CASE STUDIES FOR THIS VIEW
   --------------------------------------------------------------------------
   Same building blocks as always — text / image / stats / quote sections.
   Images for this view live in  pm/images/...
   ➕ To add a project: copy one whole { ... }, block, paste it above the
      closing ]; and change the details.
   -------------------------------------------------------------------------- */

const CASE_STUDIES = [

  /* ----- Project 1 ------------------------------------------------------ */
  {
    id: "payflow",
    title: "Payflow — from waitlist to product-market signal",
    subtitle: "Owning discovery, scope and launch for an invoicing app that helped freelancers get paid twice as fast.",
    cover: "images/payflow/cover.svg",
    tags: ["Mobile app", "Fintech", "0→1 launch", "2026"],
    color: "blue",
    size: "large",

    meta: [
      { label: "Role",       value: "Product Manager" },
      { label: "Timeline",   value: "Jan – May 2026" },
      { label: "Team",       value: "2 designers, 6 engineers" },
      { label: "North star", value: "Time to first invoice" },
    ],

    sections: [
      {
        type: "text",
        heading: "The opportunity",
        body:
          "Freelancers were churning off adjacent tools for one reason: invoicing lived in a mess of email threads, spreadsheets and screenshots, and payments arrived late. The market signal was loud but unserved — competitors optimised for accountants, not for the person doing the work.\n\nI framed the bet in one sentence the whole team could repeat: anyone should be able to create and send a professional invoice in under sixty seconds, with follow-ups the product sends so they don’t have to.",
      },
      {
        type: "image",
        src: "images/payflow/shot-1.svg",
        caption: "Twelve discovery interviews distilled into three jobs-to-be-done on one wall.",
      },
      {
        type: "text",
        heading: "Ruthless scoping",
        body:
          "The v1 cut list mattered as much as the build list. Recurring billing, tax handling and multi-currency all moved out of scope so the sixty-second promise could hold — each “no” written down with the evidence behind it, so stakeholders argued with data instead of me.\n\nWe instrumented the funnel from day one and reviewed a single dashboard every Monday: activation, time-to-first-invoice, and days-to-paid. When a number stalled, the roadmap changed that week, not next quarter.",
      },
      {
        type: "stats",
        items: [
          { number: "+38%", label: "More invoices sent" },
          { number: "2.1×", label: "Faster payment time" },
          { number: "62%",  label: "Waitlist activation" },
        ],
      },
      {
        type: "quote",
        body: "For the first time our roadmap said no clearly enough that yes actually shipped.",
        by: "Founder & CEO",
      },
      {
        type: "text",
        heading: "Outcome & learning",
        body:
          "We launched to a 5,000-person waitlist in May and converted 62% to active use in the first month. The feature everyone feared would feel rude — automated overdue follow-ups — became the most-praised part of the product in reviews.\n\nThe lasting lesson: defaults are product strategy. The moment follow-ups were on by default, the awkward behaviour became the normal one.",
      },
    ],
  },

  /* ----- Project 2 ------------------------------------------------------ */
  {
    id: "bloom",
    title: "Bloom — the retention turnaround",
    subtitle: "Taking course completion from 9% to 29% by rebuilding the product around one honest metric.",
    cover: "images/bloom/cover.svg",
    tags: ["Web platform", "EdTech", "Growth", "2025"],
    color: "green",
    size: "normal",

    meta: [
      { label: "Role",       value: "Product Manager" },
      { label: "Timeline",   value: "Aug – Dec 2025" },
      { label: "Team",       value: "2 designers, 5 engineers" },
      { label: "Key metric", value: "4-week completion" },
    ],

    sections: [
      {
        type: "text",
        heading: "The problem",
        body:
          "Completion was stuck at 9%, and the roadmap was a pile of feature requests with no theory of the case. Funnel analysis showed the real cliff: learners who started a lesson within 24 hours of signup completed at five times the rate of those who didn’t — and the dashboard was actively getting in their way.",
      },
      {
        type: "image",
        src: "images/bloom/shot-1.svg",
        caption: "The winning experiment: replace the dashboard with one question — “Got 15 minutes?”",
      },
      {
        type: "text",
        heading: "What we shipped",
        body:
          "I ranked the backlog against the 24-hour insight and ran it as an experiment programme, not a redesign: one-question home screen, forgiving streaks, and quiet celebrations. Each bet shipped behind a flag with a pre-registered success metric.\n\nTwo of five experiments won big, two were neutral, one we rolled back within a week — and saying so openly bought the programme more trust than any of the wins.",
      },
      {
        type: "stats",
        items: [
          { number: "3.2×", label: "Course completion" },
          { number: "+41%", label: "Weekly active learners" },
        ],
      },
    ],
  },

  /* ----- Project 3 ------------------------------------------------------ */
  {
    id: "atlas",
    title: "Atlas — a platform bet across nine teams",
    subtitle: "Making the business case for a shared design system, then driving its adoption like a product.",
    cover: "images/atlas/cover.svg",
    tags: ["Internal platform", "B2B", "2025"],
    color: "yellow",
    size: "normal",

    meta: [
      { label: "Role",     value: "Platform PM" },
      { label: "Timeline", value: "2025, ongoing" },
      { label: "Scope",    value: "9 product teams" },
      { label: "Key metric", value: "System adoption" },
    ],

    sections: [
      {
        type: "text",
        heading: "The problem",
        body:
          "Nine teams, nine shades of blue, four different buttons — and every handoff a negotiation. I quantified the waste first: design-to-dev handoff was eating roughly a fifth of every sprint. That number, not aesthetics, is what unlocked funding for a platform team.",
      },
      {
        type: "image",
        src: "images/atlas/shot-1.svg",
        caption: "The adoption scoreboard — migration progress per team, published to everyone.",
      },
      {
        type: "text",
        heading: "Driving adoption",
        body:
          "Internal platforms fail on adoption, not build quality, so I ran Atlas like a product with customers. A public migration scoreboard, weekly office hours, and a rule that the platform team fixes blockers within 48 hours turned mandated tooling into something teams asked to join.\n\nExec updates led with the same two numbers every month — adoption and handoff time — so the investment case renewed itself.",
      },
      {
        type: "stats",
        items: [
          { number: "92%",  label: "Screens on system components" },
          { number: "−60%", label: "Design-to-dev handoff time" },
        ],
      },
      {
        type: "quote",
        body: "Atlas is the first internal platform our teams actually lobby to be migrated onto.",
        by: "Director of Engineering",
      },
    ],
  },

  /* ➕ Paste new projects above this line, and keep this bracket: */
];

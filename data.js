/* ==========================================================================
   ✏️  YOUR PORTFOLIO DATA — THIS IS THE ONLY FILE YOU NEED TO EDIT
   ==========================================================================

   HOW IT WORKS
   • Everything between quotes "like this" is text you can change.
   • Keep the commas and brackets exactly as they are — they hold the
     structure together. If the site ever goes blank after an edit, you
     probably deleted a comma or a quote. Undo and try again.
   • Images: drop your pictures into the  images/  folder, then point to
     them here, e.g.  "images/myproject/cover.jpg"
     (jpg, png, webp, gif and svg all work)

   TIP: edit this file directly on GitHub — open it, click the ✏️ pencil,
   make your change, press "Commit changes". Your site updates in ~1 min.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1) ABOUT YOU
   -------------------------------------------------------------------------- */

const SITE = {
  name: "Alex Morgan",              // Your full name (big headline)
  firstName: "Alex",                // Short name (used in the top bar)
  role: "Product Designer",         // What you do
  tagline:
    "I design calm, useful products — turning messy problems into simple, friendly software that people actually enjoy using.",

  location: "Bengaluru, India",     // Shown under your photo
  timezone: "Asia/Kolkata",         // For the live clock tile.
                                    // Examples: "Asia/Kolkata", "Europe/London",
                                    // "America/New_York", "Asia/Dubai"

  availability: "Open to work",     // Little green status chip. Try:
                                    // "Open to freelance" / "Booked until Oct"

  email: "hello@alexmorgan.design", // Your real email — the contact buttons use this
  resume: "",                       // Optional: link to your resume PDF, or leave ""

  avatar: "images/avatar.svg",      // Your photo → replace with e.g. "images/me.jpg"

  about:
    "Six years of designing mobile and web products across fintech, education and developer tools. I care about clarity, motion that means something, and shipping — not just decks.",

  // Big numbers on the homepage (keep them short!)
  stats: [
    { number: "6+",  label: "Years of experience" },
    { number: "24",  label: "Products shipped" },
    { number: "11",  label: "Happy teams & clients" },
  ],

  // These scroll across the moving ticker strip
  skills: [
    "Product Design", "Design Systems", "Prototyping", "User Research",
    "Interaction Design", "Figma", "Motion Design", "Accessibility",
  ],

  // Links shown in the "Find me" tile and the footer
  socials: [
    { label: "LinkedIn",  url: "https://linkedin.com/in/yourname" },
    { label: "Dribbble",  url: "https://dribbble.com/yourname" },
    { label: "Instagram", url: "https://instagram.com/yourname" },
    { label: "GitHub",    url: "https://github.com/yourname" },
  ],

  // The big sign-off line in the blue contact tile
  contactHeadline: "Let’s make something great.",
  contactLine: "Have a project, a role, or just an idea you want to talk through? My inbox is always open.",
};


/* --------------------------------------------------------------------------
   2) YOUR CASE STUDIES
   --------------------------------------------------------------------------
   Each case study is one { ... } block in the list below.
   The order here = the order on your homepage.

   For each project you can set:
     id        →  short-name-with-dashes (becomes the page link, must be unique)
     title     →  project name
     subtitle  →  one-line description shown on the card
     cover     →  the card image, e.g. "images/myproject/cover.jpg"
     tags      →  a few short labels, e.g. ["Mobile app", "2026"]
     color     →  card colour: "blue", "green", "yellow" or "red"
     size      →  "large" (full-width card) or "normal" (half-width card)
     meta      →  the facts row on the project page (role, timeline, etc.)
     sections  →  the story itself — mix and match these building blocks:

        { type: "text",  heading: "The problem", body: "Your words..." }
        { type: "image", src: "images/myproject/photo.jpg", caption: "Optional caption" }
        { type: "stats", items: [ { number: "+38%", label: "More sign-ups" } ] }
        { type: "quote", body: "Something nice someone said.", by: "Who said it" }

     Use a blank line inside "body" text?  Write \n\n where you want a
     paragraph break. Add as many sections as you like, in any order.

   ➕ TO ADD A NEW PROJECT: copy one whole block from  {  to  },  paste it
      above the closing  ];  and change the details. That’s it.
   -------------------------------------------------------------------------- */

const CASE_STUDIES = [

  /* ----- Project 1 ------------------------------------------------------ */
  {
    id: "payflow",
    title: "Payflow — invoicing that runs itself",
    subtitle: "A mobile app that helps freelancers send invoices in under a minute and get paid twice as fast.",
    cover: "images/payflow/cover.svg",
    tags: ["Mobile app", "Fintech", "2026"],
    color: "blue",
    size: "large",

    meta: [
      { label: "Role",     value: "Lead Product Designer" },
      { label: "Timeline", value: "Jan – May 2026" },
      { label: "Platform", value: "iOS & Android" },
      { label: "Tools",    value: "Figma, Protopie" },
    ],

    sections: [
      {
        type: "text",
        heading: "The problem",
        body:
          "Freelancers told us the same story again and again: invoicing lives in a mess of email threads, spreadsheets and screenshots. Payments arrive late, follow-ups feel awkward, and nobody knows what they’re actually owed.\n\nOur goal was blunt and measurable — let anyone create and send a professional invoice in under sixty seconds, and make chasing payments feel automatic instead of uncomfortable.",
      },
      {
        type: "image",
        src: "images/payflow/shot-1.svg",
        caption: "Early explorations of the one-tap invoice flow.",
      },
      {
        type: "text",
        heading: "The approach",
        body:
          "I interviewed twelve freelancers and shadowed three through a full billing cycle. Three principles fell out of that research: speed over settings, money you can see, and follow-ups the app sends so you don’t have to.\n\nThe home screen became a simple timeline of money in motion — what’s drafted, what’s sent, what’s overdue — with one primary action always within thumb’s reach.",
      },
      {
        type: "stats",
        items: [
          { number: "+38%", label: "More invoices sent" },
          { number: "2.1×", label: "Faster payment time" },
          { number: "4.8★", label: "App Store rating" },
        ],
      },
      {
        type: "image",
        src: "images/payflow/shot-2.svg",
        caption: "The final home screen and payment timeline.",
      },
      {
        type: "quote",
        body: "Payflow turned my most dreaded admin task into a thirty-second habit.",
        by: "Beta user, month two",
      },
      {
        type: "text",
        heading: "The outcome",
        body:
          "We launched to 5,000 wait-listed users in May. Beyond the numbers, the most telling signal was behavioural: overdue follow-ups — the feature people feared would feel rude — became the most-loved part of the product in reviews.",
      },
    ],
  },

  /* ----- Project 2 ------------------------------------------------------ */
  {
    id: "bloom",
    title: "Bloom — a calmer way to learn",
    subtitle: "Redesigning an online learning platform around focus, streaks and small wins.",
    cover: "images/bloom/cover.svg",
    tags: ["Web platform", "EdTech", "2025"],
    color: "green",
    size: "normal",

    meta: [
      { label: "Role",     value: "Product Designer" },
      { label: "Timeline", value: "Aug – Dec 2025" },
      { label: "Platform", value: "Responsive web" },
      { label: "Team",     value: "2 designers, 5 engineers" },
    ],

    sections: [
      {
        type: "text",
        heading: "The problem",
        body:
          "Bloom’s completion rate was stuck at 9%. Learners loved the content but drowned in it — endless course grids, no sense of progress, and a dashboard that felt like homework before the homework.",
      },
      {
        type: "image",
        src: "images/bloom/shot-1.svg",
        caption: "The new focus view: one lesson, one goal, one gentle streak.",
      },
      {
        type: "text",
        heading: "What changed",
        body:
          "We replaced the dashboard with a single question — “Got 15 minutes?” — and rebuilt progress around tiny, visible wins. Streaks forgive a missed day. Celebrations are quiet. Nothing shames you for being busy.\n\nThe design system leaned on soft tonal surfaces and one confident green, so the interface itself felt like a deep breath.",
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
    title: "Atlas — one design system, nine products",
    subtitle: "Building the token system and component library that let nine product teams ship with one voice.",
    cover: "images/atlas/cover.svg",
    tags: ["Design system", "B2B", "2025"],
    color: "yellow",
    size: "normal",

    meta: [
      { label: "Role",     value: "Design Systems Lead" },
      { label: "Timeline", value: "2025, ongoing" },
      { label: "Scope",    value: "9 product teams" },
      { label: "Tools",    value: "Figma, Storybook" },
    ],

    sections: [
      {
        type: "text",
        heading: "The problem",
        body:
          "Nine teams, nine shades of blue, four different buttons. Every redesign started from zero, and every handoff was a negotiation. Atlas set out to make the consistent thing the easy thing.",
      },
      {
        type: "image",
        src: "images/atlas/shot-1.svg",
        caption: "Colour, type and spacing tokens — the shared language under every screen.",
      },
      {
        type: "text",
        heading: "What we built",
        body:
          "A three-layer token architecture (primitive → semantic → component), 48 documented components, and a weekly office hour that quietly did more for adoption than any of the tooling.\n\nEverything ships with usage guidance written for humans — when to use it, when not to, and what to do instead.",
      },
      {
        type: "stats",
        items: [
          { number: "92%", label: "Screens on system components" },
          { number: "−60%", label: "Design-to-dev handoff time" },
        ],
      },
      {
        type: "quote",
        body: "Atlas is the first design system our engineers actually defend in code review.",
        by: "Staff engineer, Platform team",
      },
    ],
  },

  /* ➕ Paste new projects above this line, and keep this bracket: */
];

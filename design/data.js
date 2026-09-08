/* ==========================================================================
   ✏️  DESIGN LEAD VIEW — what Product Design Lead audiences see
   ==========================================================================

   People you send the  /design/  link to see ONLY this file's content.
   Your name, email, location and social links come from  shared/profile.js
   (edit those once, there). Everything below is design-lead-specific.

   Want to override something from the shared profile just for this view
   (e.g. a different socials list)? Add it here — this file wins.

   Golden rule: only change text between "quotes"; keep every comma and
   bracket. Blank page after an edit = a missing comma. Undo and retry.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1) HOW YOU INTRODUCE YOURSELF TO DESIGN AUDIENCES
   -------------------------------------------------------------------------- */

const VIEW = {
  role: "Product Design Lead",
  tagline:
    "I lead design work that ships; turning messy problems into structured, useful software, and raising the craft bar without slowing the team down.",

  availability: "Open to lead roles",  // Little green status chip

  avatar: "images/img.png",         // Photo for THIS view → put it in design/images/
  resume: "https://drive.google.com/file/d/1EVtiUI4p65P42-YcSVloRJSLjIAPhTC3/view?usp=drive_link",

  about:
    "Six years designing and leading design across AI Native, Enterprise and Developer Tools. I care about clarity, motion that means something, systems that scale and Taste",

  // Big numbers on the homepage (keep them short!)
  stats: [
    { number: "~5", label: "Years of experience" },
    { number: "20+", label: "Features shipped" },
    { number: "7+",  label: "Designers Led" },
  ],

  // These scroll across the moving ticker strip
  skills: [
    "Design Leadership", "Design Systems", "Prototyping", "User Research",
    "Interaction Design", "Craft Reviews", "Motion Design", "Accessibility",
  ],

  // The big sign-off in the blue contact tile
  contactHeadline: "Let’s make something great.",
  contactLine: "Hiring a design lead, or want to talk craft, systems or teams? My inbox is always open.",
};


/* --------------------------------------------------------------------------
   2) CASE STUDIES FOR THIS VIEW
   --------------------------------------------------------------------------
   Same building blocks as always — text / image / stats / quote sections.
   Images for this view live in  design/images/...
   ➕ To add a project: copy one whole { ... }, block, paste it above the
      closing ]; and change the details.
   -------------------------------------------------------------------------- */

const CASE_STUDIES = [

  /* ----- Project 1 ------------------------------------------------------ */
  {
    id: "atlas",
    title: "New Reports Designs",
    subtitle: "Building the New Reports Across Web and Mobile, Feature Gating, Partner Designs, Marketing Pages Throughout the Product.",
    cover: "images/atlas/NRD.png",
    tags: ["AI Native", "Leadership", "D2C", "Marketing"],
    color: "blue",
    size: "normal",

    meta: [
      { label: "Role",     value: "Product Manager (UI/UX)" },
      { label: "Timeline", value: "2026, ongoing" },
      { label: "Scope",    value: "Overall Feature Overhaul" },
      { label: "Tools",    value: "Figma, Storybook, VSCode, Lovable, Claude" },
    ],

    sections: [
      {
        type: "text",
        heading: "The problem",
        body:
          "The Analysis output was a PDF file, this was hard to access across mobile and smaller screens, did not intergrate with the brand or the product and caused user dropf ",
      },
      {
        type: "image",
        src: "images/atlas/Older Reports.png",
        caption: "Older PDF Versions Didnt look appealing, on brand or work for mobile Views",
      },
      {
        type: "image",
        src: "images/atlas/main.png",
        caption: "Created Multiple Versions for the Report Header Personalizing it, the top version was approved for the in-app experiencec",
      },
      {
        type: "image",
        src: "images/atlas/Advanced Metrics.png",
        caption: "Rather than Boring Text, Designed more intuitive Experiences alltogethes",
      },
      {
        type: "image",
        src: "images/atlas/CCM.png",
        caption: "Redesigned Sections to match Sport type and Event Partner Branding",
      },
      {
        type: "image",
        src: "images/atlas/Stanford Section.png",
        caption: "Redesigned Sections to match Sport type and Event Partner Branding",
      },
      {
        type: "image",
        src: "images/atlas/JSON.png",
        caption: "Performed QA, Wrote Requirements, Accounted for Malformed data, partnering with AI/ML Teams",
      },
      {
        type: "image",
        src: "images/atlas/gating.png",
        caption: "Prepared PRDs, planned gating and designed the experiences to support business needs",
      },     
      {
        type: "image",
        src: "images/atlas/ReccomendedDrills Unlocked.png",
        caption: "Unlocked Sections",
      }, 
      {
        type: "image",
        src: "images/atlas/Phenom Profile.png",
        caption: "Partner Events Used the Original Suggestions for Personalization",
      },
      {
        type: "image",
        src: "images/atlas/Stanford Profile.png",
        caption: "Partner Events Used the Original Suggestions for Personalization",
      },
      {
        type: "image",
        src: "images/atlas/marketingpageform.png",
        caption: "Made Performance Marketing Focused pages for the Event Partnerships",
      }, 
      {
        type: "image",
        src: "images/atlas/marketingpagepricing.png",
        caption: "Made Performance Marketing Focused pages for the Event Partnerships",
      }, 
      {
        type: "image",
        src: "images/atlas/marketingpagefaq.png",
        caption: "Made Performance Marketing Focused pages for the Event Partnerships",
      }, 
      {
        type: "image",
        src: "images/atlas/marketingpagesteps.png",
        caption: "Made Performance Marketing Focused pages for the Event Partnerships",
      }, 
      {
        type: "image",
        src: "images/atlas/marketingpagefooter.png",
        caption: "Made Performance Marketing Focused pages for the Event Partnerships",
      }, 
      {
        type: "stats",
        items: [
          { number: "92%",  label: "New Report Adoption Rate at Event Partnerships" },
          { number: "−60%", label: "Reduction in Enhancements post dev" },
        ],
      },
      {
        type: "quote",
        body: "These Reports are a fresh look to show NTIS, Phenom, CCM, Stanford etc.",
        by: "C Suite Feedback",
      },
    ],
  },

 /* ----- Project 3 ------------------------------------------------------ */
  {
    id: "payflow",
    title: "B2B & Analytics Dashboard",
    subtitle: "Entire end to end, B2B and Analytics Dashboard",
    cover: "images/payflow/cover.svg",
    tags: ["Mobile app", "Fintech", "2026"],
    color: "blue",
    size: "normal",

    meta: [
      { label: "Role",     value: "Lead Product Designer" },
      { label: "Timeline", value: "Apr – Sept 2026" },
      { label: "Platform", value: "Web, iOS, Android" },
      { label: "Tools",    value: "Figma, Protopie, Claude, Lovable" },
    ],

    sections: [
      {
        type: "text",
        heading: "The problem",
        body:
          "We had to solve the B2B Enterpirse side scope of the product.",
      },
      {
        type: "image",
        src: "images/payflow/Frame 2147228507.png",
        caption: "Enterprise Ingestion flow and its various entry points",
      },
      {
        type: "image",
        src: "images/payflow/Frame 2147228511(1).png",
        caption: "Player Analytics Dashboard and Detail Views",
      },
      {
        type: "image",
        src: "images/payflow/Frame 2147228508(1).png",
        caption: "Allocation and Management Screens for tracking across enterprise",
      },
      {
        type: "image",
        src: "images/payflow/0b9052f0-693a-48fc-96da-7621657b189d.png",
        caption: "User Management Screens from the Admin view",
      },
      {
        type: "image",
        src: "images/payflow/ChatGPT Image Aug 27, 2026, 04_46_39 AM.png",
        caption: "Detailed Roles and Mulitple Orgs available in the complex flow",
      },
      {
        type: "image",
        src: "images/payflow/FireShot Capture 002 - Lovable App - runiq-org-nexus.lovable.app.png",
        caption: "New Tiered Pricing including the Enterprise level plans",
      },
      {
        type: "quote",
        body: "this dashboard will make keeping track of stats long term way easier",
        by: "Coach Brendan, Beta User",
      },
    ],
  },
   
  /* ----- Project 2 ------------------------------------------------------ */
  {
    id: "payflow",
    title: "Payflow — invoicing that runs itself",
    subtitle: "Leading design for a mobile app that helps freelancers send invoices in under a minute and get paid twice as fast.",
    cover: "images/payflow/cover.svg",
    tags: ["Mobile app", "Fintech", "2026"],
    color: "green",
    size: "normal",

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
          "I interviewed twelve freelancers and shadowed three through a full billing cycle. Three principles fell out of that research: speed over settings, money you can see, and follow-ups the app sends so you don’t have to.\n\nThe home screen became a simple timeline of money in motion — what’s drafted, what’s sent, what’s overdue — with one primary action always within thumb’s reach. I ran weekly crit with the second designer on the team, using the principles as the rubric so feedback stayed about the work.",
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

  /* ➕ Paste new projects above this line, and keep this bracket: */
];

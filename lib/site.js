/**
 * Content for the Genuss Renovation site.
 *
 * Contact details, testimonials, the process steps and the FAQ list are taken
 * from genussrenovation.ca. Photography is the same Pexels library their
 * current site uses.
 */

export const site = {
  name: "Genuss Renovation",
  legal: "Genuss Renovation Ltd.",
  tagline: "Building your dreams, one renovation at a time",
  positioning:
    "Your trusted renovation and construction partner in Surrey and the Lower Mainland of British Columbia.",
  phone: "778-981-5551",
  phoneHref: "tel:+17789815551",
  email: "genussrenovation@gmail.com",
  address: {
    street: "11622 98A Ave",
    city: "Surrey",
    region: "BC",
    postal: "V3W 5V6",
    country: "CA",
  },
  instagram: "https://www.instagram.com/genuss_renovations/",
  hours: [
    ["Monday – Friday", "8:00 AM – 6:00 PM"],
    ["Saturday", "By appointment"],
    ["Sunday", "Closed"],
  ],
  hoursShort: "Mon – Fri, 8AM – 6PM · Sat by appointment",
  serviceAreas: [
    "Surrey",
    "Vancouver",
    "Burnaby",
    "Langley",
    "White Rock",
    "Coquitlam",
    "Richmond",
    "Delta",
  ],
  stats: [
    { value: "7+", label: "Years building in BC" },
    { value: "A+", label: "BBB rated" },
    { value: "100%", label: "Licensed & insured" },
    { value: "8+", label: "Lower Mainland cities served" },
  ],
};

export const services = [
  {
    slug: "flooring-tiling",
    eyebrow: "Craft division",
    title: "Flooring, Tiling & Finishing",
    short:
      "Vinyl plank, hardwood, porcelain, large-format and natural stone — set dead flat, laid dead straight, grouted to a line you could draw with a ruler.",
    hero:
      "The floor is the first thing a room tells you. We make sure it says the right thing.",
    intro:
      "Flooring and tile are where a renovation is judged. A cabinet door can be adjusted; a badly set floor has to come out. Genuss installs a wide range of flooring — vinyl plank, tile and other hard surfaces for residential and commercial properties — and runs it as its own division, with laser-levelled substrate prep and a finishing crew that carries the same standard through baseboard, casing, trim and paint.",
    image: "/img/4263067.webp",
    imageAlt:
      "Installer fitting engineered hardwood plank flooring over underlay",
    accent: "brass",
    bullets: [
      "Vinyl plank, hardwood & engineered flooring",
      "Porcelain, ceramic & large-format tile",
      "Bathroom renovations & full wet-room builds",
      "Basement renovations & suite conversions",
      "Kitchen remodels & backsplash tile",
      "Natural stone, marble & quartz surrounds",
      "Heated floor systems & waterproof membranes",
      "Self-levelling & substrate correction",
      "Baseboard, casing, crown & finish carpentry",
    ],
    detail: [
      {
        h: "Substrate first, always",
        p: "Every install starts with moisture testing and a laser check of the slab or subfloor. Where it's out, we level it — self-levelling compound, shimming or sistering — before a single plank or tile is set. It's the step that gets skipped most often and the one that causes almost every callback.",
      },
      {
        h: "Waterproofing you can't see",
        p: "Wet areas get a full uncoupling and waterproof membrane system, pre-sloped shower pans and bonded flange assemblies. We build the parts nobody will ever photograph as carefully as the parts they will.",
      },
      {
        h: "Layout is a decision, not an accident",
        p: "We dry-lay and set centrelines before committing so cuts land where they should — full tiles at sightlines, balanced cuts at the walls, grout lines that run through a doorway instead of stopping at it.",
      },
      {
        h: "Finishing that holds the standard",
        p: "Mitred returns, scribed baseboard on out-of-square walls, caulk lines that stay straight, and paint cut clean. The finish carpentry crew works to the same tolerance as the tile crew.",
      },
    ],
    faq: [
      {
        q: "Can you tile over my existing floor?",
        a: "Sometimes — it depends on height, substrate condition and deflection. We'll test rather than guess, and we'll tell you honestly if the right answer is to take it out.",
      },
      {
        q: "How long does a typical bathroom tile job take?",
        a: "A standard full bathroom is usually 2–3 weeks door to door, with tile and waterproofing occupying roughly a week of that. Large-format and stone add time for layout and cutting.",
      },
    ],
  },
  {
    slug: "custom-homes",
    eyebrow: "Signature division",
    title: "High-End Custom Homes",
    short:
      "Ground-up custom builds and whole-home transformations for clients who care about the millimetre — managed end to end, with one point of contact.",
    hero:
      "A custom home is a two-year conversation. We're built to be good company.",
    intro:
      "High-end work is less about expensive materials than about control: of the schedule, of the trades, of the thousand small decisions that either compound into something extraordinary or quietly erode it. Genuss runs custom projects with a single project lead, a live schedule, documented selections and weekly reporting — so the house that gets built is the house that was drawn.",
    image: "/img/19889120.webp",
    imageAlt:
      "High-end kitchen with island, woven pendant lighting and glazed rear wall",
    accent: "brass",
    bullets: [
      "New custom home construction",
      "Whole-home gut renovation & reconfiguration",
      "Additions, second storeys & structural changes",
      "Architect, designer & engineer coordination",
      "Permit management & municipal liaison",
      "Millwork, feature stairs & architectural detailing",
    ],
    detail: [
      {
        h: "One lead, start to finish",
        p: "The person who walks your site in week one is the person who hands you the keys. No handoffs between a salesperson, an estimator and a foreman who've never spoken to each other.",
      },
      {
        h: "Selections locked before demo",
        p: "Tile, plumbing, lighting, hardware and millwork are specified and approved on a written schedule before we open a wall. Late selections are the single biggest driver of delay and change orders — we design that risk out.",
      },
      {
        h: "Real numbers, not placeholder numbers",
        p: "Allowances get abused in this industry. We price to actual specified product wherever possible and flag the line items that genuinely can't be fixed until something is opened up.",
      },
      {
        h: "Trade sequencing that holds",
        p: "Site coordination, scheduling and trade sequencing are the core of what we do. Every trade arrives to a site that is ready for them, which is the only way a long build stays on its dates.",
      },
    ],
    faq: [
      {
        q: "Do you work with our architect and designer?",
        a: "Yes, and we prefer to be involved early. Bringing a builder in during design catches constructability and budget issues while they're still cheap to fix — on paper.",
      },
      {
        q: "What's a realistic timeline for a custom home?",
        a: "In the Lower Mainland, expect 14–24 months from permit to occupancy depending on municipality, size and complexity. We'll give you a schedule with real float in it, not a best-case fantasy.",
      },
    ],
  },
  {
    slug: "commercial",
    eyebrow: "Commercial division",
    title: "Commercial Renovation & Tenant Improvement",
    short:
      "Tenant improvements, commercial fit-outs and restoration subcontracting — sequenced around your trading hours, your landlord's rules and your opening date.",
    hero:
      "Every day your space is closed costs you money. We build like we know that.",
    intro:
      "Commercial work is a different discipline from residential: base-building constraints, landlord work letters, after-hours access and an inspection path that can stall an opening for weeks. Genuss delivers tenant improvements for residential and light commercial properties with minimal disruption and maximum value, and works as a restoration subcontractor for insurance and remediation companies — flooring and finishing reinstatement after water damage.",
    image: "/img/1170412.webp",
    imageAlt:
      "Open-plan commercial office fit-out with exposed ceiling and polished floor",
    accent: "teal",
    bullets: [
      "Tenant improvements & commercial fit-outs",
      "Retail, office, clinic & hospitality build-outs",
      "Occupied-premises & after-hours scheduling",
      "Multi-unit & strata common-area renovation",
      "Restoration subcontracting for insurance & remediation firms",
      "Water-damage flooring & finishing reinstatement",
      "Working under general contractors",
    ],
    detail: [
      {
        h: "Phased around your operations",
        p: "Night work, weekend work, hoarding and dust containment, temporary access routes — we sequence so you keep trading wherever it's possible to keep trading.",
      },
      {
        h: "A reliable subtrade for GCs",
        p: "We value long-term relationships with general contractors and restoration companies, and we know what they actually need: reliability and consistency. We show up when we said, staffed at the number we said, with our own supervision.",
      },
      {
        h: "Restoration reinstatement",
        p: "After the remediation crew leaves, someone has to put the building back. We specialize in flooring and finishing reinstatement for insurance and restoration companies, matching existing finishes and working to claim timelines.",
      },
      {
        h: "Inspection path managed",
        p: "Building, electrical, plumbing and fire inspections are booked into the schedule from day one, not chased at the end. Occupancy is a deadline, not a hope.",
      },
    ],
    faq: [
      {
        q: "Can you work after hours so we stay open?",
        a: "Yes. A large share of our commercial work is evenings and weekends in occupied premises, with full containment and a clean, trading-ready space each morning.",
      },
      {
        q: "Do you take work as a subcontractor?",
        a: "Regularly. We work under general contractors and for restoration and insurance companies, and those long-term relationships are some of the work we value most.",
      },
    ],
  },
  {
    slug: "accessibility",
    eyebrow: "Accessibility division",
    title: "Accessibility & Home Modification",
    short:
      "Barrier-free bathrooms, ramps, widened doorways and zero-threshold entries — including WorkSafeBC-funded modifications for injured workers.",
    hero:
      "Independence at home is an engineering problem. It's one we know how to solve.",
    intro:
      "When mobility changes — through age, injury or illness — a familiar home can turn hostile overnight. A 50 mm shower curb, a 760 mm doorway, a set of front steps. Genuss carries out accessibility modifications for seniors and for injured workers, including work funded through WorkSafeBC, and we do it with the finish standard of a high-end renovation rather than the look of a hospital retrofit.",
    image: "/img/8583529.webp",
    imageAlt:
      "Marble-tiled walk-in shower with a stainless grab bar and recessed niche",
    accent: "teal",
    highlight: true,
    bullets: [
      "WorkSafeBC-funded home modifications",
      "Curbless / roll-in showers & wet rooms",
      "Grab bars & reinforced blocking",
      "Widened doorways & hallways",
      "Ramps, lifts & zero-threshold entries",
      "Accessible kitchens & lowered work surfaces",
    ],
    detail: [
      {
        h: "We work inside the WorkSafeBC process",
        p: "For injured workers, home modifications are typically arranged through a WorkSafeBC case manager and an occupational therapist's assessment. We're set up to quote to that scope, coordinate with the OT, meet documentation requirements and invoice through the approved channel — so the claimant isn't the one chasing paperwork.",
      },
      {
        h: "Aging in place, done properly",
        p: "Most seniors' modifications are privately funded and want to look like a renovation, not an installation. Grab bars into real blocking instead of drywall anchors. Curbless showers with a proper linear drain and slope. Lever handles, rocker switches, lighting that actually helps ageing eyes.",
      },
      {
        h: "Built to the standard, not just to the minimum",
        p: "Clear floor space, 860 mm door openings, reachable controls, non-slip finishes with a real DCOF rating, and blocking installed for the grab bars that aren't needed yet but will be.",
      },
      {
        h: "Respectful of the people living there",
        p: "These jobs happen around someone whose life is already disrupted. Dust control, a usable bathroom at the end of each day wherever possible, clear daily communication, and crews who understand the situation they've walked into.",
      },
    ],
    faq: [
      {
        q: "How do WorkSafeBC home modifications work?",
        a: "If you have an accepted claim, your case manager can authorize an assessment — usually by an occupational therapist — which defines the required modifications. We quote to that scope and coordinate directly with your case manager and OT. Start by calling us with your claim number and we'll walk you through it.",
      },
      {
        q: "My parent isn't an injured worker. Can you still help?",
        a: "Absolutely. Most of our accessibility work is privately funded aging-in-place renovation for families who want a parent to stay in their own home safely.",
      },
      {
        q: "Can you make it look good, not clinical?",
        a: "That's the whole point. A curbless shower in large-format porcelain with a linear drain is a design upgrade that happens to be barrier-free. Nothing has to look institutional.",
      },
    ],
  },
];

/* Their own five-step process, from the FAQ page. */
export const processSteps = [
  {
    n: "01",
    h: "Initial consultation",
    p: "An initial discussion to understand the project goals, scope and expectations — what you actually want, and what's realistic in budget and time.",
  },
  {
    n: "02",
    h: "Site review & quote",
    p: "We review the space, discuss options and provide a clear outline of the work involved, with pricing and a written scope covering what's included and what isn't.",
  },
  {
    n: "03",
    h: "Scheduling & coordination",
    p: "Once scope and pricing are agreed, we schedule the project and coordinate materials and trades as required, so every trade arrives to a site that's ready.",
  },
  {
    n: "04",
    h: "Construction",
    p: "We manage the work, maintain communication, and keep the site organized, clean and safe. You'll know what's happening this week and what's next.",
  },
  {
    n: "05",
    h: "Review & close-out",
    p: "After completion we walk the finished work with you to make sure everything meets expectations before close-out — and we stand behind what we deliver.",
  },
];

/* Drawn from their "our difference" and "three key things" copy. */
export const differentiators = [
  {
    h: "Care, organization, accountability",
    p: "The three things our team is built on. Every crew, every site, every week — no exceptions and no excuses.",
  },
  {
    h: "Scope understood up front",
    p: "We meticulously understand the scope before we start. It's what prevents delays, hidden costs and the mid-project surprises everyone dreads.",
  },
  {
    h: "Attention to detail",
    p: "Reliable, high-quality renovation and flooring work. We do the job right the first time and to a standard that still looks right in ten years.",
  },
  {
    h: "Clear communication, kept promises",
    p: "We communicate clearly, respect timelines and follow through on our commitments. Potential risks get explained up front, and changes get discussed before we proceed.",
  },
  {
    h: "Clean execution, respected homes",
    p: "Organized, clean job sites and work coordinated efficiently to minimize disruption to your daily life. You live there — we're guests until we're finished.",
  },
  {
    h: "Professional collaboration",
    p: "We coordinate properly with other trades and work well under general contractors, which is why restoration companies and GCs keep calling us back.",
  },
];

/* Photography matches their existing site's image library. */
export const projects = [
  {
    title: "Large-format porcelain wet room",
    type: "Flooring & Tiling",
    location: "South Surrey, BC",
    scope: "Curbless shower, linear drain, large-format porcelain, cove lighting",
    duration: "3 weeks",
    image: "/img/7166937.webp",
    alt: "Tiled bathroom with large-format stone-look porcelain and cove lighting",
  },
  {
    title: "Custom residence, Morgan Creek",
    type: "Custom Home",
    location: "Surrey, BC",
    scope: "Ground-up build, feature stair, full millwork package",
    duration: "18 months",
    image: "/img/1571459.webp",
    alt: "Bright modern interior with a floating timber staircase",
  },
  {
    title: "Open-plan office fit-out",
    type: "Commercial",
    location: "Burnaby, BC",
    scope: "2,100 sq ft tenant improvement, after-hours phasing",
    duration: "9 weeks",
    image: "/img/1170412.webp",
    alt: "Open-plan office with exposed black ceiling and polished concrete floor",
  },
  {
    title: "Barrier-free main floor conversion",
    type: "Accessibility",
    location: "Langley, BC",
    scope: "WorkSafeBC scope — widened doors, roll-in shower, ramped entry",
    duration: "6 weeks",
    image: "/img/7227629.webp",
    alt: "Modern barrier-free bathroom with a frameless glass walk-in shower",
  },
  {
    title: "Engineered hardwood throughout",
    type: "Flooring & Tiling",
    location: "Vancouver Westside",
    scope: "2,800 sq ft engineered plank, substrate levelling, trim",
    duration: "4 weeks",
    image: "/img/15743373.webp",
    alt: "Bright living room with wide-plank engineered hardwood flooring",
  },
  {
    title: "Whole-home gut & reconfiguration",
    type: "Custom Home",
    location: "Fleetwood, Surrey",
    scope: "Structural reconfiguration, new kitchen, two baths, full finish",
    duration: "7 months",
    image: "/img/4756488.webp",
    alt: "Interior stripped back to studs during a full home gut renovation",
  },
  {
    title: "Full kitchen remodel",
    type: "Residential",
    location: "Surrey, BC",
    scope: "Cabinetry, stone counters, backsplash tile, appliance integration",
    duration: "8 weeks",
    image: "/img/10855211.webp",
    alt: "Renovated kitchen with pale cabinetry, stone island and integrated appliances",
  },
  {
    title: "Patterned tile entry & hall",
    type: "Flooring & Tiling",
    location: "White Rock, BC",
    scope: "Octagon-and-dot tile, laser-set centrelines, heated substrate",
    duration: "2 weeks",
    image: "/img/4154991.webp",
    alt: "Black and white octagon-and-dot tile floor in a hallway",
  },
  {
    title: "Basement suite conversion",
    type: "Residential",
    location: "Langley, BC",
    scope: "Full basement build-out, egress, separate entry, flooring",
    duration: "10 weeks",
    image: "/img/19966810.webp",
    alt: "Finished basement living space with large windows and light flooring",
  },
];

/* Verbatim reviews from genussrenovation.ca/client-testimonials. */
export const testimonials = [
  {
    quote:
      "We had a great experience working with Genuss Renovation. From the start, they communicated clearly, explained the scope in detail, and stayed on schedule. The workmanship was high quality, and the job site was kept clean and organized throughout the project. We felt comfortable trusting them with our home and would confidently recommend them to anyone looking for a reliable renovation contractor.",
    name: "Hutchison family",
    detail: "Surrey, BC",
  },
  {
    quote:
      "Genuss Renovation completed our basement renovation on time and within budget. The team was professional, courteous, and always kept us informed of progress. We were particularly impressed with their attention to detail and commitment to quality. We now have a beautiful, functional space that we love!",
    name: "Baljeet Kaur",
    detail: "Langley, BC",
  },
  {
    quote:
      "We hired Genuss Renovation for a full kitchen remodel, and we couldn't be happier with the results. They listened to our needs, provided creative solutions, and delivered a stunning finished product. Their team was respectful of our home, and they made the renovation process as smooth and stress-free as possible. Highly recommended!",
    name: "Kyle C.",
    detail: "White Rock, BC",
  },
];

export const featuredQuote = {
  quote:
    "Genuss Renovation transformed our outdated kitchen into a modern masterpiece. Their attention to detail and commitment to quality is unmatched!",
  name: "Sarah M.",
  detail: "Surrey, BC",
};

/* The questions their FAQ page says clients actually ask. */
export const faqs = [
  {
    q: "How long will the renovation or flooring project take to complete?",
    a: "We set realistic timelines at quote stage rather than optimistic ones, and we tell you what drives them. A bathroom is typically 2–3 weeks, a basement 8–12, a whole-home gut several months. Once the schedule is agreed, you'll know what's happening each week.",
  },
  {
    q: "What is included in the scope of work, and what is not?",
    a: "Both, in writing, before anything starts. Defining the scope clearly up front is how we prevent delays and disputes — you'll see exactly what's covered, what's excluded, and where any genuine unknowns sit.",
  },
  {
    q: "How is pricing structured and what factors affect the final cost?",
    a: "Written, itemized pricing against a defined scope. We explain potential risks up front and discuss any changes with you before proceeding with additional work — no hidden costs appearing at the end.",
  },
  {
    q: "Will permits be required for this project?",
    a: "It depends on the municipality and the work. Structural changes, additions and most plumbing and electrical relocations need permits; finishes and flooring generally don't. We'll tell you at quote stage and handle the filing where it's required.",
  },
  {
    q: "How do you handle changes or additional work during the project?",
    a: "Nothing extra gets done without a conversation first. We discuss the change, price it, and get your approval before proceeding — which is how the final invoice ends up matching what you expected.",
  },
  {
    q: "Do you coordinate with other trades if needed?",
    a: "Yes — site coordination, scheduling and trade sequencing are core to what we do. We also work well under general contractors and alongside restoration and remediation companies.",
  },
  {
    q: "How do you protect the home and keep the site clean during construction?",
    a: "Floor protection, dust containment and daily cleanup. We keep job sites organized and maintain cleanliness throughout, and we coordinate work efficiently to minimize disruption to your daily life.",
  },
  {
    q: "What should we expect during the renovation process from start to finish?",
    a: "Initial discussion, site review and a clear written scope, scheduling and material coordination, construction with ongoing communication, then a final walkthrough with you before close-out. Five steps, and you'll always know which one you're in.",
  },
  {
    q: "Can you help with WorkSafeBC-funded modifications?",
    a: "Yes. We quote to occupational-therapist scopes, coordinate with case managers, and handle the documentation and invoicing directly. Call with your claim number and we'll take it from there.",
  },
];

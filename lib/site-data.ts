import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Building2,
  Clock,
  Dumbbell,
  Headphones,
  Home,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sofa,
  Truck,
  Warehouse,
} from "lucide-react";

export type DetailItem = {
  title: string;
  text: string;
};

export type ServicePage = {
  slug: string;
  legacyPath: string;
  category: "Residential" | "Commercial" | "Packing" | "Long Distance";
  title: string;
  subtitle: string;
  introTitle: string;
  intro: string[];
  includesTitle: string;
  includes: DetailItem[];
  whyTitle: string;
  whyIntro: string;
  why: DetailItem[];
  ctaTitle: string;
  ctaText: string;
  image: string;
  iconName: "home" | "truck" | "building" | "packing" | "sofa" | "warehouse" | "dumbbell";
};

export const contact = {
  phone: "+1 613-770-9139",
  phoneHref: "tel:+16137709139",
  primaryEmail: "ottawalsm@gmail.com",
  primaryEmailHref: "mailto:ottawalsm@gmail.com",
  secondaryEmail: "letsstartmovingcanada@gmail.com",
  secondaryEmailHref: "mailto:letsstartmovingcanada@gmail.com",
  address: "3 Banner Road Nepean K2H8T3",
  addressLong: "3 Banner Road, Nepean, K2H 8T3, Ottawa, Canada",
  hours: "Monday - Sunday: 7:00 AM - 9:00 PM",
  facebook: "https://www.facebook.com/letsstartmoving/",
  instagram: "https://www.instagram.com/letsstartmoving/",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Video Quote", href: "/video-quote" },
  { label: "Contact", href: "/contact-us" },
];

export const iconMap: Record<ServicePage["iconName"], LucideIcon> = {
  home: Home,
  truck: Truck,
  building: Building2,
  packing: PackageCheck,
  sofa: Sofa,
  warehouse: Warehouse,
  dumbbell: Dumbbell,
};

export const trustItems = [
  { label: "Fully licensed & insured", icon: ShieldCheck },
  { label: "On-time guarantee", icon: Clock },
  { label: "Transparent pricing", icon: BadgeCheck },
  { label: "24/7 support", icon: Headphones },
];

export const servicePages: ServicePage[] = [
  {
    slug: "residential-services",
    legacyPath: "residential-services.html",
    category: "Residential",
    title: "Residential Moving Services",
    subtitle:
      "Affordable residential moving in Barrhaven, Nepean, Ottawa and nearby areas - your satisfaction is our success.",
    introTitle: "Professional Home Moving Services You Can Trust",
    intro: [
      "Relocation is a significant part of everyday life, and Let's Start Moving is here to make it as smooth as possible. The team handles local moves within the city and long-distance relocations across the country.",
      "Residential service covers packing, loading, transportation, offloading, unpacking, storage, furniture assembly, and packing supplies, with equipped crews using the right tools and methods to reduce stress.",
    ],
    includesTitle: "Our Residential Services Include",
    includes: [
      { title: "Packing", text: "Expert wrapping and boxing using quality materials." },
      { title: "Loading", text: "Careful loading using proper equipment and techniques." },
      { title: "Transportation", text: "Safe, timely transport to your new home, near or far." },
      { title: "Unloading", text: "Efficient unloading without damage to items or property." },
      { title: "Unpacking", text: "Boxes unpacked and items placed where you want them." },
      { title: "Storage", text: "Secure short- and long-term storage options when needed." },
      { title: "Furniture Assembly", text: "Disassembly before the move and reassembly at the new home." },
      { title: "Packing Supplies", text: "Boxes, bubble wrap, tape, and protective materials available." },
    ],
    whyTitle: "Why Choose Let's Start Moving For Your Next Move",
    whyIntro:
      "Friendly and skilled professional movers are committed to a quality residential moving experience with no hassle.",
    why: [
      { title: "Complete Service", text: "The team handles each part of the move from packing to final placement." },
      { title: "Careful Handling", text: "Every home move is treated with respect and professionalism." },
      { title: "Equipped Crews", text: "Movers use the right tools and systems to reduce stress." },
      { title: "Flexible Support", text: "Storage, supplies, assembly, and unpacking can be added when needed." },
    ],
    ctaTitle: "Ready for a smoother residential move?",
    ctaText: "Get a free quote from the Ottawa team and start planning your home move.",
    image: "/brand-assets/lsm-service-residential.jpg",
    iconName: "home",
  },
  {
    slug: "local-moving",
    legacyPath: "local-moving.html",
    category: "Residential",
    title: "Local Moving Services",
    subtitle: "Serving Barrhaven, Nepean, Orleans, Ottawa and nearby areas - rapid relocation, exceptional care.",
    introTitle: "Quick Local Moving Services in Ottawa",
    intro: [
      "As a local moving company, Let's Start Moving offers fast and effective moving services within the Ottawa area. Experienced movers focus on excellent service from start to finish.",
      "Whether the move is to a nearby area, across the city, or another local district, the goal is to make sure items are moved safely and arrive on time.",
    ],
    includesTitle: "Our Local Moving Services Include",
    includes: [
      { title: "Packing", text: "Professional packing with quality materials to protect every item." },
      { title: "Loading", text: "Systematic loading into the moving vehicle using proper equipment." },
      { title: "Transportation", text: "Fast, safe city transport with timing handled carefully." },
      { title: "Unloading", text: "Careful unloading at the new address without property damage." },
      { title: "Unpacking", text: "Unpacking support so you can settle in quickly." },
      { title: "Storage", text: "Short-term storage available during a local move." },
      { title: "Disassembly & Reassembly", text: "Furniture taken apart before loading and reassembled after delivery." },
    ],
    whyTitle: "Why Choose Let's Start Moving For Your Local Move",
    whyIntro:
      "The team is equipped with the skills to manage packing, loading, transport, and unpacking while handling belongings with care.",
    why: [
      { title: "Fast & Efficient Service", text: "Local moves are completed quickly without cutting corners." },
      { title: "Experienced Local Movers", text: "Ottawa-area route knowledge supports faster, cost-effective moves." },
      { title: "Careful Handling", text: "Belongings are protected throughout every step." },
      { title: "End-to-End Help", text: "Packing, unloading, unpacking, and furniture support are available." },
    ],
    ctaTitle: "Need a local Ottawa move handled quickly?",
    ctaText: "Request a clear quote and let the team plan the route, crew, and timing.",
    image: "/brand-assets/lsm-service-local.jpg",
    iconName: "truck",
  },
  {
    slug: "home-furniture-moving",
    legacyPath: "home-furniture-moving.html",
    category: "Residential",
    title: "Home Furniture Moving Services",
    subtitle: "Your home furniture moving professionals across Barrhaven, Nepean, Orleans, Ottawa and nearby areas.",
    introTitle: "Efficient & Reliable Home Furniture Moving",
    intro: [
      "Furniture moving focuses on efficient, reliable support for home customers, from packing and loading to transportation, unpacking, and placement.",
      "The team aims to create a convenient and stress-free experience whether the move is within the same city or to a different city.",
    ],
    includesTitle: "Our Furniture Moving Services Include",
    includes: [
      { title: "Packing", text: "Furniture wrapping and protection with quality materials." },
      { title: "Loading", text: "Careful loading with equipment and the right moving technique." },
      { title: "Transportation", text: "Safe, timely furniture transport locally or to another city." },
      { title: "Unloading", text: "Offloading without scratches, dents, or damage." },
      { title: "Unpacking", text: "Furniture unwrapped and placed where you want it." },
      { title: "Storage", text: "Secure short- or long-term storage if the new space is not ready." },
      { title: "Disassembly & Reassembly", text: "Large furniture broken down before the move and rebuilt at the new home." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Furniture?",
    whyIntro:
      "Hardworking professionals specialize in residential furniture moves and handle every detail.",
    why: [
      { title: "Specialized Furniture Movers", text: "Sofas, beds, antiques, and glass pieces are handled by trained crews." },
      { title: "Treated Like Our Own", text: "Furniture is moved with care because every detail matters." },
      { title: "Stress-Free Move", text: "Packing, transport, unpacking, and placement can all be handled." },
      { title: "Reliable Service", text: "The process is planned for efficiency and customer comfort." },
    ],
    ctaTitle: "Furniture moving without the heavy lifting.",
    ctaText: "Tell us what furniture needs to move and where it belongs next.",
    image: "/brand-assets/lsm-ca-team.jpg",
    iconName: "sofa",
  },
  {
    slug: "piano-moving",
    legacyPath: "piano-moving.html",
    category: "Residential",
    title: "Piano Moving Services",
    subtitle: "Protecting your precious instrument in Barrhaven, Nepean, Orleans, Ottawa and nearby areas.",
    introTitle: "Best Piano Moving Services in Ottawa",
    intro: [
      "Piano moving requires a skilled team and an individual approach. Let's Start Moving transports pianos locally or to different provinces without compromising service quality.",
      "The goal is to move your valued instrument safely and quickly without damage to its value.",
    ],
    includesTitle: "Our Piano Moving Services Include",
    includes: [
      { title: "Packing", text: "Specialist wrapping and padding to protect the piano." },
      { title: "Disassembly", text: "Safe disassembly of legs, pedals, and components for transit." },
      { title: "Transportation", text: "Careful loading and transport in a padded, climate-appropriate vehicle." },
      { title: "Reassembly", text: "Full reassembly at the new location." },
      { title: "Tuning", text: "Post-move tuning service available to restore pitch." },
      { title: "Storage", text: "Climate-controlled, secure piano storage when needed." },
    ],
    whyTitle: "Why Trust Let's Start Moving with Your Piano?",
    whyIntro:
      "A dedicated team handles sensitive items like pianos with care, accuracy, and timing in mind.",
    why: [
      { title: "Highly Skilled Piano Movers", text: "Crews are trained for upright and grand piano challenges." },
      { title: "Zero Damage Commitment", text: "Specialist equipment and padding help protect the instrument." },
      { title: "Local & Long Distance", text: "Pianos can be moved across the city or to another province." },
      { title: "Individual Approach", text: "Each piano and move plan is handled individually." },
    ],
    ctaTitle: "Need your piano moved safely?",
    ctaText: "Request a free quote from a professional piano moving team.",
    image: "/brand-assets/lets-start-moving-06.jpg",
    iconName: "packing",
  },
  {
    slug: "home-moving",
    legacyPath: "home-moving.html",
    category: "Residential",
    title: "Home Moving Services",
    subtitle: "Reliable home moving in Barrhaven, Nepean, Orleans, Ottawa and nearby areas.",
    introTitle: "Reliable Home Moving Services in Ottawa",
    intro: [
      "Residential customers can rely on home moving services for fast, accurate relocation with packing, loading, transport, unloading, and unpacking support.",
      "Attention to detail is central to the service so personal property is treated carefully and delivered right on time.",
    ],
    includesTitle: "Our Home Moving Services Include",
    includes: [
      { title: "Packing", text: "Wrapping and boxing of household items using quality materials." },
      { title: "Loading", text: "Safe, systematic loading by trained movers." },
      { title: "Transportation", text: "Secure transport within the city or across the country." },
      { title: "Unloading", text: "Careful offloading with attention to every item and surface." },
      { title: "Unpacking", text: "Belongings unpacked and placed where you want them." },
      { title: "Storage", text: "Flexible storage if the new home is not ready." },
      { title: "Disassembly & Reassembly", text: "Furniture taken apart and rebuilt at the new home." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Your Home Move?",
    whyIntro:
      "The team focuses on residential moving services and a carefree process for families.",
    why: [
      { title: "Residential Specialists", text: "Processes are refined for home relocations." },
      { title: "Care for Every Detail", text: "Personal property is treated with attention and respect." },
      { title: "Stress-Free for Your Family", text: "The goal is to keep the process calm for everyone." },
      { title: "Right On Time", text: "Belongings are delivered to the new home without delays." },
    ],
    ctaTitle: "Ready for a reliable home move?",
    ctaText: "Contact the Ottawa team for a free quote.",
    image: "/brand-assets/lsm-ca-hero.jpg",
    iconName: "home",
  },
  {
    slug: "appliance-moving",
    legacyPath: "appliance-moving.html",
    category: "Residential",
    title: "Appliance Moving Services",
    subtitle: "Relocating your appliances with precision and care across Ottawa and nearby areas.",
    introTitle: "Affordable Appliance Moving Services in Ottawa",
    intro: [
      "Let's Start Moving positions appliance moving as pocket-friendly and accessible, helping customers avoid extra stress around heavy appliances.",
      "The team offers multiple options, handles appliances with expertise, transports them safely, and delivers them promptly.",
    ],
    includesTitle: "Our Appliance Moving Services Include",
    includes: [
      { title: "Pickup & Delivery", text: "Appliances collected and delivered safely to the new address." },
      { title: "Disassembly & Reassembly", text: "Appliances taken apart for safe transit and reconnected at destination." },
      { title: "Packaging & Unpacking", text: "Protective packaging and careful unpacking." },
      { title: "Loading & Unloading", text: "Careful equipment-assisted loading and offloading." },
      { title: "Furniture Moving", text: "Combined appliance and furniture moving available." },
      { title: "Insurance Options", text: "Coverage available throughout the moving process." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Appliances?",
    whyIntro:
      "Affordability, experienced personnel, personalized plans, and customer care guide every appliance move.",
    why: [
      { title: "Affordable Rates", text: "Honest pricing without hidden extras." },
      { title: "Experienced Personnel", text: "Staff are trained to handle appliances safely." },
      { title: "Personalized Plans", text: "Flexible options are tailored to specific needs." },
      { title: "Customer Care", text: "The team aims to make appliance moves smooth." },
    ],
    ctaTitle: "Need appliances moved affordably?",
    ctaText: "Ask for appliance moving options and a free quote.",
    image: "/brand-assets/lets-start-moving-07.jpg",
    iconName: "packing",
  },
  {
    slug: "couch-moving",
    legacyPath: "couch-moving.html",
    category: "Residential",
    title: "Couch Moving Services",
    subtitle: "Delivered on time and in perfect condition across Ottawa and nearby areas.",
    introTitle: "Quick & Reliable Couch Moving Services",
    intro: [
      "The couch moving service is designed around specific customer requirements, reasonable pricing, and a process that keeps things easy and stress-free.",
      "Movers handle the couch from disassembly through transportation and reassembly, using proper tools and experience.",
    ],
    includesTitle: "Our Couch Moving Services Include",
    includes: [
      { title: "Disassembly", text: "Safe disassembly of couches or sectionals." },
      { title: "Transportation", text: "Secure transport to the preferred destination." },
      { title: "Reassembly", text: "Full reassembly at the new location." },
      { title: "Furniture Protection", text: "Protective wrapping and padding in transit." },
      { title: "Professional Handling", text: "Movers with tools for any couch size or style." },
      { title: "Timely Delivery", text: "On-schedule delivery in the same condition." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Your Couch?",
    whyIntro:
      "The team pays attention to detail and proactively helps customers avoid the hassle.",
    why: [
      { title: "Equipped Team", text: "Movers bring the tools and knowledge for large seating." },
      { title: "Damage-Free Care", text: "Wrapping and padding protect the couch." },
      { title: "Transparent Pricing", text: "Affordable service without hidden charges." },
      { title: "Stress-Free", text: "Every step is handled from start to finish." },
    ],
    ctaTitle: "Need your couch moved quickly?",
    ctaText: "Get a quote for a single item or add couch moving to a larger move.",
    image: "/brand-assets/lsm-ca-team.jpg",
    iconName: "sofa",
  },
  {
    slug: "hot-tub-moving",
    legacyPath: "hot-tub-moving.html",
    category: "Residential",
    title: "Hot Tub Moving Services",
    subtitle: "Expert movers for delicate, heavy hot tub transport across Ottawa and nearby areas.",
    introTitle: "Professional Hot Tub Moving Services in Ottawa",
    intro: [
      "Transporting a hot tub is difficult because it is large, heavy, and fragile. The service handles dismantling, relocation, and reinstallation.",
      "The goal is to move the asset safely with minimal damage risk and less stress for the client.",
    ],
    includesTitle: "Our Hot Tub Moving Services Include",
    includes: [
      { title: "Disassembly", text: "Safe dismantling from the foundation." },
      { title: "Transportation", text: "Secure transport using specialist equipment." },
      { title: "Reassembly", text: "Full reinstallation at the new site." },
      { title: "Plumbing", text: "Plumbing connections handled at old and new locations." },
      { title: "Electrical Connections", text: "Safe disconnection and reconnection support." },
      { title: "Waste Removal", text: "Move waste and debris cleared responsibly." },
      { title: "Removal & Installation", text: "Complete removal and setup including levelling." },
    ],
    whyTitle: "Why Trust Let's Start Moving with Your Hot Tub?",
    whyIntro:
      "Professionals and tools support secure, fast hot tub moving with minimal lifestyle interruption.",
    why: [
      { title: "Specialist Team & Equipment", text: "Purpose-built tools and expertise for hot tubs." },
      { title: "Little or No Damage", text: "Meticulous care helps preserve the asset." },
      { title: "End-to-End Service", text: "Disassembly, transport, setup, plumbing, and electrical support." },
      { title: "Minimal Disruption", text: "Efficient, clean work reduces interruption." },
    ],
    ctaTitle: "Need your hot tub moved safely?",
    ctaText: "Contact the team for a specialist quote.",
    image: "/brand-assets/lets-start-moving-08.jpg",
    iconName: "packing",
  },
  {
    slug: "refrigerator-moving",
    legacyPath: "refrigerator-moving.html",
    category: "Residential",
    title: "Refrigerator Moving Services",
    subtitle: "Expertly handled and meticulously moved in Ottawa and nearby areas.",
    introTitle: "Professional Refrigerator Moving Services in Ottawa",
    intro: [
      "Moving a refrigerator is challenging because of size, weight, and fragility. The team has the knowledge and equipment to do it safely.",
      "Refrigerator movers handle movement, placement, and reconnection so the appliance arrives in perfect condition.",
    ],
    includesTitle: "Our Refrigerator Moving Services Include",
    includes: [
      { title: "Disconnection", text: "Water lines, electrical supply, and connections disconnected safely." },
      { title: "Preparation", text: "Defrosting, shelf securing, and protective wrapping." },
      { title: "Loading", text: "Specialist equipment used to manoeuvre the refrigerator." },
      { title: "Transportation", text: "Kept upright and stable throughout the journey." },
      { title: "Unloading", text: "Careful placement at the new location." },
      { title: "Reconnection", text: "Water and electrical lines reconnected for use." },
      { title: "Disposal", text: "Optional responsible disposal of old refrigerators." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Your Refrigerator?",
    whyIntro:
      "Appliance experience, perfect-condition delivery, reasonable pricing, and tailored service shape the move.",
    why: [
      { title: "Appliance Expertise", text: "Heavy, fragile appliances are handled by trained movers." },
      { title: "Perfect Condition", text: "Careful process protects the refrigerator." },
      { title: "Reasonable Price", text: "Quality service at practical pricing." },
      { title: "Tailored Needs", text: "Moves are planned around schedule and requirements." },
    ],
    ctaTitle: "Need your refrigerator moved safely?",
    ctaText: "Request a tailored quote for appliance moving.",
    image: "/brand-assets/lets-start-moving-07.jpg",
    iconName: "packing",
  },
  {
    slug: "treadmill-moving",
    legacyPath: "treadmill-moving.html",
    category: "Residential",
    title: "Treadmill Moving Services",
    subtitle: "Efficiently relocating your fitness equipment across Ottawa and nearby areas.",
    introTitle: "Affordable Treadmill Moving Services in Ottawa",
    intro: [
      "The treadmill service helps customers transport fitness equipment to a new home with trained staff and smooth processes.",
      "The team supports affordable rates, complete installation, and safe carriage whether moving within the city or to another city.",
    ],
    includesTitle: "Our Treadmill Moving Services Include",
    includes: [
      { title: "Disassembly", text: "Treadmill broken down into manageable parts." },
      { title: "Packing", text: "Protective wrapping of all components." },
      { title: "Transportation", text: "Safe transport within or beyond the city." },
      { title: "Assembly", text: "Reassembly at the new location." },
      { title: "Leveling", text: "Proper leveling for safe operation." },
      { title: "Testing", text: "Post-installation testing before the crew leaves." },
      { title: "Disposal", text: "Responsible disposal if the old treadmill is no longer needed." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Your Treadmill?",
    whyIntro:
      "Customer satisfaction, affordability, and coordinated moving processes are central to the service.",
    why: [
      { title: "Affordable & Accessible", text: "Budget-conscious treadmill moving without sacrificing care." },
      { title: "Trained Professionals", text: "Smooth coordinated process for safe installation." },
      { title: "No Stress", text: "Customer service keeps the move simple." },
      { title: "Full Installation", text: "Assembly, leveling, and testing are included." },
    ],
    ctaTitle: "Need treadmill moving help?",
    ctaText: "Get a free quote for fitness equipment relocation.",
    image: "/brand-assets/lets-start-moving-06.jpg",
    iconName: "dumbbell",
  },
  {
    slug: "small-items-moving",
    legacyPath: "small-items-moving.html",
    category: "Residential",
    title: "Small Item Moving Services",
    subtitle: "Efficiently relocating cherished possessions in Ottawa and nearby areas.",
    introTitle: "Specialized Small Item Moving Services in Ottawa",
    intro: [
      "Small item moving helps people move a few pieces, delicate antiques, office goods, electronics, or storage-unit items safely and efficiently.",
      "Because the service focuses on smaller moves, it can be more efficient and cost-effective while still offering specialized care.",
    ],
    includesTitle: "Our Small Item Moving Services Include",
    includes: [
      { title: "Furniture Moving", text: "Individual pieces moved safely to a home or storage unit." },
      { title: "Appliance Relocation", text: "Smaller appliances and household items relocated." },
      { title: "Electronics Transportation", text: "TVs, computers, and electronics handled carefully." },
      { title: "Art & Antiques", text: "Specialist care for fragile or valuable items." },
      { title: "Office Equipment", text: "Desks, chairs, printers, and office goods moved efficiently." },
      { title: "Storage Transfers", text: "Items moved into or out of storage units." },
      { title: "Custom Crating", text: "Custom crates for fragile or uniquely shaped pieces." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Small Items?",
    whyIntro:
      "Tailored, quick solutions help small item moves arrive safely and on time.",
    why: [
      { title: "Specialized & Adaptable", text: "Service precisely matched to small moves." },
      { title: "Efficient & Cost-Effective", text: "Focused scope supports affordable pricing." },
      { title: "Safe Handling", text: "Delicate antiques, electronics, and smaller goods are protected." },
      { title: "On-Time", text: "Items are delivered on schedule." },
    ],
    ctaTitle: "Only moving a few items?",
    ctaText: "Ask for a small item moving quote.",
    image: "/brand-assets/lsm-service-packing.jpg",
    iconName: "packing",
  },
  {
    slug: "commercial-services",
    legacyPath: "commercial-services.html",
    category: "Commercial",
    title: "Commercial & Office Moving Services",
    subtitle: "Professional commercial movers for Barrhaven, Nepean, Orleans, Ottawa and nearby areas.",
    introTitle: "Professional Commercial & Office Moving in Ottawa",
    intro: [
      "Moving an entire office or commercial business is challenging. Let's Start Moving provides experienced movers with tools and knowledge to help the move happen smoothly.",
      "The team understands that business disruption can be costly, so procedures are designed to move operations with minimal interruption.",
    ],
    includesTitle: "Our Commercial Services Include",
    includes: [
      { title: "Packing", text: "Office equipment, supplies, and furniture packed with quality materials." },
      { title: "Loading", text: "Commercial items loaded systematically with proper equipment." },
      { title: "Transportation", text: "On-time transport to the new commercial location." },
      { title: "Unloading", text: "Items placed where the business needs them." },
      { title: "Furniture Assembly", text: "Disassembly and reassembly for fast setup." },
      { title: "Storage", text: "Flexible storage for equipment and inventory." },
      { title: "Crating & Insurance", text: "Custom crating and insurance coverage for commercial goods." },
    ],
    whyTitle: "Why Businesses in Ottawa Choose Let's Start Moving",
    whyIntro:
      "Professional movers, competitive rates, minimal disruption, insurance, and tailored moving plans support business moves.",
    why: [
      { title: "No Shortcuts", text: "Business moves are treated with careful attention." },
      { title: "Clear Pricing", text: "Competitive rates with upfront quotes." },
      { title: "Minimal Downtime", text: "Evening, weekend, and business-hour-aware scheduling." },
      { title: "Tailored Plans", text: "Moving plans match business layout, timeline, and requirements." },
    ],
    ctaTitle: "Ready to make your business move stress-free?",
    ctaText: "Request a commercial moving quote for your team.",
    image: "/brand-assets/lsm-service-office.jpg",
    iconName: "building",
  },
  {
    slug: "office-furniture-moving",
    legacyPath: "office-furniture-moving.html",
    category: "Commercial",
    title: "Office Furniture Moving",
    subtitle: "Your furniture, our priority, our commitment.",
    introTitle: "Best Office Furniture Moving Company in Ottawa",
    intro: [
      "Office furniture moving covers furniture and equipment relocation for office transitions. The team handles the process smoothly and quickly.",
      "From disassembling, packing, and moving to unpacking and reassembling, the full package is designed to reduce business disruption.",
    ],
    includesTitle: "Our Office Furniture Moving Services Include",
    includes: [
      { title: "Disassembly", text: "Desks, workstations, cubicles, and shelving disassembled." },
      { title: "Packing", text: "Office items wrapped and packed with quality materials." },
      { title: "Transportation", text: "Secure, on-time transport without damage." },
      { title: "Reassembly", text: "Furniture reassembled at the new office." },
      { title: "Installation", text: "Fixtures and equipment installed in the new space." },
      { title: "Storage", text: "Office items stored securely when not immediately needed." },
      { title: "Asset Tagging & Inventory", text: "Items tracked before and after the move." },
      { title: "Disposal", text: "Unwanted office items responsibly removed." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Your Office?",
    whyIntro:
      "Years of experience, minimal disruption, cost-optimized solutions, and a full spectrum of service help office moves stay organized.",
    why: [
      { title: "Office Moving Experience", text: "Specialists handle anything from single rooms to entire floors." },
      { title: "Minimal Disruption", text: "Scheduling and execution keep downtime close to zero." },
      { title: "Cost-Optimized", text: "Costs are managed while meeting business needs." },
      { title: "Full Spectrum", text: "Dismantling, packing, assembly, installation, tagging, and disposal." },
    ],
    ctaTitle: "Ready to move your office without the hassle?",
    ctaText: "Contact the team for office furniture moving details.",
    image: "/brand-assets/lsm-service-office.jpg",
    iconName: "building",
  },
  {
    slug: "inventory-moving",
    legacyPath: "inventory-moving.html",
    category: "Commercial",
    title: "Inventory Moving Services",
    subtitle: "All types of inventory moving in Barrhaven, Nepean, Orleans, Ottawa and nearby areas.",
    introTitle: "All Types of Inventory Moving Services in Ottawa",
    intro: [
      "Inventory moving supports businesses from small startups to large corporations, relocating stock, raw materials, finished products, equipment, and company assets.",
      "Inventory movers understand sensitive, breakable, large machinery, and important stock requirements during expansion, relocation, or reorganization.",
    ],
    includesTitle: "Our Inventory Moving Services Include",
    includes: [
      { title: "Transportation", text: "Inventory transported safely and fully accounted for." },
      { title: "Packing", text: "Stock packed professionally from fragile items to large equipment." },
      { title: "Unpacking", text: "Inventory unpacked and placed ready for use." },
      { title: "Storage", text: "Secure interim or long-term inventory storage." },
      { title: "Handling", text: "Sensitive, breakable, heavy, and hazardous items handled expertly." },
      { title: "Inventory Management", text: "Tracking and management before, during, and after the move." },
      { title: "Insurance", text: "Coverage for inventory items during the move." },
      { title: "Custom Clearance", text: "Documentation support for cross-border inventory relocations." },
    ],
    whyTitle: "Why Choose Let's Start Moving for Inventory?",
    whyIntro:
      "The team offers professional inventory service for small to large moves with efficiency and care.",
    why: [
      { title: "Any Size", text: "Support for startups through large corporations." },
      { title: "Care-Oriented", text: "Moves are planned to protect inventory." },
      { title: "Less Downtime", text: "Transit time is reduced to support business continuity." },
      { title: "Tracked Assets", text: "Inventory management reduces loss risk." },
    ],
    ctaTitle: "Moving inventory or stock?",
    ctaText: "Get a commercial inventory moving quote.",
    image: "/brand-assets/lets-start-moving-07.jpg",
    iconName: "warehouse",
  },
  {
    slug: "warehouse-moving",
    legacyPath: "warehouse-moving.html",
    category: "Commercial",
    title: "Warehouse Moving Services",
    subtitle: "Protecting your inventory, preserving your business.",
    introTitle: "Top Warehouse Moving Services in Ottawa",
    intro: [
      "Warehouse moving provides specialized solutions for warehouses and industrial establishments, focused on the needs of the warehousing sector.",
      "Whether moving oversized equipment or small inventories, the service aims to deliver assets safely and quickly with minimal disruption.",
    ],
    includesTitle: "Our Warehouse Moving Services Include",
    includes: [
      { title: "Equipment Moving", text: "Industrial machinery and oversized equipment relocated safely." },
      { title: "Inventory Relocation", text: "Raw materials, finished goods, and company assets moved efficiently." },
      { title: "Rack & Shelving Systems", text: "Racking and shelving disassembled, transported, and reinstalled." },
      { title: "Forklift & Material Handling", text: "Forklifts and heavy handling equipment moved safely." },
      { title: "Storage Solutions", text: "Interim and long-term storage during warehouse transitions." },
      { title: "Packing & Unpacking", text: "Warehouse items packed and unpacked professionally." },
      { title: "Asset Management", text: "Tracking, tagging, and documentation throughout the move." },
      { title: "Site Preparation", text: "Old and new sites prepared for a smooth transition." },
    ],
    whyTitle: "Why Trust Let's Start Moving with Your Warehouse?",
    whyIntro:
      "Professional movers with warehouse relocation experience focus on efficiency and care for a seamless business transition.",
    why: [
      { title: "Warehouse Specialists", text: "Experience with industrial and warehouse relocations." },
      { title: "Minimal Disruption", text: "Move plans protect business continuity." },
      { title: "Asset Control", text: "Tracking and documentation keep items accounted for." },
      { title: "End-to-End Planning", text: "Equipment, inventory, shelving, and site prep are included." },
    ],
    ctaTitle: "Planning a warehouse relocation?",
    ctaText: "Start with a clear commercial moving quote.",
    image: "/brand-assets/lsm-com-trucks.png",
    iconName: "warehouse",
  },
  {
    slug: "packing-services",
    legacyPath: "packing-services.html",
    category: "Packing",
    title: "Packing & Moving Services",
    subtitle: "Best packing and moving services in Ottawa and nearby areas - your move, our priority.",
    introTitle: "Expertly Managed Packing & Moving Services",
    intro: [
      "Packing and moving services support household items or office equipment from packaging through delivery and arranging at the new destination.",
      "Trained movers handle fragile belongings safely and supply boxes, bubble wrap, tape, and protective materials.",
    ],
    includesTitle: "Our Packing Services Include",
    includes: [
      { title: "Packing", text: "Professional wrapping and boxing with proven techniques." },
      { title: "Unpacking", text: "Belongings unpacked and placed at the destination." },
      { title: "Loading & Unloading", text: "Careful loading and unloading with the right equipment." },
      { title: "Transportation", text: "Safe, on-time delivery locally or long distance." },
      { title: "Disassembly & Reassembly", text: "Furniture taken apart and rebuilt at the destination." },
      { title: "Storage", text: "Secure storage options during the move." },
      { title: "Packing Materials", text: "Boxes, bubble wrap, tape, and protective covers supplied." },
      { title: "Insurance", text: "Coverage for packed belongings throughout the move." },
    ],
    whyTitle: "Why Let's Start Moving for Packing?",
    whyIntro:
      "Highly skilled staff work toward one goal: the best, most stress-free moving experience possible.",
    why: [
      { title: "Highly Skilled Packers", text: "Trained staff understand fragile and everyday items." },
      { title: "Materials Included", text: "Supplies can be provided in one place." },
      { title: "Office and Home", text: "Packing supports both household and office moves." },
      { title: "Stress Reduction", text: "The crew handles the packing burden for the client." },
    ],
    ctaTitle: "Need packing handled for you?",
    ctaText: "Ask for packing services and supplies in your quote.",
    image: "/brand-assets/lsm-service-packing.jpg",
    iconName: "packing",
  },
  {
    slug: "long-distance-moving-ottawa",
    legacyPath: "long-distance-moving-ottawa.html",
    category: "Long Distance",
    title: "Long Distance Moving Services",
    subtitle: "From coast to coast, we've got you covered.",
    introTitle: "Smooth Long-Distance Moving Across Canada",
    intro: [
      "Long-distance moving services cover people and companies transferring belongings across provinces or the country. The team handles packing, wrapping, transport, and unpacking.",
      "Professional movers bring the expertise to manage long-distance complexity, including storage, insurance, and special handling for valuable or fragile goods.",
    ],
    includesTitle: "Our Long Distance Services Include",
    includes: [
      { title: "Packing", text: "Premium wrapping and boxing so items stay secure on the long haul." },
      { title: "Unpacking", text: "Items unpacked and arranged at destination." },
      { title: "Loading & Unloading", text: "Systematic loading and careful unloading." },
      { title: "Long-Haul Transportation", text: "Modern moving vans and experienced drivers for any distance." },
      { title: "Disassembly & Reassembly", text: "Large items broken down and rebuilt." },
      { title: "Storage", text: "Intermediate or long-term storage if the home is not ready." },
      { title: "Packing Materials", text: "Boxes, bubble wrap, stretch film, and supplies provided." },
      { title: "Insurance & Specialty Services", text: "Coverage and special handling for valuables, antiques, art, and oversized items." },
    ],
    whyTitle: "Why Trust Let's Start Moving for Long Distance?",
    whyIntro:
      "The service is built to keep long-distance moves smooth, safe, and hassle-free with qualified movers and drivers.",
    why: [
      { title: "Across Canada", text: "Moves are planned across provinces and long routes." },
      { title: "Full-Service", text: "Packing, transport, unpacking, storage, and insurance can be included." },
      { title: "Fragile Handling", text: "Valuable and oversized items can receive special care." },
      { title: "Peace of Mind", text: "Coverage and planning reduce long-haul uncertainty." },
    ],
    ctaTitle: "Planning a long-distance move?",
    ctaText: "Send your route and timeline for a clear quote.",
    image: "/brand-assets/lsm-com-trucks.png",
    iconName: "truck",
  },
];

export const mainServiceCards = [
  servicePages.find((page) => page.slug === "packing-services")!,
  servicePages.find((page) => page.slug === "long-distance-moving-ottawa")!,
  servicePages.find((page) => page.slug === "commercial-services")!,
  servicePages.find((page) => page.slug === "residential-services")!,
];

export function findServicePage(slug: string) {
  const cleanSlug = slug.replace(/\.html$/, "");
  return servicePages.find((page) => page.slug === cleanSlug || page.legacyPath === slug);
}

export const serviceGroups = [
  {
    title: "Residential",
    items: servicePages.filter((page) => page.category === "Residential"),
  },
  {
    title: "Commercial",
    items: servicePages.filter((page) => page.category === "Commercial"),
  },
  {
    title: "Packing & Long Distance",
    items: servicePages.filter((page) => page.category === "Packing" || page.category === "Long Distance"),
  },
];

export const sourceLinks = {
  caHome: "https://letsstartmoving.ca/",
  caAbout: "https://letsstartmoving.ca/about-us.html",
  caServices: "https://letsstartmoving.ca/services.html",
  caContact: "https://letsstartmoving.ca/contact-us.html",
  caQuote: "https://letsstartmoving.ca/getaquote.html",
  caVideo: "https://letsstartmoving.ca/videoquote.html",
};

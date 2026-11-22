export type MenuItem = {
  name: string;
  price: string;
  detail?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  eyebrow: string;
  group: "hair" | "beauty" | "body" | "packages";
  description?: string;
  items: MenuItem[];
};

/** Transcribed from the client's six-page S DIVA service-menu PDF. */
export const menu: MenuCategory[] = [
  {
    id: "women-hair", title: "Hair · Women", eyebrow: "01 / Hair atelier", group: "hair",
    description: "Precision cuts, colour artistry and transformative treatments.",
    items: [
      { name: "Basic Hair Cut / Trim", price: "₹200" },
      { name: "Hair Wash & Blow Dry", price: "₹200" },
      { name: "Advanced Haircut", price: "₹600" },
      { name: "Hair Spa", price: "From ₹500" },
      { name: "Straightening", price: "From ₹2,500" },
      { name: "Keratin", price: "From ₹2,000" },
      { name: "Smoothening", price: "From ₹2,000" },
      { name: "Dandruff Treatment", price: "₹2,000" },
      { name: "Highlights", price: "₹250", detail: "Per strip" },
      { name: "Global Hair Colour", price: "From ₹2,500" },
      { name: "Root Touch-Up", price: "₹1,000" },
      { name: "Boto Plex", price: "From ₹5,000" },
      { name: "Plex Treatment", price: "From ₹1,500" },
      { name: "Balayage Hair Colour", price: "From ₹7,000" },
      { name: "Neo Plastia", price: "From ₹6,000" },
    ],
  },
  {
    id: "men-hair", title: "Hair · Men", eyebrow: "02 / Grooming", group: "hair",
    items: [
      { name: "Haircut", price: "₹199" }, { name: "Beard Trimming", price: "₹100" },
      { name: "Shaving", price: "₹150" }, { name: "Hair Colour", price: "₹1,000" },
      { name: "Beard Colour", price: "₹500" },
    ],
  },
  {
    id: "makeup", title: "Makeup & Styling", eyebrow: "03 / The finishing touch", group: "beauty",
    items: [
      { name: "Party Makeup", price: "₹3,000" },
      { name: "Bridal Makeup", price: "From ₹8,000" },
      { name: "Hair Styling", price: "₹700" },
      { name: "Saree Draping", price: "₹600" },
    ],
  },
  {
    id: "threading", title: "Threading", eyebrow: "04 / The details", group: "beauty",
    items: [
      { name: "Full Face Threading", price: "₹200" }, { name: "Eyebrow", price: "₹50" },
      { name: "Upper Lip", price: "₹50" }, { name: "Chin", price: "₹50" },
      { name: "Forehead", price: "₹50" }, { name: "Sidelocks", price: "₹50" },
    ],
  },
  {
    id: "waxing", title: "Waxing", eyebrow: "05 / Smooth finish", group: "beauty",
    description: "Choose between RICA and honey waxing options.",
    items: [
      { name: "Full Arms · RICA", price: "₹600" }, { name: "Full Arms · Honey", price: "₹350" },
      { name: "Full Legs · RICA", price: "₹600" }, { name: "Full Legs · Honey", price: "₹700" },
      { name: "Underarms · RICA", price: "₹250" }, { name: "Underarms · Honey", price: "₹150" },
      { name: "Half Legs · RICA", price: "₹500" }, { name: "Half Legs · Honey", price: "₹300" },
      { name: "Full Body · RICA", price: "₹3,500" }, { name: "Full Body · Honey", price: "₹2,500" },
    ],
  },
  {
    id: "face", title: "Facials & Face Rituals", eyebrow: "06 / Skin sanctuary", group: "beauty",
    description: "Refresh, restore and renew your skin ritual.",
    items: [
      { name: "D-Tan", price: "₹500" }, { name: "Bleach", price: "₹300" },
      { name: "Basic Cleanup", price: "₹400" }, { name: "Fruit Facial", price: "₹700" },
      { name: "Lotus Facial", price: "₹1,200" }, { name: "Korean Facial", price: "₹2,000" },
      { name: "Acne Treatment", price: "₹1,800" }, { name: "Anti-Aging Treatment", price: "₹2,000" },
      { name: "Hydra Facial", price: "₹2,000" }, { name: "O3 Facial", price: "₹2,500" },
      { name: "Full Body Polishing", price: "₹3,000" }, { name: "Full Body D-Tan", price: "₹2,500" },
    ],
  },
  {
    id: "hands-feet", title: "Hands & Feet", eyebrow: "07 / Little luxuries", group: "beauty",
    items: [
      { name: "Cut, File & Polish", price: "₹200" },
      { name: "Premium Pedicure", price: "₹800" }, { name: "Luxury Pedicure", price: "₹1,400" },
      { name: "Premium Manicure", price: "₹800" }, { name: "Luxury Manicure", price: "₹1,400" },
    ],
  },
  {
    id: "massage", title: "Body Massage", eyebrow: "08 / Restorative rituals", group: "body",
    description: "Prices shown for 60 minutes / 90 minutes respectively, as printed in the client menu.",
    items: [
      { name: "Balm Oil Massage", price: "₹1,300 / ₹1,800" },
      { name: "Cream Massage", price: "₹1,700 / ₹1,300" },
      { name: "Deep Tissue Massage", price: "₹2,000 / ₹3,000" },
      { name: "Swedish Massage", price: "₹1,500 / ₹2,200" },
      { name: "Aroma Oil Massage", price: "₹1,500 / ₹2,200" },
      { name: "Red Wine Massage", price: "₹2,000 / ₹3,000" },
      { name: "Thai Massage", price: "₹1,500 / ₹2,000" },
      { name: "Four-Hand Massage", price: "₹2,000 / ₹4,000" },
    ],
  },
  {
    id: "combos", title: "Curated Combos", eyebrow: "09 / More to indulge in", group: "packages",
    items: [
      { name: "Body Massage with Foot Spa", price: "₹2,000", detail: "1 hour" },
      { name: "Foot Reflexology / Foot Spa", price: "₹1,000" },
      { name: "Royal Special Combo Massage", price: "₹3,000", detail: "Massage + facial + foot spa · 1 hour" },
      { name: "Body Massage with Facial", price: "₹1,800", detail: "1 hour" },
      { name: "Body Scrubbing with Massage", price: "₹2,500", detail: "1 hour" },
      { name: "Body Scrubbing with Facial", price: "₹1,800", detail: "1 hour" },
      { name: "Body Polishing", price: "₹3,000", detail: "1 hour" },
    ],
  },
  {
    id: "membership", title: "Signature Memberships", eyebrow: "10 / Stay in your glow", group: "packages",
    description: "Signature-experience prices are shown from the final page of the menu. Please call to confirm package availability and inclusions.",
    items: [
      { name: "Massage with Free Haircut · 3 months", price: "₹3,999", detail: "Deep Tissue ×1 · Aroma ×1 · Swedish ×3" },
      { name: "Massage with Free Haircut · 6 months", price: "₹6,999", detail: "Full Body Scrub ×1 · Red Wine ×1 · Swedish ×6" },
      { name: "Massage, Haircut & Facial · 1 year", price: "₹9,999", detail: "Four-Hand ×1 · 90-minute massage ×1 · Swedish ×10" },
    ],
  },
];

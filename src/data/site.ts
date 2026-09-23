export const siteConfig = {
  name: "PrintHouse 360",
  tagline: "Kila Kitu Unachohitaji Kuchapishwa.",
  description:
    "PrintHouse 360 ni kampuni ya uchapishaji wa kisasa Dar es Salaam, Tanzania. Tunachapisha, tunabrand, tunafikisha. Graphics Design | Logos | Flyers | Banners | Posters | T-Shirts | Mugs | UV Printing | Embroidery | Packaging na zaidi.",
  url: "https://printhouse360.com",

  contact: {
    phone: "+255 750 360 786",
    phoneRaw: "+255750360786",
    whatsapp: "+255750360786",
    email: "info@printhouse360.com",
    address: "Zanaki Street, near 14 Star Supermarket",
    city: "Dar es Salaam",
    country: "Tanzania",
    hours: "Mon–Sat: 8:00–18:00",
  },

  socials: {
    instagram: "https://instagram.com/printhouse360",
    facebook: "https://facebook.com/PrintHouse360",
    tiktok: "https://tiktok.com/@printhouse360",
  },

  nav: [
    { label: "Huduma", href: "/#services" },
    { label: "Kazi Zetu", href: "/#work" },
    { label: "Kuhusu", href: "/#about" },
    { label: "Wasiliana", href: "/#contact" },
  ],

  stats: [
    { value: "10+", label: "Miaka ya Uzoefu" },
    { value: "662+", label: "Kazi Zilizochapishwa" },
    { value: "4.2K+", label: "Wateja" },
    { value: "100%", label: "Kuridhika" },
  ],

  // Huduma halisi za PrintHouse 360
  services: [
    {
      title: "UV Printing",
      description: "Uchapishaji wa UV kwenye surfaces mbalimbali — kioo, mbao, plastic, metal, na zaidi. Inadumu kwa miaka.",
      icon: "Sparkles",
      featured: true,
    },
    {
      title: "Graphics Design",
      description: "Logos, flyers, brochures, posters, calendars, na mabango ya kibunifu yaliyoundwa na wataalamu wetu.",
      icon: "Palette",
      featured: true,
    },
    {
      title: "T-Shirts & Apparel",
      description: "Kuchapisha T-shirts, polo, hoodies kwa brand yako. Screen printing, DTF, sublimation.",
      icon: "Shirt",
      featured: true,
    },
    {
      title: "Cap Embroidery",
      description: "Kofia za brand yako kwa embroidery ya hali ya juu. Kila stitch inaonekana vizuri.",
      icon: "GraduationCap",
      featured: true,
    },
    {
      title: "Large Format Printing",
      description: "Banners, billboards, canvas, backdrops, back wheel covers, na signage kubwa zote.",
      icon: "Maximize",
      featured: true,
    },
    {
      title: "Packaging & Labels",
      description: "Food packaging, gift boxes, paper bags, stickers, labels — kwa bidhaa zako.",
      icon: "Package",
      featured: true,
    },
    {
      title: "Promotional Items",
      description: "Mugs, pens, bottles, notebooks, stickers, calendars — brand yako ionekane popote.",
      icon: "Gift",
    },
    {
      title: "PVC Cards & ID",
      description: "Kadi za PVC, ID cards, loyalty cards, membership cards — print quality ya hali ya juu.",
      icon: "CreditCard",
    },
    {
      title: "Reflective Safety Wear",
      description: "Safety vests, reflective jackets, helmets, uniforms za kampuni na taasisi.",
      icon: "Shield",
    },
    {
      title: "Digital Printing",
      description: "Uchapishaji wa haraka wa kadi, flyers, brochures, posters kwa kiasi kidogo au kikubwa.",
      icon: "Printer",
    },
    {
      title: "Offset Printing",
      description: "Uchapishaji wa wingi kwa gharama nafuu na ubora wa hali ya juu — calendars, magazines, catalogs.",
      icon: "Layers",
    },
    {
      title: "Signage & Displays",
      description: "Point of Sale displays, wood frames, canvas printing, exhibition materials.",
      icon: "Frame",
    },
  ],

  process: [
    { step: "01", title: "Wasiliana", description: "Tuambie unachohitaji kwa simu, WhatsApp au form." },
    { step: "02", title: "Design & Nukuu", description: "Tunatengeneza design na kukupa nukuu ya bure." },
    { step: "03", title: "Print", description: "Tunachapisha kwa mashine za kisasa na wino wa hali ya juu." },
    { step: "04", title: "Delivery", description: "Tunafikisha kwa wakati — Dar es Salaam au kote Tanzania." },
  ],

  portfolio: [
    { title: "Calendars 2027", category: "Offset Printing" },
    { title: "T-Shirt Printing — Tedx Kivukoni", category: "Apparel" },
    { title: "Safety Vest — Imperial Healthcare", category: "Safety Wear" },
    { title: "4x4 Back Wheel Covers", category: "Large Format" },
    { title: "Food Packaging — Taste Point", category: "Packaging" },
    { title: "Canvas Printing", category: "Canvas" },
    { title: "Mk Tech Africa T-Shirt", category: "Apparel" },
    { title: "PVC Cards", category: "Cards" },
    { title: "Company Calendars", category: "Offset Printing" },
    { title: "Changam Display", category: "Signage" },
    { title: "Zash Bottle Branding", category: "Promotional" },
    { title: "DRTC Cap Embroidery", category: "Embroidery" },
  ],

  clients: [
    "DRTC",
    "Zash",
    "Imperial Healthcare",
    "MK Tech Africa",
    "Tedx Kivukoni",
    "Taste Point",
    "Changam",
    "Amana International",
  ],

  testimonials: [
    {
      quote:
        "PrintHouse 360 walichapisha T-shirts zetu za Tedx Kivukoni kwa ubora wa hali ya juu na kwa wakati. Tunawapendekeza kwa kila mtu.",
      name: "Tedx Kivukoni Team",
      role: "Event Organizers",
    },
    {
      quote:
        "Safety vests na helmets za Imperial Healthcare zilichapishwa kwa ubora wa kimataifa. Brand yetu inaonekana vizuri.",
      name: "Imperial Healthcare",
      role: "Corporate Client",
    },
    {
      quote:
        "Calendars zetu za kampuni kwa 2027 zilikuwa nzuri sana. Huduma ya haraka na bei nafuu.",
      name: "Corporate Client",
      role: "Dar es Salaam",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

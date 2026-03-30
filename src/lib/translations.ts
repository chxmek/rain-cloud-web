export type Locale = "th" | "en";

export const translations = {
  th: {
    // ── Navigation ──────────────────────────────────────
    nav: {
      services: "บริการ",
      why: "ทำไม RainCloud",
      process: "กระบวนการ",
      work: "ผลงาน",
      contact: "ติดต่อเรา",
    },

    // ── Hero ────────────────────────────────────────────
    hero: {
      label: "Digital Product Studio",
      headlineLine1: "สร้างผลิตภัณฑ์ดิจิทัลที่น่าเชื่อถือ",
      headlineLine2: "ระบบที่แม่นยำ ประสบการณ์ที่ชัดเจน",
      subline:
        "เราช่วยธุรกิจเปลี่ยนไอเดียและความซับซ้อน ให้กลายเป็นซอฟต์แวร์ เว็บไซต์ และแอปพลิเคชันที่มีคุณภาพจริง",
      ctaPrimary: "เริ่มโปรเจกต์ของคุณ",
      ctaSecondary: "ดูบริการของเรา",
    },

    // ── Services ────────────────────────────────────────
    services: {
      label: "Services",
      headingLine1: "บริการที่ครอบคลุม",
      headingLine2: "ทุกขั้นตอนของดิจิทัลโปรดักต์",
      items: [
        {
          title: "Custom System Development",
          subtitle: "พัฒนาระบบเฉพาะทาง",
          description:
            "ออกแบบและสร้างระบบซอฟต์แวร์ที่ตอบโจทย์ธุรกิจของคุณโดยเฉพาะ ทำงานได้จริง ขยายได้ง่าย ดูแลรักษาได้ในระยะยาว",
        },
        {
          title: "Web App Development",
          subtitle: "พัฒนาเว็บแอปพลิเคชัน",
          description:
            "สร้างเว็บแอปพลิเคชันที่เร็ว เสถียร ใช้งานง่าย ด้วยเทคโนโลยีที่ทันสมัยและโครงสร้างที่พร้อมเติบโต",
        },
        {
          title: "Website Design & Development",
          subtitle: "ออกแบบและพัฒนาเว็บไซต์",
          description:
            "เว็บไซต์ที่สวย โหลดเร็ว SEO ดี สะท้อนภาพลักษณ์แบรนด์ของคุณอย่างแม่นยำ และสร้าง Conversion ได้จริง",
        },
        {
          title: "UX/UI Design",
          subtitle: "ออกแบบ UX/UI",
          description:
            "ออกแบบ Interface ที่สวยงาม ใช้งานง่าย ตอบโจทย์ผู้ใช้จริง ด้วยกระบวนการ Research-driven ที่ลดความเสี่ยง",
        },
      ],
    },

    // ── Why RainCloud ───────────────────────────────────
    why: {
      label: "Why RainCloud",
      headingLine1: "ทำไมต้อง",
      headingLine2: "RainCloud",
      subtext:
        "เราไม่ใช่แค่ทีมพัฒนา เราคือพาร์ทเนอร์ด้านดิจิทัลที่คิดร่วมกับคุณตั้งแต่ต้นจนจบ",
      reasons: [
        {
          title: "คิดเชิงกลยุทธ์",
          description:
            "ทุกโปรเจกต์เริ่มจากการเข้าใจเป้าหมายธุรกิจ ไม่ใช่แค่รับ Brief แล้วลงมือทำ",
        },
        {
          title: "ดีไซน์ที่มีคุณภาพ",
          description:
            "ออกแบบด้วยมาตรฐานระดับสากล ทั้งสวยงาม ใช้งานง่าย และสร้าง Impact ให้แบรนด์",
        },
        {
          title: "โค้ดที่สะอาดและแข็งแรง",
          description:
            "พัฒนาด้วยเทคโนโลยีที่เหมาะสม โครงสร้างโค้ดที่ดูแลรักษาได้ พร้อมขยายในอนาคต",
        },
        {
          title: "โซลูชันที่ตอบโจทย์ธุรกิจ",
          description:
            "ทุกฟีเจอร์ถูกสร้างเพื่อแก้ปัญหาจริง ไม่ใช่แค่ทำให้ครบ Checklist",
        },
        {
          title: "ใส่ใจ Usability & Performance",
          description:
            "โปรดักต์ที่เร็ว เสถียร ใช้งานง่าย และให้ประสบการณ์ที่ดีในทุก Device",
        },
      ],
    },

    // ── Process ─────────────────────────────────────────
    process: {
      label: "Process",
      headingLine1: "กระบวนการที่ชัดเจน",
      headingLine2: "ผลลัพธ์ที่วัดได้",
      steps: [
        {
          title: "Discover",
          subtitle: "ค้นหา",
          description: "เข้าใจเป้าหมาย ปัญหา และบริบทของธุรกิจคุณอย่างลึกซึ้ง",
        },
        {
          title: "Strategy",
          subtitle: "วางกลยุทธ์",
          description: "กำหนดทิศทาง Scope และ Roadmap ที่ชัดเจน",
        },
        {
          title: "Design",
          subtitle: "ออกแบบ",
          description: "สร้างประสบการณ์และ Interface ที่ตอบโจทย์ผู้ใช้จริง",
        },
        {
          title: "Build",
          subtitle: "พัฒนา",
          description: "เขียนโค้ดที่สะอาด แข็งแรง และพร้อมใช้งานจริง",
        },
        {
          title: "Launch",
          subtitle: "เปิดตัว",
          description: "Deploy อย่างมั่นใจ พร้อม Support หลังเปิดตัว",
        },
      ],
    },

    // ── Selected Work ───────────────────────────────────
    work: {
      label: "Selected Work",
      heading: "ผลงานที่คัดสรร",
      subtext: "ตัวอย่างโปรเจกต์ที่สะท้อนคุณภาพและวิธีการทำงานของเรา",
      projects: [
        {
          title: "FinanceHub Platform",
          category: "Web Application • Custom System",
          description:
            "ระบบจัดการการเงินสำหรับองค์กรขนาดกลาง ลดเวลาดำเนินการ 40% ด้วย Dashboard ที่ใช้งานง่ายและ Workflow อัตโนมัติ",
          metrics: ["ลดเวลาทำงาน 40%", "ผู้ใช้ 2,000+ คน"],
        },
        {
          title: "ClearSpace E-Commerce",
          category: "Website • UX/UI Design",
          description:
            "เว็บไซต์ E-Commerce สำหรับแบรนด์ Lifestyle ที่เน้นประสบการณ์การซื้อที่ราบรื่น Conversion Rate เพิ่มขึ้น 65%",
          metrics: ["Conversion +65%", "Page Speed 98/100"],
        },
        {
          title: "MedConnect System",
          category: "Custom System • Web App",
          description:
            "ระบบนัดหมายและจัดการข้อมูลผู้ป่วยสำหรับคลินิก ช่วยลดขั้นตอนการทำงานและเพิ่มความแม่นยำของข้อมูล",
          metrics: ["ลดขั้นตอน 50%", "คลินิก 12 สาขา"],
        },
      ],
    },

    // ── Trust ───────────────────────────────────────────
    trust: {
      label: "Trust & Quality",
      headingLine1: "ความเชื่อมั่นที่สร้างจาก",
      headingLine2: "การทำงานจริง",
      items: [
        {
          title: "มาตรฐานคุณภาพสูง",
          description: "ทุกโปรเจกต์ผ่านกระบวนการ QA และ Code Review อย่างเข้มงวด",
        },
        {
          title: "ลูกค้าเป็นศูนย์กลาง",
          description: "สื่อสารตรงไปตรงมา อัปเดตสม่ำเสมอ ไม่มีเซอร์ไพรส์",
        },
        {
          title: "ส่งมอบตรงเวลา",
          description:
            "วางแผนอย่างรอบคอบ จัดการ Scope อย่างมืออาชีพ ส่งงานตาม Timeline",
        },
        {
          title: "ดูแลหลังส่งมอบ",
          description:
            "Support หลัง Launch พร้อมแนะนำการพัฒนาต่อยอดอย่างมีทิศทาง",
        },
      ],
      testimonials: [
        {
          quote:
            "RainCloud ช่วยให้เราได้ระบบที่ใช้งานจริงได้ตั้งแต่วันแรก ไม่ใช่แค่สวย แต่ทำงานได้จริงทุกฟีเจอร์",
          name: "สมชาย วงศ์ประเสริฐ",
          role: "CEO, TechVenture Co.",
        },
        {
          quote:
            "ทีม RainCloud เข้าใจธุรกิจเราอย่างรวดเร็ว และแปลงความต้องการเป็นดีไซน์ที่เราไม่เคยจินตนาการได้มาก่อน",
          name: "พิมพ์ชนก รัตนกุล",
          role: "Founder, ClearBrand Studio",
        },
      ],
    },

    // ── Final CTA ───────────────────────────────────────
    cta: {
      label: "Start a Project",
      headingLine1: "พร้อมสร้างโปรดักต์ดิจิทัล",
      headingLine2: "ที่ทำงานได้จริง?",
      subtext:
        "เล่าไอเดียหรือโปรเจกต์ของคุณให้เราฟัง แล้วเราจะช่วยวางแผนให้มันเกิดขึ้นจริง",
      button: "เริ่มพูดคุยกับเรา",
      orContact: "หรือติดต่อเราผ่าน",
      scanLine: "สแกน QR เพื่อแอดไลน์",
    },

    // ── Footer ──────────────────────────────────────────
    footer: {
      description:
        "เราช่วยธุรกิจสร้างผลิตภัณฑ์ดิจิทัลที่มีคุณภาพ ตั้งแต่การออกแบบไปจนถึงการพัฒนาและเปิดตัว",
      servicesLabel: "Services",
      contactLabel: "Contact",
      startProject: "เริ่มโปรเจกต์",
      phone: "โทร",
      lineOa: "LINE Official",
      copyright: "© {year} RainCloud. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },

  en: {
    // ── Navigation ──────────────────────────────────────
    nav: {
      services: "Services",
      why: "Why RainCloud",
      process: "Process",
      work: "Work",
      contact: "Contact Us",
    },

    // ── Hero ────────────────────────────────────────────
    hero: {
      label: "Digital Product Studio",
      headlineLine1: "Building trustworthy digital products.",
      headlineLine2: "Precise systems. Clear experiences.",
      subline:
        "We help businesses turn ideas and complexity into high-quality software, websites, and applications that actually work.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View Our Services",
    },

    // ── Services ────────────────────────────────────────
    services: {
      label: "Services",
      headingLine1: "Comprehensive services",
      headingLine2: "for every stage of your digital product",
      items: [
        {
          title: "Custom System Development",
          subtitle: "Tailored Software Systems",
          description:
            "We design and build software systems tailored to your business — reliable, scalable, and maintainable for the long term.",
        },
        {
          title: "Web App Development",
          subtitle: "Modern Web Applications",
          description:
            "Fast, stable, and user-friendly web applications built with modern technology and architecture ready to scale.",
        },
        {
          title: "Website Design & Development",
          subtitle: "Websites That Convert",
          description:
            "Beautiful, fast-loading, SEO-optimized websites that reflect your brand precisely and drive real conversions.",
        },
        {
          title: "UX/UI Design",
          subtitle: "Research-Driven Design",
          description:
            "Elegant, user-friendly interfaces designed through a research-driven process that reduces risk and maximizes impact.",
        },
      ],
    },

    // ── Why RainCloud ───────────────────────────────────
    why: {
      label: "Why RainCloud",
      headingLine1: "Why choose",
      headingLine2: "RainCloud",
      subtext:
        "We're not just a development team — we're your digital partner who thinks with you from start to finish.",
      reasons: [
        {
          title: "Strategic Thinking",
          description:
            "Every project starts with understanding your business goals — not just taking a brief and diving in.",
        },
        {
          title: "Design Quality",
          description:
            "Designed to global standards — beautiful, usable, and impactful for your brand.",
        },
        {
          title: "Clean, Solid Code",
          description:
            "Built with the right technology, maintainable architecture, and future scalability in mind.",
        },
        {
          title: "Business-Focused Solutions",
          description:
            "Every feature is built to solve real problems — not just to check boxes.",
        },
        {
          title: "Usability & Performance",
          description:
            "Products that are fast, stable, easy to use, and deliver a great experience on every device.",
        },
      ],
    },

    // ── Process ─────────────────────────────────────────
    process: {
      label: "Process",
      headingLine1: "A clear process.",
      headingLine2: "Measurable results.",
      steps: [
        {
          title: "Discover",
          subtitle: "Understand",
          description:
            "Deeply understand your goals, challenges, and business context.",
        },
        {
          title: "Strategy",
          subtitle: "Plan",
          description: "Define a clear direction, scope, and roadmap.",
        },
        {
          title: "Design",
          subtitle: "Create",
          description:
            "Craft experiences and interfaces that serve real users.",
        },
        {
          title: "Build",
          subtitle: "Develop",
          description: "Write clean, solid code ready for production.",
        },
        {
          title: "Launch",
          subtitle: "Ship",
          description:
            "Deploy with confidence, with post-launch support included.",
        },
      ],
    },

    // ── Selected Work ───────────────────────────────────
    work: {
      label: "Selected Work",
      heading: "Selected Projects",
      subtext:
        "Example projects that reflect the quality and approach of our work.",
      projects: [
        {
          title: "FinanceHub Platform",
          category: "Web Application • Custom System",
          description:
            "Financial management system for mid-size organizations, reducing processing time by 40% with an intuitive dashboard and automated workflows.",
          metrics: ["40% time reduction", "2,000+ users"],
        },
        {
          title: "ClearSpace E-Commerce",
          category: "Website • UX/UI Design",
          description:
            "E-commerce website for a lifestyle brand, focused on a seamless buying experience. Conversion rate increased by 65%.",
          metrics: ["Conversion +65%", "Page Speed 98/100"],
        },
        {
          title: "MedConnect System",
          category: "Custom System • Web App",
          description:
            "Appointment and patient data management system for clinics, streamlining workflows and improving data accuracy.",
          metrics: ["50% fewer steps", "12 clinic branches"],
        },
      ],
    },

    // ── Trust ───────────────────────────────────────────
    trust: {
      label: "Trust & Quality",
      headingLine1: "Trust built from",
      headingLine2: "real work",
      items: [
        {
          title: "High Quality Standards",
          description:
            "Every project goes through rigorous QA and code review processes.",
        },
        {
          title: "Client-Centered",
          description:
            "Direct communication, regular updates, and no surprises.",
        },
        {
          title: "On-Time Delivery",
          description:
            "Thoughtful planning, professional scope management, and delivery on schedule.",
        },
        {
          title: "Post-Launch Support",
          description:
            "Ongoing support after launch with strategic guidance for future development.",
        },
      ],
      testimonials: [
        {
          quote:
            "RainCloud delivered a system that worked from day one — not just beautiful, but truly functional in every feature.",
          name: "Somchai Wongprasert",
          role: "CEO, TechVenture Co.",
        },
        {
          quote:
            "The RainCloud team understood our business quickly and turned our requirements into designs we never could have imagined.",
          name: "Pimchanok Rattanakul",
          role: "Founder, ClearBrand Studio",
        },
      ],
    },

    // ── Final CTA ───────────────────────────────────────
    cta: {
      label: "Start a Project",
      headingLine1: "Ready to build a digital product",
      headingLine2: "that actually works?",
      subtext:
        "Tell us about your idea or project, and we'll help you plan to make it real.",
      button: "Let's Talk",
      orContact: "or reach us via",
      scanLine: "Scan QR to add LINE",
    },

    // ── Footer ──────────────────────────────────────────
    footer: {
      description:
        "We help businesses create high-quality digital products — from design through development to launch.",
      servicesLabel: "Services",
      contactLabel: "Contact",
      startProject: "Start a Project",
      phone: "Call",
      lineOa: "LINE Official",
      copyright: "© {year} RainCloud. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
} as const;

export type Translations = {
  nav: { services: string; why: string; process: string; work: string; contact: string };
  hero: { label: string; headlineLine1: string; headlineLine2: string; subline: string; ctaPrimary: string; ctaSecondary: string };
  services: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    items: readonly { title: string; subtitle: string; description: string }[];
  };
  why: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    subtext: string;
    reasons: readonly { title: string; description: string }[];
  };
  process: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    steps: readonly { title: string; subtitle: string; description: string }[];
  };
  work: {
    label: string;
    heading: string;
    subtext: string;
    projects: readonly { title: string; category: string; description: string; metrics: readonly string[] }[];
  };
  trust: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    items: readonly { title: string; description: string }[];
    testimonials: readonly { quote: string; name: string; role: string }[];
  };
  cta: { label: string; headingLine1: string; headingLine2: string; subtext: string; button: string; orContact: string; scanLine: string };
  footer: {
    description: string;
    servicesLabel: string;
    contactLabel: string;
    startProject: string;
    phone: string;
    lineOa: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
};

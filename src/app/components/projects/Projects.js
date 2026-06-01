import React from 'react'
import Title from '../layouts/Title'
import projectOne from "../../assets/images/projects/streamtube.png";
import projectTwo from "../../assets/images/projects/shopcart.png";
import projectThree from "../../assets/images/projects/nexvenda.png";
import projectFour from "../../assets/images/projects/abadel.png";
import projectSix from "../../assets/images/projects/raven.png";
import projectTeleios from "../../assets/images/projects/Teleios.png";
import ProjectsCard from './ProjectsCard';

const ravenDetails = {
  companyName: "Raven Energy Ltd",
  companyWebsite: "https://www.ravenenergyltd.com/",
  category: "Enterprise Logistics",
  primaryColor: "#C82830",
  secondaryColor: "#F7B032",
  aboutCompany: "Raven Energy is a premium energy supplier in Nigeria, delivering safe, reliable, and high-purity Jet A-1 aviation fuel since 2019. Known for operational excellence, Raven operates nationwide with key hubs in Lagos, Abuja, and Port Harcourt, partnering with commercial airlines and private operators.",
  stats: [
    { label: "On-Time Delivery", value: "99.9%" },
    { label: "Fuel Quality Compliance", value: "100%" },
    { label: "Operational Experience", value: "5+ Years" },
    { label: "Turnaround Time", value: "< 45 mins" },
  ],
  coreValues: [
    { symbol: "R", name: "Reliability", desc: "Consistent, dependable energy solutions without compromise." },
    { symbol: "A", name: "Accountability", desc: "Taking full responsibility for safety, operations, and performance." },
    { symbol: "V", name: "Value Creation", desc: "Creating lasting value for customers, partners, and stakeholders." },
    { symbol: "E", name: "Excellence", desc: "Upholding the highest standards in operations and safety." },
    { symbol: "N", name: "Integrity (Noble Conduct)", desc: "Honesty and transparency form the bedrock of all relationships." },
    { symbol: "S", name: "Safety First", desc: "Zero-compromise safety protocols from depot to runway." }
  ],
  features: [
    {
      title: "Depot-to-Runway Logistics",
      desc: "Full-scale logistics management system that orchestrates Jet A-1 supply chains smoothly across key airport terminals including Lagos, Abuja, and Port Harcourt.",
      icon: "FaRoute"
    },
    {
      title: "Real-time GPS & Fleet Tracking",
      desc: "Integrated mapping system showing fuel truck coordinates, real-time volume discharge sensors, and predicted ETA to ensure rapid, transparent refuels.",
      icon: "FaMapMarkedAlt"
    },
    {
      title: "Digital Quality Assurance (QA)",
      desc: "Comprehensive traceability reports for every batch. Allows rapid lookup of test certificates, density metrics, and purity checks to comply with international standards.",
      icon: "FaShieldAlt"
    },
    {
      title: "Airlines & Credit Portal",
      desc: "A sleek billing system for corporate airlines to coordinate spot volumes, secure long-term purchase contracts, and view active credit balances with 24/7 support.",
      icon: "FaCreditCard"
    }
  ],
  impact: [
    "Architected and developed a responsive React-based admin dashboard that visualizes fuel truck status, automated delivery ETAs, and fuel inventory.",
    "Integrated custom map features and analytics charts using Framer Motion and custom graphs, achieving zero latency updates for dispatchers.",
    "Designed a premium, responsive UX that reduces turnaround delay and enables flight operators to request immediate into-plane fueling."
  ]
};

const streamtubeDetails = {
  companyName: "StreamTube Cinema Platform",
  companyWebsite: "https://streamtube-iota.vercel.app/",
  category: "Entertainment & Media",
  primaryColor: "#E50914",
  secondaryColor: "#FF3E3E",
  aboutCompany: "StreamTube is a high-performance web application designed for seamless movie trailer streaming and content discovery. Engineered with secure NextAuth authentication and seamless YouTube Player API integrations, it offers a premium cinematic viewing experience for film enthusiasts.",
  stats: [
    { label: "Lighthouse Score", value: "95%" },
    { label: "Build Time", value: "2 Weeks" },
    { label: "Session Success", value: "100%" },
    { label: "User Access", value: "Protected" },
  ],
  coreValues: [
    { symbol: "S", name: "Speed", desc: "Optimized video loading and page assets for instantaneous streaming." },
    { symbol: "U", name: "UX Excellence", desc: "Immersive dark mode UI, prioritizing typography and cinematic focus." },
    { symbol: "S", name: "Security First", desc: "Secure multi-provider social authentication via GitHub and Google credentials." }
  ],
  features: [
    {
      title: "YouTube API Playback Integration",
      desc: "Deep integration with the YouTube player API, delivering buttery-smooth trailer streaming and in-app play controls.",
      icon: "FaPlay"
    },
    {
      title: "NextAuth Authentication Flow",
      desc: "Secure user registration, social login bridges, and session-protected user state across all streaming routes.",
      icon: "FaUserLock"
    },
    {
      title: "Cinematic Dark Design",
      desc: "A visually stunning dark-mode layout with responsive cover sliders and dynamic movie category columns.",
      icon: "FaFilm"
    },
    {
      title: "Infinite Discovery & Search",
      desc: "Fast client-side content searches and filtering controls, making it effortless to find new trending releases.",
      icon: "FaSearch"
    }
  ],
  impact: [
    "Built and deployed the entire application end-to-end in just two weeks as the sole developer.",
    "Configured session-guarded route middleware in Next.js to restrict trailer access to logged-in users.",
    "Optimized layout cumulative shift (CLS) score by implementing responsive placeholder cards."
  ]
};

const shopcartDetails = {
  companyName: "ShopCart E-Commerce Suite",
  companyWebsite: "https://shopcart-coral.vercel.app/",
  category: "E-Commerce Suite",
  primaryColor: "#0070F3",
  secondaryColor: "#10B981",
  aboutCompany: "ShopCart is an advanced, full-featured online store that bridges product browsing, inventory tracking, secure payments, and order tracking under a clean, unified workspace. Designed with a robust MongoDB database and Prisma ORM, it handles hundreds of checkout sessions smoothly.",
  stats: [
    { label: "Page Load Time", value: "< 2.5s" },
    { label: "Checkout Funnel", value: "Stripe" },
    { label: "Receipting", value: "Automated" },
    { label: "Backend ORM", value: "Prisma" },
  ],
  coreValues: [
    { symbol: "F", name: "Flexibility", desc: "Highly customizable product grids supporting complex variants and categories." },
    { symbol: "R", name: "Reliability", desc: "Zero-failure checkout funnel backed by Stripe payment webhooks." },
    { symbol: "E", name: "Efficiency", desc: "Instant cart updates and price calculations utilizing lightweight client state." }
  ],
  features: [
    {
      title: "Full-featured Stripe Checkout",
      desc: "Secure tokenized payments with discount code parsing, inventory locks, and automated payment receipting.",
      icon: "FaCreditCard"
    },
    {
      title: "Prisma & MongoDB Backend",
      desc: "Highly optimized database schema configured to handle high concurrency during seasonal shopping peaks.",
      icon: "FaDatabase"
    },
    {
      title: "Admin Catalog Management",
      desc: "Complete admin dashboard to create products, update pricing, upload images, and manage real-time inventory.",
      icon: "FaCogs"
    },
    {
      title: "Dynamic Cart & Session Tracking",
      desc: "Localized shopping carts synced in real-time with user sessions for persistent cross-device shopping.",
      icon: "FaShoppingCart"
    }
  ],
  impact: [
    "Integrated a custom Stripe webhook processor that reduced cart abandonment rates by recovering interrupted sessions.",
    "Architected the relational schema using Prisma, enabling 10x faster query speeds for complex product filters.",
    "Engineered an administrative inventory portal that tracks low-stock thresholds automatically."
  ]
};

const nexvendaDetails = {
  companyName: "Nexvenda Creator Commerce",
  companyWebsite: "https://nexvenda.org",
  category: "Creator Commerce",
  primaryColor: "#7C3AED",
  secondaryColor: "#EC4899",
  aboutCompany: "Nexvenda is an all-in-one creator commerce platform designed for African entrepreneurs to monetize digital products, online courses, and services. Integrating secure multi-currency checkouts (Paystack + Stripe) and automated affiliate networks, it empowers creators to build digital businesses.",
  stats: [
    { label: "Supported Currencies", value: "NGN/USD" },
    { label: "Referral Commission", value: "Automated" },
    { label: "File Delivery", value: "Instant" },
    { label: "Target Market", value: "Africa" },
  ],
  coreValues: [
    { symbol: "E", name: "Empowerment", desc: "Providing local creators with the tools to sell globally." },
    { symbol: "S", name: "Scalability", desc: "Multi-tenant billing architecture built to scale with growing sales." },
    { symbol: "T", name: "Trust & Safety", desc: "End-to-end security for payment channels and automated payouts." }
  ],
  features: [
    {
      title: "Multi-Currency Checkouts",
      desc: "Seamless payment routing integrating Paystack for local African currencies and Stripe for international USD card payments.",
      icon: "FaCoins"
    },
    {
      title: "Automated Affiliate Network",
      desc: "Complete tracking system for product referrers with automated commission splits and instant dashboard stats.",
      icon: "FaUsers"
    },
    {
      title: "Secure Digital Vault",
      desc: "Encrypted cloud storage for ebooks and digital assets with expirable, single-use download links.",
      icon: "FaLock"
    },
    {
      title: "Creator Analytics Dashboard",
      desc: "Beautiful analytical charts displaying sales trends, top-selling referrers, and growth metrics.",
      icon: "FaChartLine"
    }
  ],
  impact: [
    "Served as Lead Full-Stack Developer, designing the payment checkout experience and affiliate management engine.",
    "Configured a dual Paystack/Stripe integration, enabling local merchants to accept international payments instantly.",
    "Built the dashboard analytics widget using custom responsive charts, providing creators with immediate sales summaries."
  ]
};

const abadelDetails = {
  companyName: "Abadel Luxury Real Estate & Rental",
  companyWebsite: "https://abadel.vercel.app/",
  category: "Luxury Real Estate",
  primaryColor: "#B45309",
  secondaryColor: "#F59E0B",
  aboutCompany: "Abadel Homes & Properties is a premium digital showcase presenting shortlet hospitality bookings, real estate wealth management, and elite SUV vehicle rentals. The platform delivers a high-end web experience crafted with buttery smooth animations to reflect absolute luxury.",
  stats: [
    { label: "Booking Engine", value: "Interactive" },
    { label: "Elite SUV Fleet", value: "Luxury Stays" },
    { label: "Active Listings", value: "30+ Listings" },
    { label: "Page Load Increase", value: "+40%" },
  ],
  coreValues: [
    { symbol: "L", name: "Luxury Aesthetics", desc: "High-end design system that conveys premium branding and comfort." },
    { symbol: "S", name: "Simplicity", desc: "Clean booking funnels for stays, investments, and fleet services." },
    { symbol: "S", name: "Speed Optimization", desc: "Optimized image delivery for beautiful luxury real estate listings." }
  ],
  features: [
    {
      title: "Interactive Shortlet Engine",
      desc: "Rich reservation interface matching calendar dates, guest capacity, and location listings for luxury stays.",
      icon: "FaBed"
    },
    {
      title: "Elite Mobility Fleet Rental",
      desc: "Elegant car rental dashboard showcasing high-end SUV features, automated daily rates, and immediate rental booking.",
      icon: "FaCar"
    },
    {
      title: "Real Estate Assets Portfolio",
      desc: "Comprehensive investment portal highlighting strategic real estate assets, investment packages, and returns charts.",
      icon: "FaBuilding"
    },
    {
      title: "Swiper & Motion Carousels",
      desc: "Beautiful, hardware-accelerated image carousels that present properties and vehicles with high premium clarity.",
      icon: "FaImages"
    }
  ],
  impact: [
    "Lead Frontend Developer — designed the entire luxury UI layout and interactive booking funnel.",
    "Created custom components powered by Framer Motion, elevating property browsing with smooth transition sequences.",
    "Optimized heavy high-res image loading using Next.js Image component, improving mobile page load times by 40%."
  ]
};

const teleiosDetails = {
  companyName: "Teleios — AI DevOps Assessment",
  companyWebsite: "https://teleios-devops-assessment.vercel.app/",
  category: "AI Screening & DevOps",
  primaryColor: "#06B6D4",
  secondaryColor: "#3B82F6",
  aboutCompany: "Teleios is a next-generation technical screening platform that uses Eva — a cinematic AI interviewer — to evaluate DevOps engineers across seven critical pillars in just 30 minutes. No MCQs, no trick questions; just real-world scenario-based voice conversations that probe actual engineering depth, with AI-accurate scoring and 24-hour results.",
  stats: [
    { label: "Technical Pillars", value: "7" },
    { label: "Assessment Time", value: "30 min" },
    { label: "AI Accuracy", value: "100%" },
    { label: "Results Turnaround", value: "24 hrs" },
  ],
  coreValues: [
    { symbol: "V", name: "Voice-First UX", desc: "Candidates speak naturally — no typing, just a technical conversation with the AI." },
    { symbol: "I", name: "Integrity", desc: "AI proctoring and focus monitoring keep every session honest and trusted by employers." },
    { symbol: "A", name: "Adaptivity", desc: "Eva adapts questions in real-time based on candidate responses, calibrating difficulty live." }
  ],
  features: [
    {
      title: "Eva — AI Cinematic Interviewer",
      desc: "A conversational AI interviewer that conducts live scenario-based voice interviews, asking intelligent follow-ups and calibrating question depth based on your answers.",
      icon: "FaUsers"
    },
    {
      title: "7 DevOps Pillar Coverage",
      desc: "Deep assessments across Kubernetes, CI/CD, Infrastructure as Code, Observability, Security, SRE, and Terraform — evaluated in a single seamless session.",
      icon: "FaChartLine"
    },
    {
      title: "AI Proctoring & Anti-Cheat",
      desc: "Real-time video proctoring with focus monitoring and session integrity scoring, giving employers a fully verifiable and trusted result.",
      icon: "FaShieldAlt"
    },
    {
      title: "Instant On-Demand Access",
      desc: "No scheduling, no waiting. Candidates launch their assessment instantly from any device with a camera and microphone — results ready within 24 hours.",
      icon: "FaPlay"
    }
  ],
  impact: [
    "Architected the cinematic, animated landing page that communicates Teleios's AI-first value proposition with high visual polish.",
    "Built the assessment flow UI — including the Eva interview interface, progress tracker across 7 pillars, and real-time feed indicators.",
    "Implemented session integrity overlays, webcam/mic permission flows, and anti-distraction focus guards for the proctored interview experience."
  ]
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="My Work"
          des="Featured Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">

        <ProjectsCard
          title="Movie Streaming App"
          des="Built a responsive movie streaming platform with user authentication and YouTube video integration. Features a clean, modern UI with seamless playback and secure NextAuth login."
          src={projectOne}
          github="https://github.com/Arisekola177/streamtube"
          live="https://streamtube-iota.vercel.app/"
          techStack={["Next.js", "NextAuth", "YouTube API", "Tailwind CSS"]}
          role="Sole developer — built and deployed end-to-end in 2 weeks"
          details={streamtubeDetails}
        />

        <ProjectsCard
          title="E-commerce Platform"
          des="Full-featured online store with product management, shopping cart, secure Stripe checkout, and admin capabilities. Handles order processing and user account management with a scalable MongoDB backend."
          src={projectTwo}
          github="https://github.com/Arisekola177/shopcart"
          live="https://shopcart-coral.vercel.app/"
          techStack={["Next.js", "Prisma", "MongoDB", "Stripe", "NextAuth"]}
          role="Integrated Stripe payments reducing cart abandonment with a smooth checkout flow"
          details={shopcartDetails}
        />

        <ProjectsCard
          title="Nexvenda Creator Platform"
          des="An all-in-one creator commerce platform for African entrepreneurs to sell ebooks, online courses, and digital/physical services. Features secure multi-currency payments and an automated affiliate program network."
          src={projectThree}
          github=""
          live="https://nexvenda.org"
          techStack={["Next.js", "React", "Tailwind CSS", "MongoDB", "Stripe", "Paystack"]}
          role="Lead Full-Stack Developer — Built landing page, payment checkouts, and affiliate portal"
          details={nexvendaDetails}
        />

        <ProjectsCard
          title="Abadel Homes & Properties"
          des="A premium shortlet hospitality, real estate investment, and elite mobility platform. Offers a booking engine for luxury stays, strategic real estate assets portfolio management, and high-end SUV fleet rentals."
          src={projectFour}
          github=""
          live="https://abadel.vercel.app/"
          techStack={["Next.js", "React", "Swiper", "Tailwind CSS", "Framer Motion"]}
          role="Lead Frontend Developer — Developed the luxurious shortlet booking layout, high-end fleet rental interface, and interactive portfolio."
          details={abadelDetails}
        />

        <ProjectsCard
          title="Raven Aviation Fuel Platform"
          des="Redesigned operations and logistics dashboard for Raven Energy, Nigeria's leading aviation fuel provider. Visualizes depot-to-runway logistics, real-time GPS truck routing, automated fuel quality reports, and airline billing."
          src={projectSix}
          github=""
          live="https://www.ravenenergyltd.com/"
          techStack={["Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "AWS Amplify"]}
          role="Lead Frontend Developer — built operations dashboard, real-time logistics visualizers, and QA logs"
          details={ravenDetails}
        />

        <ProjectsCard
          title="Teleios DevOps Assessment"
          des="Built the cinematic AI-powered DevOps screening platform — featuring Eva, an adaptive voice interviewer, that evaluates engineers across 7 critical pillars (Kubernetes, CI/CD, IaC, Observability, Security, SRE, Terraform) with AI proctoring and 24-hour scored results."
          src={projectTeleios}
          github=""
          live="https://teleios-devops-assessment.vercel.app/"
          techStack={["Next.js", "React", "Tailwind CSS", "Framer Motion", "AI/Voice API"]}
          role="Frontend Developer — built the cinematic Eva interview UI, pillar-flow engine, and proctoring overlays"
          details={teleiosDetails}
        />

      </div>
    </section>
  );
}

export default Projects;
# Azeez Saibu — Professional DevOps & Frontend Portfolio

A premium, high-fidelity developer portfolio website designed for **Azeez Saibu**, showcasing engineering milestones, dynamic case studies, professional timeline, technical expertise, and custom integrations. Built on top of **Next.js 14**, styled with **Tailwind CSS**, and brought to life with **Framer Motion** physics-based animations.

---

## ✨ Key Features

### 🚀 1. Immersive Dynamic Case Study Modals
Clicking any showcase card or screenshot opens an interactive, backdrop-blurred modal detailing:
* **Custom Brand Customization**: Dynamic gradients, badge colors, metric highlights, and button glows mapping directly to the client's brand (e.g., Orange/Red for *Raven Energy*, Tech Cyan for *Teleios*).
* **Strategic Metrics & Achievements**: Core highlights detailing role, specific engineering contributions, business impact, and platform statistics.
* **Component-Level Tabs**: Modular layouts highlighting overview summaries, core feature cards, developer impact bullet points, and live web access links.

### 📚 2. Active Technical Expertise Tracker
* Displays key professional skills (Frontend engineering, systems design, testing).
* Highlights a dedicated **"Currently Learning"** section focusing on **Docker** and **DevOps** using continuous-integration loop representations (`FaInfinity`).

### 💼 3. Professional Experience Timeline
* Displays chronological career progression including detailed entries for **Teleios** (2023 – Present) and full-stack freelancing on **Upwork** (2020 – 2024).
* Globally aligned metadata to represent **5+ years of industry experience** across bio segments, headers, and SEO schemas.

### 📥 4. Direct Resume Funnel
* Interactive Hero action buttons configured to directly trigger browser downloads for `Saibu_Azeez.pdf` locally served from the `/public` asset directory.

### 📪 5. Frontend-Only CORS-Free Contact Form
* Integrated **FormSubmit.co** directly into the frontend form submission flow.
* Utilizes a `fetch` post request with `mode: 'no-cors'` and `application/x-www-form-urlencoded` format (via `URLSearchParams`).
* Bypasses browser CORS preflight checks entirely and eliminates the need for maintaining SMTP backend servers or storing sensitive credentials.

---

## 🛠️ Technology Stack

* **Framework:** Next.js 14.2.3 (React 18)
* **Styling & Design:** Tailwind CSS & Custom CSS tokens
* **Animations:** Framer Motion (physics-based transitions, interactive scale-ups, overlay presence)
* **Form & Validation:** React Hook Form & Zod Resolver
* **Icons:** React Icons

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** v18+ is required.

### 1. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Run the Development Server
Launch the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

### 3. Production Build
Compile the application for production deployment:
```bash
npm run build
```

---

## 📂 Project Structure

```text
├── public/                 # Static assets (PDF resumes, screenshots, brand logos)
├── src/
│   ├── app/
│   │   ├── components/     # Modular React UI components
│   │   │   ├── banner/     # Hero & Main Header banner
│   │   │   ├── contact/    # Frontend contact form
│   │   │   ├── projects/   # Interactive case studies cards & modals
│   │   │   ├── resume/     # Professional education & work history timeline
│   │   │   └── skills/     # Technical skill tracker
│   │   │   └── footer/     # Footer elements
│   │   ├── constants/      # Static data content and configurations
│   │   ├── data/           # Core resume & project details schema sets
│   │   ├── layout.js       # App shell & Global SEO Meta headers
│   │   ├── page.js         # Core main index page
│   │   └── globals.css     # Global styles & tailwind configurations
```

---

## 📪 Contact Form Initialization
On the very first contact form submission:
1. Fill out the form and click **Send Message**.
2. FormSubmit will dispatch a **one-time activation email** to the target inbox.
3. Click the activation link in that email to authorize future form submissions.

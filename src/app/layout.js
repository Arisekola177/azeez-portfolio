
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Saibu Azeez (Arisekola) | Full-Stack Web Developer",
  description:
    "Full-Stack Developer with 5+ years of experience building fast, scalable web applications using Next.js, React, Node.js, and MongoDB. Based in Lagos, Nigeria — open to remote opportunities worldwide.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Freelance Web Developer",
    "Lagos Nigeria Developer",
    "Saibu Azeez",
    "Arisekola",
  ],
  authors: [{ name: "Saibu Azeez" }],
  creator: "Saibu Azeez",
  openGraph: {
    title: "Saibu Azeez (Arisekola) | Full-Stack Web Developer",
    description:
      "Building fast, scalable, and user-friendly web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-auto bg-bodyColor text-lightText px-4">
          <Navbar />
          <div className="max-w-screen-xl mx-auto">{children}</div>
          <Footer />
          <FooterBottom />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
        />
      </body>
    </html>
  );
}

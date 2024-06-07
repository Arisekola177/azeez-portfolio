
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Saibu Azeez || Personal Portfolio",
  description: "web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <div className="w-full h-auto bg-bodyColor text-lightText px-4">
     <Navbar />
      <div className="max-w-screen-xl mx-auto">
      {children}
      </div>
         <Footer />
        <FooterBottom />
      </div>
      </body>
    </html>
  );
}

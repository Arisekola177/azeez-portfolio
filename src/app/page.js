import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";


export default function Home() {
  return (
    <div> 
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />  
    </div>
  );
}

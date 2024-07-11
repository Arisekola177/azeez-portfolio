'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Web developer.", "Creative Thinker.", "JavaScript Expert.", "Problem Solver.", "Team Player."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col py-4 gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="xs:text-sm lg:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="lg:text-6xl xs:text-2xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Saibu azeez</span>
        </h1>
        <h2 className="lg:text-4xl xs:text-xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="lg:text-sm  xs:text-xs font-bodyFont text-justify leading-6">
         My expertise lies in translating design concepts into seamless, responsive layouts, utilizing HTML, CSS, and JavaScript to bring ideas to life with precision and finesse.
         Beyond coding, I am deeply invested in user-centered design principles. Whether brainstorming ideas, troubleshooting issues, or iterating on feedback, I approach every interaction with enthusiasm and a commitment to excellence.
         I am eager to contribute my skills and creativity to projects that inspire and challenge me, forging meaningful connections and leaving a lasting impact on the digital landscape.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
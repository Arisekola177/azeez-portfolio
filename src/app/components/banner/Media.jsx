import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <Link href='https://github.com/Arisekola177/' target='blank'>
               <FaGithub />
               </Link>
            </span>
            <span className="bannerIcon">
               <Link href='https://twitter.com/Harysekola' target='blank'>
               <FaTwitter/>
               </Link>
            </span>
            <span className="bannerIcon">
               <Link href='https://www.linkedin.com/in/azeez-saibu-43b554190/' target='blank'>
                <FaLinkedinIn  />
               </Link>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media
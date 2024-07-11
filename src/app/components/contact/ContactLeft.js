
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import  contactImg  from "../../assets/images/contact/contactImg.png";
import Image from "next/image";
import Link from "next/link";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
        width='auto'
        height='auto'
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Saibu Azeez</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-sm text-justify text-gray-400 ">
        My expertise lies in translating design concepts into seamless, responsive layouts, utilizing HTML, CSS, and JavaScript to bring ideas to life with precision and finesse.

        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 8064272889</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">shuaibazeez14@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft
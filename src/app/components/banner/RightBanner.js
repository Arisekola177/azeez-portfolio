import headshot from "../../assets/headshot.png";
import Image from 'next/image';

const RightBanner = () => {
  return (
    <div className="w-full xl:py-20 lgl:w-1/2 flex justify-center items-center relative">
      {/* Glowing ring / gradient border effect */}
      <div className="relative w-[300px] h-[300px] lgl:w-[380px] lgl:h-[380px] xl:w-[420px] xl:h-[420px]">
        {/* Outer animated gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-designColor via-pink-500 to-purple-600 animate-spin-slow opacity-80 blur-sm" />
        {/* Inner solid ring */}
        <div className="absolute inset-[4px] rounded-full bg-bodyColor z-10" />
        {/* Photo */}
        <Image
          className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover object-top z-20"
          src={headshot}
          width={420}
          height={420}
          alt="Saibu Azeez - Full-Stack Developer"
          priority
        />
      </div>
      {/* Background gradient block */}
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center -z-10" />
    </div>
  );
};

export default RightBanner;
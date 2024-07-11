
import  bannerImg  from "../../assets/Ola.jpg";
import Image from 'next/image';

const RightBanner = () => {
  return (
    <div className="w-full xl:py-20 lgl:w-1/2 flex justify-center items-center relative">
      <Image
        className="w-[300px] h-[300px] lgl:w-[370px] lgl:h-[370px] xl:w-[400px] xl:h-[400px] rounded-full z-10"
        src={bannerImg}
        width='auto'
        height='auto'
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner
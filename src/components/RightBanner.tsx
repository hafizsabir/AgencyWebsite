import  DSC_8388  from "../assets/images/ManInBlack.png";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 ml-12 lgl:ml-20"
        src={DSC_8388}
        alt="bannerImg"
      />
      {/* <div className={`absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] shadow-shadowOne flex justify-center items-center ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-[#1e2024] to-[#202327]' 
          : 'bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400'
      }`}></div> */}
    </FadeIn>
  );
};

export default RightBanner;

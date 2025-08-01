import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { useTheme } from "../context/ThemeContext";

const Banner = () => {
  const { theme } = useTheme();
  
  return (
    <section
      id="Home"
      className={`w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont ${
        theme === 'dark' ? 'border-b-gray-700' : 'border-b-slate-300'
      }`}
    >
      <LeftBanner />
      
      <RightBanner />
      
    </section>
  );
};

export default Banner;

import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

interface Props {
  title: string;
  des: string;
  src: string;
}

const ProjectsCard = ({ title, des, src }: Props) => {
  const { theme } = useTheme();
  
  return (
    <div className={`w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col group transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 shadow-shadowOne' 
        : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 hover:bg-gradient-to-b hover:from-slate-100 hover:to-slate-300 shadow-lg shadow-slate-300/50 border border-slate-200'
    }`}>
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href="" target="_blank">
                <span className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center hover:text-designColor duration-300 cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-black text-gray-400' 
                    : 'bg-slate-300 text-slate-600 hover:bg-slate-400'
                }`}>
                  <BsGithub />
                </span>
              </a>
              <a href="" target="_blank">
                <span className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center hover:text-designColor duration-300 cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-black text-gray-400' 
                    : 'bg-slate-300 text-slate-600 hover:bg-slate-400'
                }`}>
                <FaLink />
                </span>
              </a>
            </div>
          </div>
          <p className={`text-sm tracking-wide mt-3 duration-300 ${
            theme === 'dark' 
              ? 'hover:text-gray-100' 
              : 'text-slate-600 hover:text-slate-800'
          }`}>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

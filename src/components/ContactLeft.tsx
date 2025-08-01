import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../assets";
import { useTheme } from "../context/ThemeContext";

const ContactLeft = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center ${
      theme === 'dark' 
        ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
        : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
    }`}>
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className={`text-3xl font-bold ${
          theme === 'dark' ? 'text-white' : 'text-slate-800'
        }`}>Sabir Ali</h3>
        <p className={`text-lg font-normal ${
          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
        }`}>
          Full Stack Developer
        </p>
        <p className={`text-base tracking-wide ${
          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
        }`}>
          A c# Developer worked on Differen Mobile& IOS Games,Currently working as a Asp.net Core Developer and React Js Developer
        </p>
        <p className={`text-base flex items-center gap-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
        }`}>
          Phone: <span className={theme === 'dark' ? 'text-lightText' : 'text-slate-800'}>+92-321-7747526</span>
        </p>
        <p className={`text-base flex items-center gap-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
        }`}>
          Email: <span className={theme === 'dark' ? 'text-lightText' : 'text-slate-800'}>hafizsabir97@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className={`text-base uppercase font-titleFont mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-800'
        }`}>Find me in</h2>
        <div className="flex gap-4">
         
          <a
            href="https://www.linkedin.com/in/sabir-ali-41061310b/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

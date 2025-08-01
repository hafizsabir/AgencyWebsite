import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import  logo  from "../assets/images/WebLogo.png";
import { navLinksdata } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme();
  
  return (
    <div className={`w-full h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors mx-auto flex justify-between items-center font-titleFont border-b-[1px] px-6 lg:px-8 ${
      theme === 'dark' 
        ? 'bg-bodyColor/70 border-b-gray-600' 
        : 'bg-slate-100/80 border-b-slate-300 shadow-sm'
    }`}>
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="logo" 
          className="h-12 w-auto transition-transform duration-300 hover:scale-105 cursor-pointer" 
        />
      </div>
      <div className="flex items-center gap-6">
        <ul className="hidden mdl:inline-flex items-center gap-8 lg:gap-12">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className={`relative group ${
                theme === 'dark' ? 'text-white' : 'text-slate-700'
              }`}
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-base font-medium tracking-wide cursor-pointer hover:text-designColor duration-300 relative"
              >
                {title}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-designColor transition-all duration-300 group-hover:w-full ${
                  theme === 'dark' ? 'bg-designColor' : 'bg-designColor'
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden mdl:flex items-center gap-4 ml-4">
          <div className={`px-3 py-2 rounded-lg ${
            theme === 'dark' 
              ? 'bg-black/20 border border-gray-600' 
              : 'bg-slate-200/50 border border-slate-300'
          }`}>
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center gap-3 mdl:hidden">
          <div className={`px-2 py-1 rounded-lg ${
            theme === 'dark' 
              ? 'bg-black/20 border border-gray-600' 
              : 'bg-slate-200/50 border border-slate-300'
          }`}>
            <ThemeToggle />
          </div>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className={`text-xl w-10 h-10 inline-flex items-center justify-center rounded-lg text-designColor cursor-pointer transition-all duration-300 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-black/20 border border-gray-600 hover:bg-black/30' 
                : 'bg-slate-200/50 border border-slate-300 hover:bg-slate-300/50'
            }`}
          >
            <FiMenu />
          </span>
        </div>
        {showMenu && (
          <div className={`w-[80%] h-screen mdl:hidden overflow-scroll absolute top-0 left-0 p-4 scrollbar-hide ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-slate-100'
          }`}>
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className={`text-sm mt-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className={`text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className={`text-base uppercase font-titleFont mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="" target="_blank">
                    <span className="bannerIcon">
                      <FaYoutube />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sabir-ali-41061310b/"
                    target="_blank"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className={`absolute top-4 right-4 hover:text-designColor duration-300 text-2xl cursor-pointer ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

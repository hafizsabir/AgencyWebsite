import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  FaLinkedinIn, FaReact } from "react-icons/fa";
import Title from "./Title";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Backend Developer.",  "React/Next.js Developer."],
    loop: true, 
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sabir Ali</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        I'm persuing my career as a Full Stack Developer. I have strong Grip on React Js/Next Js,Asp.net Core c# and Reational  databases like MySQL,SQL Server,Postgre SQL and No SQL Databases MongoDb.
        </p>
        <Title title="Past Experience : C# Unity" des="" />
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
      
    </FadeIn>
  );
};

export default LeftBanner;

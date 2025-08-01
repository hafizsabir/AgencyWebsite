import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne} from "../assets";
import RealEstate from '../assets/images/projects/RealEstaet.jpg'
import AgencyWebsite from '../assets/images/projects/AgencyWeb.jpg'
import Ecommerceweb from '../assets/images/projects/ecommerceWeb.jpg'
import { useTheme } from "../context/ThemeContext";

import { FadeIn } from "./FadeIn";

const Projects = () => {
  const { theme } = useTheme();
  
  return (
    <section
      id="projects"
      className={`w-full py-20 border-b-[1px] ${
        theme === 'dark' ? 'border-b-gray-700' : 'border-b-slate-300'
      }`}
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" To Gain Hand On experience i developed With React js"
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des="Front-end E-commerce Website With React js"
            src={Ecommerceweb}
          />
          <ProjectsCard
            title="Real Estate Website"
            des=" i developed Real estate website in react js for one of my client"
            src={RealEstate}
          />
          <ProjectsCard
            title="Digital Agency Website"
            des="Front-end project with React js"
            src={AgencyWebsite}
          />
        
          
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;

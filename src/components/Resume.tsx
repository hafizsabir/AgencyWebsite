import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<Boolean>(true);
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<Boolean>(false);
  //const [achievementData, setAchievementData] = useState<Boolean>(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="1.5 years as c# Developer" des="My Resume" />
        </div>
        <div>
       
        <ul className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-6 text-center">

            <li 
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
               // setAchievementData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
               // setAchievementData(false);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
               // setAchievementData(false);
              }}
              className={`${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Experience
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
               // setAchievementData(true);
              }}
             // className={`${
              //  achievementData
                //</ul>  ? "border-designColor rounded-lg"
                //  : "border-transparent"
             // } resumeLi`}
            >

           
            </li>
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
      
        {experienceData && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Resume;

import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className={`text-3xl md:text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>Education Quality</h2>
        </div>
        <div className={`mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] flex flex-col gap-10 ${
          theme === 'dark' ? 'border-l-black border-opacity-30' : 'border-l-slate-400'
        }`}>
          <ResumeCard
            title="Bachelor's in Computer Science"
            subTitle="University of Lahore"
            result="3.0/4"
            des="In my bachelor's degree in Computer Science, I focused on foundational programming concepts, 
            including algorithms, data structures, object-oriented programming, and database management. 
            I gained hands-on experience with languages like C++,Asp.net c#, Java, and Python, and explored software development
            
            methodologies and problem-solving techniques. These studies provided me with a strong understanding of 
            core computing principles and prepared me to tackle complex software challenges"
          />
          <ResumeCard
            title="Fsc-Pre engineering"
            subTitle="Government College Township College"
            result="76%"
            des="Intermediate  Secondry School Edcation."
          />
          <ResumeCard
            title="Matriculation"
            subTitle="Government high School Township"
            result="86%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

    
    </motion.div>
  );
};

export default Education;

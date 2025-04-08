import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
          <ResumeCard
            title="Trainee Full Stack developer"
            subTitle=" Integrity.IO - (january-2025-Present)"
            result="Lahore"
            des="Started working as a full stack developer focusing front end in React js Next.js with javascript\typescript and backend in Asp.net Core c#"
          />
           <ResumeCard
            title="Front-End Developer internship (React js Next.js)"
            subTitle="ByteImpulse- 3 months"
            result="Lahore"
            des="Gained hand on Experience in Internship by working on a live Projects "
          />
           <ResumeCard
            title="Associate Software Developer"
            subTitle="Finz Games - (Sept-2022 -March-2024)"
            result="Lahore"
            des="Worked as Associate software Developer in unity(c#) Game development for both IOS & Android applications"
          />
         
        </div>
      </div>
    
    </motion.div>
  );
};

export default Experience;

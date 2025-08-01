import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiUnity, SiGoogleads, SiGoogleplay, SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";

import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

const Feature = () => {
  const { theme } = useTheme();
  
  return (
    <section
      id="features"
      className={`w-full py-20 border-b-[1px] ${
        theme === 'dark' ? 'border-b-gray-700' : 'border-b-slate-300'
      }`}
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            <Card
              title="Next.js Development"
              des="I build scalable, responsive and constructive websites using Next.js framework with modern web technologies."
              icon={<SiNextdotjs />}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            <Card
              title="React Js Development"
              des="I build scalable, responsive and constructive websites on React.js with modern UI/UX practices."
              icon={<FaReact />}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            <Card
              title="Asp.Net Core Development"
              des="A complete backend solution with ASP.NET Core using C# language for robust web applications."
              icon={<SiDotnet />}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            <Card
              title="Unity Game Development"
              des="Mobile and desktop game development with Unity for Android, iOS, and PC platforms."
              icon={<SiUnity />}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            <Card
              title="Digital Marketing"
              des="Providing comprehensive digital marketing solutions via Google Ads and Social Media advertising."
              icon={<SiGoogleads />}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            <Card
              title="App Store Optimization"
              des="Optimizing and managing app deployment on Google Play Store and Apple App Store."
              icon={<SiGoogleplay />}
            />
          </motion.div>
        </motion.div>
      </FadeIn>
    </section>
  );
};

export default Feature;

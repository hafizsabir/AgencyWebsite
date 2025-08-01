import { HiArrowRight } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface Props {
  title: string;
  des: string;
  icon: React.ReactNode;
}

const Card = ({ title, des, icon }: Props) => {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <motion.div 
      ref={cardRef}
      whileHover={{ 
        y: -8,
        scale: 1.03,
        transition: { 
          duration: 0.4, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{ 
        scale: 0.97,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={`w-full px-8 py-8 rounded-lg group min-h-[280px] cursor-pointer relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne' 
          : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
      }`}
    >
      {/* Animated background overlay */}
      <motion.div
        className={`absolute inset-0 rounded-lg ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-black/20 to-transparent' 
            : 'bg-gradient-to-br from-white/30 to-transparent'
        }`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${
            theme === 'dark' ? 'rgba(255, 1, 79, 0.1)' : 'rgba(255, 1, 79, 0.05)'
          } 0%, transparent 50%)`
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex flex-col gap-6 h-full">
        <div className="flex items-center justify-between">
          <motion.div 
            className="w-12 h-12 flex items-center justify-center relative"
            whileHover={{ 
              scale: 1.15,
              transition: { 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          >
            {/* Icon background glow */}
            <motion.div
              className={`absolute inset-0 rounded-full ${
                theme === 'dark' ? 'bg-designColor/10' : 'bg-designColor/5'
              }`}
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {icon ? (
              <motion.span 
                className="text-4xl text-designColor relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { 
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }}
                animate={{
                  y: [0, -2, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {icon}
              </motion.span>
            ) : (
              <motion.div className="flex flex-col gap-1 relative z-10">
                <motion.span 
                  className="w-full h-[2px] rounded-lg bg-designColor inline-flex"
                  whileHover={{ scaleX: 1.3 }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
                <motion.span 
                  className="w-full h-[2px] rounded-lg bg-designColor inline-flex"
                  whileHover={{ scaleX: 1.3 }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
                <motion.span 
                  className="w-full h-[2px] rounded-lg bg-designColor inline-flex"
                  whileHover={{ scaleX: 1.3 }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
                <motion.span 
                  className="w-full h-[2px] rounded-lg bg-designColor inline-flex"
                  whileHover={{ scaleX: 1.3 }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
              </motion.div>
            )}
          </motion.div>
          <motion.span 
            className="text-2xl text-designColor relative"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ 
              x: 8,
              scale: 1.2,
              transition: { 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <HiArrowRight />
          </motion.span>
        </div>
        
        <motion.div 
          className="flex flex-col gap-4 flex-grow relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h2 
            className={`text-xl md:text-2xl font-titleFont font-bold ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-800'
            }`}
          >
            {title}
          </h2>
          <motion.p 
            className={`text-sm leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}
            whileHover={{ 
              scale: 1.01,
              transition: { 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
          >
            {des}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;

import { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "./Title";
import { quote } from "../assets";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  const { theme } = useTheme();
  return (
    <div
      className={`w-14 h-12 duration-300 rounded-md text-2xl flex justify-center items-center absolute top-0 right-0 cursor-pointer z-10 ${
        theme === 'dark' 
          ? 'bg-[#0c1821] hover:bg-black text-gray-400 shadow-shadowOne' 
          : 'bg-slate-300 hover:bg-slate-400 text-slate-600 shadow-lg shadow-slate-300/50'
      }`}
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  const { theme } = useTheme();
  return (
    <div
      className={`w-14 h-12 duration-300 rounded-md text-2xl flex justify-center items-center absolute top-0 right-20 cursor-pointer z-10 ${
        theme === 'dark' 
          ? 'bg-[#0c1821] hover:bg-black text-gray-400 shadow-shadowOne' 
          : 'bg-slate-300 hover:bg-slate-400 text-slate-600 shadow-lg shadow-slate-300/50'
      }`}
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const { theme } = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: theme === 'dark' ? "gray" : "#cbd5e1",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className={`w-full py-20 border-b-[1px] ${
        theme === 'dark' ? 'border-b-gray-700' : 'border-b-slate-300'
      }`}
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CLIENTS SAY" des="Testimonial" />
        </div>
        <div className="max-w-6xl mx-auto">
          {/* ================ Slider One ================== */}
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className={`w-full lgl:w-[35%] h-full p-8 rounded-lg flex flex-col justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                    : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
                }`}>
                  <div className="w-full flex flex-col justify-center">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Client Feedback
                    </p>
                    <h3 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>Anonymous Client</h3>
                    <p className={`text-base tracking-wide ${
                      theme === 'dark' ? 'text-gray-500' : 'text-slate-600'
                    }`}>
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className={`w-full h-[70%] py-10 rounded-lg p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                      : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
                  }`}>
                    <div className={`flex flex-col justify-between lgl:items-center py-6 border-b-2 ${
                      theme === 'dark' ? 'border-b-gray-900' : 'border-b-slate-300'
                    }`}>
                      <div>
                        <h3 className={`text-xl lgl:text-2xl font-medium tracking-wide ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          Offroad Racing Game
                        </h3>
                        <p className={`text-base mt-3 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                          via Upwork - Mar 4, 2015 - Aug 30, 2023 test
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className={`text-base font-titleFont font-medium tracking-wide leading-6 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                     A Very good And Productive Work. i Endorce Sabir Ali. He face challanges and Give  Productive Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Two ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className={`w-full lgl:w-[35%] h-full p-8 rounded-lg flex flex-col justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                    : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
                }`}>
                  <div className="w-full flex flex-col justify-center">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Client Feedback
                    </p>
                    <h3 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>Anonymous Client</h3>
                    <p className={`text-base tracking-wide ${
                      theme === 'dark' ? 'text-gray-500' : 'text-slate-600'
                    }`}>
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className={`w-full h-[70%] py-10 rounded-lg p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                      : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
                  }`}>
                    <div className={`flex flex-col justify-between lgl:items-center py-6 border-b-2 ${
                      theme === 'dark' ? 'border-b-gray-900' : 'border-b-slate-300'
                    }`}>
                      <div>
                        <h3 className={`text-xl lgl:text-2xl font-medium tracking-wide ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          Business Website
                        </h3>
                        <p className={`text-base mt-3 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                          via Upwork - Mar 4, 2015 - Aug 30, 2024 test
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className={`text-base font-titleFont font-medium tracking-wide leading-6 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      A great working man,faces challenges willingly and Delivered work on Time.I wish work with him again
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Three ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className={`w-full lgl:w-[35%] h-full p-8 rounded-lg flex flex-col justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                    : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
                }`}>
                  <div className="w-full flex flex-col justify-center">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Client Feedback
                    </p>
                    <h3 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>Anonymous Client</h3>
                    <p className={`text-base tracking-wide ${
                      theme === 'dark' ? 'text-gray-500' : 'text-slate-600'
                    }`}>
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className={`w-full h-[70%] py-10 rounded-lg p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                      : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
                  }`}>
                    <div className={`flex flex-col justify-between lgl:items-center py-6 border-b-2 ${
                      theme === 'dark' ? 'border-b-gray-900' : 'border-b-slate-300'
                    }`}>
                      <div>
                        <h3 className={`text-xl lgl:text-2xl font-medium tracking-wide ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          Car Parking LogJam Game
                        </h3>
                        <p className={`text-base mt-3 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                          via Upwork - Mar 4, 2015 - Aug 30, 2023 test
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className={`text-base font-titleFont font-medium tracking-wide leading-6 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      He worked on Car parking LogJam Game which he successfully delivered my App.His work is profesional and beyond Expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;

import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Game Development"
            des="I Provide Service of Android & IOS Game Development."
            icon={null}
          />
          <Card
            title="React Js Development"
            des="i build scaleale,Responsive and Contructive Websites on React js"
            icon={<AiFillAppstore />}
          />
          <Card
            title="Asp.Net Core Development"
            des="A Complete Backend Solution with Asp.net Core usning c# language."
            icon={<SiProgress />}
          />
          <Card
            title="Mobile Development"
            des="Mobile App Development With Unity"
            icon={<FaMobile />}
          />
          <Card
            title="Digital Social Media Marketing"
            des="Proving a reasonale solution for Digital marketing via Google Ads and Social Media Ads like Facebook etc"
            icon={<SiAntdesign />}
          />
          <Card
            title="PlayConsole App Production"
            des="Optimizing a clean path to upload Apps on Playstore"
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;

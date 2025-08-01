import { useTheme } from "../context/ThemeContext";

interface Props {
  title: string;
  des: string;
}

const Title = ({ title, des }: Props) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-2xl uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className={`text-4xl md:text-5xl font-bold capitalize ${
        theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
      }`}>
        {des}
      </h1>
    </div>
  );
};

export default Title;

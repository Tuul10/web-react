import { Sun } from "../Icons/Sun";
import { Kebab } from "../Icons/Kebab";

import { Moon } from "@/Icons/Moon";

const title = ["About", "Work", "Testimonials", "Contact"];

const Title = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};

function Header() {
  return (
    <div className="flex justify-between content-center h-16 mx-20 py-4 md:m-auto  dark:text-[#D1D5DB] md:p-4 m-auto">
      <h1 className="text-3xl text-[#111827] font-bold leading-9">Tom</h1>
      <Kebab />
      <div className="gap-5 flex md:hidden text-[#4B5563]">
        {title.map((item, index) => {
          return <Title key={index} text={item} />;
        })}
        <div className="flex items-center ">
          <Sun />
          <Moon />
          <p className="bg-black text-[#F9FAFB] rounded-xl   text-xs flex items-center w-24 h-7 justify-center dark:bg-[#F9FAFB] dark:text-[#111827]">
            Download CV
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;

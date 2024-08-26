import { TechIcons } from "./TechIcons";

export const BoardTree = () => {
  return (
    <div className="py-24 px-20 m-auto md:py-16 md:px-4 border">
      <p className="  flex bg-[#E5E7EB]  w-28 m-auto justify-center rounded-xl h-7 items-center dark:bg-[#4B5563] dark:text-[#D1D5DB]">
        Skills
      </p>
      <p className="md:w-11/12 mt-4 flex justify-center text-[#4B5563] text-center dark:text-[#D1D5DB]">
        The skills, tools and technologies I am really good at:
      </p>
      <TechIcons />
    </div>
  );
};

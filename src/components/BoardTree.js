import { TechIcons } from "./TechIcons";

export const BoardTree = () => {
  return (
    <div className="pt-24 px-20 m-auto lg:w-96  lg:py-16 lg:px-4">
      <p className="  flex bg-[#E5E7EB]  w-28 m-auto justify-center rounded-xl h-7 items-center">
        Skills
      </p>
      <p className="lg:w-11/12 mt-4 flex justify-center text-[#4B5563] text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <TechIcons />
    </div>
  );
};

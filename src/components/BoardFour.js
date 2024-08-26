import { TreeBox } from "./TreeBox";

export const BoardFour = () => {
  return (
    <div className="py-24 px-20 md:py-16 md:px-4 bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="px-9 flex flex-col  md:gap-4">
        <p className="flex bg-[#E5E7EB] text-[#4B5563] w-fit  m-auto justify-center py-1 px-5 rounded-xl h-7 items-center dark:bg-[#4B5563] dark:text-[#D1D5DB]">
          Experience
        </p>
        <p className="flex  m-auto font-normal text-xl text-[#4B5563]  self-stretch text-center mt-4 dark:text-[#D1D5DB]">
          Here is a quick summary of my most recent experiences:
        </p>
        <TreeBox />
      </div>
    </div>
  );
};

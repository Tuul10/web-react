import { TreeBox } from "./TreeBox";

export const BoardFour = () => {
  return (
    <div className="py-24 px-20 bg-[#F9FAFB]">
      <div className="px-9 flex flex-col gap-12">
        <p className="  flex bg-[#E5E7EB]  w-28 m-auto justify-center py-1 px-5 rounded-xl h-7 items-center">
          Experience
        </p>
        <p className="flex  m-auto font-normal text-xl text-[#4B5563] max-w-xl self-stretch">
          Here is a quick summary of my most recent experiences:
        </p>
        <TreeBox />
      </div>
    </div>
  );
};

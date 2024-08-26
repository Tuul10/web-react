import Board5Map from "./Board5Map";

const BoardFive = () => {
  return (
    <div className="py-24 px-20 md:m-auto md:py-16 md:px-4  ">
      <p className="  flex bg-[#E5E7EB] w-fit  m-auto justify-center py-1 px-5 rounded-xl h-7 items-center dark:bg-[#4B5563] dark:text-[#D1D5DB]">
        Work
      </p>
      <p className="font-normal text-xl  mt-4 flex justify-center text-[#4B5563] mb-4 text-center dark:text-[#D1D5DB]">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        <Board5Map />
      </div>
    </div>
  );
};
export default BoardFive;

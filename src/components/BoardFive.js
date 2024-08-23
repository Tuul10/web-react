import Board5Map from "./Board5Map";

const BoardFive = () => {
  return (
    <div className="py-24 px-20 lg:m-auto lg:py-16 lg:px-4 lg:w-[384px] ">
      <p className="  flex bg-[#E5E7EB]  w-28 m-auto justify-center py-1 px-5 rounded-xl h-7 items-center">
        Work
      </p>
      <p className="font-normal text-xl lg:w-11/12 mt-4 flex justify-center text-[#4B5563] mb-4 text-center">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        <Board5Map />
      </div>
    </div>
  );
};
export default BoardFive;

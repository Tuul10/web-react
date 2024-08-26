import CatIcon from "../Icons/CatIcon";
import { Circle } from "../Icons/Circle";
import { Twitter } from "../Icons/Twitter";
import { Figma } from "@/Icons/Figma";
import { Location } from "@/Icons/location";

export const BoardOne = () => {
  return (
    <div className="flex gap-12  my-24 mx-20 md:flex md:justify-center md:items-center  md:m-auto  md:py-16 md:px-4 md:gap-12  md:flex-col-reverse">
      <div className="flex-1">
        <h1 className="text-6xl font-bold md:text-4xl dark:text-[#D1D5DB]">
          Hi, I’m Tom 👋
        </h1>
        <p className="mt-2 font-normal leading-6  md:mb-12 dark:text-[#D1D5DB]">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="md:mt-12 dark:text-[#D1D5DB]">
          <div className="flex text-slate-600 gap-2 mt-12 md:mt-12 dark:text-[#D1D5DB]">
            <Location />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex text-slate-600 gap-2 dark:text-[#D1D5DB]">
            <Circle />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="mt-12 flex">
          <CatIcon />
          <Twitter />
          <Figma />
        </div>
      </div>
      <div className="flex justify-end items-end flex-1">
        <img
          className="h-96 justify-center items-center flex border-b-8 border-r-8  border-gray-default border-[#E5E7EB] border-t-none"
          src="photo1.png"
        />
      </div>
    </div>
  );
};

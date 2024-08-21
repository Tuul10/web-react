import CatIcon from "../Icons/CatIcon";
import { Circle } from "../Icons/Circle";
import { Twitter } from "../Icons/Twitter";
import { Figma } from "@/Icons/Figma";
import { Location } from "@/Icons/location";

export const BoardOne = () => {
  return (
    <div className="flex justify-between my-24 mx-20 sm:flex-col sm:justify-center sm:items-center sm:flex-col-reverse sm:m-auto sm:w-96 sm:py-16 sm:px-4 sm:gap-12 sm:h-226">
      <div className="w-1/2 sm:w-96">
        <h1 className="text-6xl font-bold sm:text-4xl">Hi, I’m Tom 👋</h1>
        <p className="text-slate-600 mt-2 font-normal leading-6 h-24 sm:mb-12 sm:h-48">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="sm:mt-12">
          <div className="flex text-slate-600 gap-2 mt-12 sm:mt-12">
            <Location />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex text-slate-600 gap-2">
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
      <div className="flex justify-center items-center">
        <img
          className="h-96 justify-center items-center flex"
          src="photo1.png"
        />
      </div>
    </div>
  );
};

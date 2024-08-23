import CatIcon from "@/Icons/CatIcon";
import { CIcon } from "@/Icons/CIcon";
import { Figma } from "@/Icons/Figma";
import { Mail } from "@/Icons/Mail";
import { Phone } from "@/Icons/Phone";
import { Twin } from "@/Icons/Twin";
import { Twitter } from "@/Icons/Twitter";

export const BoardSix = () => {
  return (
    <div className="py-24 px-20 lg:py-16 lg:px-4">
      <p className="  flex bg-[#E5E7EB]  w-28 m-auto justify-center rounded-xl h-7 items-center">
        Get in touch
      </p>
      <p className=" mt-4 flex text-[#4B5563] text-center font-normal text-xl max-w-xl  m-auto lg:w-[373px]">
        Whats next? Feel free to reach out to me if youre looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex gap-2 justify-center mt-12 lg:mt-6">
        <Mail />
        <h1 className="font-semibold text-4xl lg:text-lg">tom@pinecone.mn</h1>
        <Twin />
      </div>
      <div className="flex gap-2 justify-center mt-5 mb-12 lg:mb-6">
        <Phone />
        <h1 className="font-semibold text-4xl lg:text-lg">+976 88112233</h1>
        <Twin />
      </div>
      <p className="flex justify-center">
        You may also find me on these platforms!
      </p>
      <div className="flex justify-center">
        <CatIcon />
        <Twitter />
        <Figma />
      </div>
    </div>
  );
};

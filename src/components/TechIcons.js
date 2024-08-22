import { Javascript } from "@/Icons/Javascript";
import { Typescript } from "@/Icons/Typescript";
import { Next } from "@/Icons/Next";
import { React } from "@/Icons/React";
import { Node } from "../Icons/Node";
import { Express } from "@/Icons/Express";
import { Nest } from "@/Icons/Nest";
import { Socket } from "@/Icons/Socket";
import { PostgreSQL } from "@/Icons/PostgreSQL";
import { MongoDB } from "@/Icons/MongoDb";
import { SassScss } from "../Icons/SassScss";
import { Tailwindcss } from "@/Icons/Tailwindcss";
import { Figma } from "@/Icons/Figma";
import { BigFigma } from "@/Icons/BigFigma";
import { Cypress } from "@/Icons/Cypress";
import { Storybook } from "@/Icons/Storybook";
import { Git } from "@/Icons/Git";

const skills = [
  {
    icon: <Javascript />,
    name: "Javascript",
  },
  {
    icon: <Typescript />,
    name: "Typescript",
  },
  {
    icon: <React />,
    name: "React",
  },
  {
    icon: <Next />,
    name: "Next.js",
  },
  {
    icon: <Node />,
    name: "Node.js",
  },
  {
    icon: <Express />,
    name: "Express.js",
  },
  {
    icon: <Nest />,
    name: "Nest.js",
  },
  {
    icon: <Socket />,
    name: "Socket.io",
  },
  {
    icon: <PostgreSQL />,
    name: "PostgreSQL",
  },
  {
    icon: <MongoDB />,
    name: "MongoDB",
  },
  {
    icon: <SassScss />,
    name: "Sass/Scss",
  },
  {
    icon: <Tailwindcss />,
    name: "Tailwindcss",
  },
  {
    icon: <BigFigma />,
    name: "Figma",
  },
  {
    icon: <Cypress />,
    name: "Cypress",
  },
  {
    icon: <Storybook />,
    name: "Storybook",
  },
  {
    icon: <Git />,
    name: "Git",
  },
];

export const TechIcons = () => {
  return (
    <div className="grid grid-cols-8 gap-12 px-8 justify-center items-center sm:grid-cols-3 sm:gap-6 sm:w-96 sm:m-auto">
      {skills.map((skill, index) => {
        const { icon, name } = skill;
        return (
          <div
            key={index}
            className="text-[#4B5563] font-normal text-xl flex justify-center items-center flex-col gap-2"
          >
            {icon} {name}
            {id}
          </div>
        );
      })}
    </div>
  );
};

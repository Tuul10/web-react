import { Img4 } from "@/Icons/Img4";
import { BulletIcon } from "../Icons/BulletIcon";
import { Img3 } from "../Icons/Img3";
import { Tag } from "./Tag";
import { Img5 } from "@/Icons/Img5";

const projects = [
  {
    id: 1,
    img: <Img3 />,
    name: "Ub cab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    apps: [
      "react",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: <BulletIcon />,
  },
  {
    id: 2,
    img: <Img4 />,
    name: "Mentorhub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    apps: [
      "react",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: <BulletIcon />,
  },
  {
    id: 3,
    img: <Img5 />,
    name: "iToim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    apps: [
      "react",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: <BulletIcon />,
  },
];

const Board5Map = () => {
  return (
    <div className="flex flex-col gap-12">
      {projects.map((project, index) => {
        const { id, img, name, text, icon } = project;
        if (index % 2 !== 0) {
          return (
            <div
              index={index}
              key={id}
              className="flex rounded-xl  border-[#F9FAFB] border md:flex-col-reverse  md:flex  md:m-auto dark:bg-[#374151] dark:border-0"
            >
              <div className="flex-1 flex flex-col  p-12 gap-6 rounded-r-xl border-t-none md:p-8 ">
                <h1 className="font-semibold text-xl text-[#111827] dark:text-[white]">
                  {name}
                </h1>
                <p className="text-base dark:text-[#D1D5DB] text-[#4B5563] font-normal self-stretch  ">
                  {text}
                </p>

                <div className="flex flex-wrap self-stretch gap-2 items-center">
                  {project.apps.map((app, index) => {
                    return <Tag key={index} text={app} />;
                  })}
                </div>
                <div>{icon}</div>
              </div>
              <div className="flex-1 p-12 bg-[#F9FAFB] rounded-xl md:p-8 flex justify-center items-center dark:bg-[#4B5563]">
                {img}
              </div>
            </div>
          );
        }
        if (index % 2 === 0) {
          return (
            <div
              index={index}
              key={id}
              className="flex rounded-xl  border-[#F9FAFB] border md:flex-col  md:flex md:m-auto dark:bg-[#374151] dark:border-0 mt-12"
            >
              <div className="flex-1 p-12 bg-[#F9FAFB] rounded-xl md:p-8 flex justify-center items-center dark:bg-[#4B5563]">
                {img}
              </div>
              <div className="flex-1 flex flex-col  p-12 gap-6 rounded-r-xl border-t-none md:p-8 ">
                <h1 className="font-semibold text-[#4B5563] text-xl dark:text-[white]">
                  {name}
                </h1>
                <p className="text-base text-[#4B5563] font-normal self-stretch dark:text-[#D1D5DB]">
                  {text}
                </p>

                <div className="flex flex-wrap self-stretch gap-2 items-center ">
                  {project.apps.map((app, index) => {
                    return <Tag text={app} key={index} />;
                  })}
                </div>
                <div>{icon}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Board5Map;

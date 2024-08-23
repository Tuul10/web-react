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
              className="flex rounded-xl  border-[#F9FAFB] border lg:flex-col-reverse  lg:flex  lg:m-auto"
            >
              <div className="flex-1 flex flex-col w-[380px] p-12 gap-6 rounded-r-xl border-t-none lg:p-8 lg:w-[279px]">
                <h1 className="font-semibold text-xl">{name}</h1>
                <p className="text-sm text-[#4B5563] font-normal self-stretch  w-fit lg:w-72">
                  {text}
                </p>

                <div className="flex flex-wrap self-stretch gap-2 items-center">
                  {project.apps.map((app, index) => {
                    return <Tag key={index} text={app} />;
                  })}
                </div>
                <div>{icon}</div>
              </div>
              <div className="flex-1 p-12 bg-[#F9FAFB] rounded-xl lg:p-8 flex justify-center items-center ">
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
              className="flex rounded-xl  border-[#F9FAFB] border lg:flex-col  lg:flex lg:m-auto "
            >
              <div className="flex-1 p-12 bg-[#F9FAFB] rounded-xl lg:p-8 flex justify-center items-center ">
                {img}
              </div>
              <div className="flex-1 flex flex-col w-[380px] p-12 gap-6 rounded-r-xl border-t-none lg:p-8 lg:w-[279px]">
                <h1 className="font-semibold text-xl">{name}</h1>
                <p className="text-sm text-[#4B5563] font-normal self-stretch  w-[480px] lg:w-72">
                  {text}
                </p>

                <div className="flex flex-wrap self-stretch gap-2 items-center">
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

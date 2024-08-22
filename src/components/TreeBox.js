import { Upwork } from "@/Icons/Upworks";

const boxes = [
  {
    id: "1",
    logo: <Upwork />,
    title: "Sr. Frontend Developer",
    texts: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Nov 2021 - Present",
  },
];

export const TreeBox = () => {
  return (
    <div className="gap-12 p-8 m-auto bg-[#FFFFFF]">
      {boxes.map((box) => {
        const { id, logo, title, date } = box;
        return (
          <div key={id} className="flex gap-12">
            <h1>{logo}</h1>
            <div>
              <h1 className="text-xl ">{title}</h1>
              {box.texts.map((text) => {
                return (
                  <url>
                    <li>{text}</li>
                  </url>
                );
              })}
            </div>
            <p>{date}</p>
          </div>
        );
      })}
    </div>
  );
};

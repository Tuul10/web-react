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
    <div className=" flex flex-col gap-12 mt-12 m-auto ">
      {boxes.map((box, index) => {
        const { logo, title, date } = box;
        return (
          <div
            key={index}
            className="flex gap-12 p-8 bg-[#FFFFFF] rounded-xl md:flex-col  md:gap-4  dark:bg-[#1F2937] dark:text-[#D1D5DB]"
          >
            <h1>{logo}</h1>
            <div className="flex gap-12 md:flex  md:flex-col-reverse md:gap-4">
              <div className="flex flex-col gap-1 ">
                <h1 className="text-xl font-semibold mb-4 ">{title}</h1>

                <div className="text-base">
                  {box.texts.map((text, index) => {
                    return (
                      <url key={index}>
                        <li>{text}</li>
                      </url>
                    );
                  })}
                </div>
              </div>
              <p>{date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

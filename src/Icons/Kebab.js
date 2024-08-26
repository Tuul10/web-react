import { Sun } from "./Sun";
import { XButton } from "./XButton";

export const Kebab = () => {
  return (
    <div className="hidden md:block">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 6H20"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="#4B5563"
                // stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-[100%] w-11/12 p-4">
            <div>
              <div className="flex p-4">
                <h1 className="text-3xl  font-bold leading-9">Tom</h1>
                <XButton />
              </div>
              <div className="flex flex-col gap-4 p-4">
                {title.map((item, index) => {
                  return <Title key={index} text={item} />;
                })}
              </div>
              <div className="flex justify-between p-4">
                <p className="flex items-center">Switch Theme</p>
                <Sun />
              </div>
              <p className="bg-black text-[#F9FAFB] rounded-xl   text-xs flex items-center w-24 h-7 justify-center dark:bg-[#F9FAFB] dark:text-[#111827] md:w-[100%] p-4 mt-4 md:h-[36px]">
                Download CV
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

const title = ["About", "Work", "Testimonials", "Contact"];

const Title = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};

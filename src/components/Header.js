import { Sun } from "../Icons/Sun";
import { Kebab } from "../Icons/Kebab";

const title = ["About", "Work", "Testimonials", "Contact"];

const Title = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};

function Header() {
  return (
    <div className="flex justify-between h-16 mx-20 py-4 sm:m-auto sm:w-96">
      <h1 className="text-3xl  font-bold leading-9">Tom</h1>
      <Kebab />
      <div className="gap-5 flex sm:hidden">
        {title.map((item, index) => {
          return <Title key={index} text={item} />;
        })}
        <div className="flex items-center ">
          <Sun />
          <p className="bg-black text-[#F9FAFB] rounded-xl   text-xs flex items-center w-24 h-7 justify-center">
            Download CV
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;

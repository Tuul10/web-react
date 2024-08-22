import { BoardOne } from "@/components/BoardOne";
import Header from "../components/Header";
import { BoardTwo } from "@/components/BoardTwo";
import { BoardTree } from "@/components/BoardTree";
import { TechIcons } from "../components/TechIcons";
import { BoardFour } from "@/components/BoardFour";

function Home() {
  return (
    <div className="  m-auto  lg:flex-col lg:flex">
      <div className="max-w-7xl m-auto ">
        <Header />
        <BoardOne />
        <BoardTwo />
        <BoardTree />
        <TechIcons />
        <BoardFour />
      </div>
    </div>
  );
}
export default Home;

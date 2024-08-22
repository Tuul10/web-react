import { BoardOne } from "@/components/BoardOne";
import Header from "../components/Header";
import { BoardTwo } from "@/components/BoardTwo";
import { BoardTree } from "@/components/BoardTree";
import { TechIcons } from "../components/TechIcons";
import { BoardFour } from "@/components/BoardFour";
import { BoardFive } from "@/components/BoardFive";

function Home() {
  return (
    <div className="  m-auto  ">
      <div className="lg:flex-col  max-w-7xl m-auto ">
        <Header />
        <BoardOne />
        <BoardTwo />
        <BoardTree />
        <TechIcons />
        <BoardFour />
        <BoardFive />
      </div>
    </div>
  );
}
export default Home;

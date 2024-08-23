import { BoardOne } from "@/components/BoardOne";
import Header from "../components/Header";
import { BoardTwo } from "@/components/BoardTwo";
import { BoardTree } from "@/components/BoardTree";
import { BoardFour } from "@/components/BoardFour";
import BoardFive from "@/components/BoardFive";
import { BoardSix } from "@/components/Boardsix";
import { Enddiv } from "@/components/Enddiv";

function Home() {
  return (
    <div className="m-auto lg:content-center flex ">
      <div className="lg:flex-col  max-w-7xl m-auto ">
        <Header />
        <BoardOne />
        <BoardTwo />
        <BoardTree />
        <BoardFour />
        <BoardFive />
        <BoardSix />
        <Enddiv />
      </div>
    </div>
  );
}
export default Home;

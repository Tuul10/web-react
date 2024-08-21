import { BoardOne } from "@/components/BoardOne";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { BoardTwo } from "@/components/BoardTwo";
import { BoardTree } from "@/components/BoardTree";
import { TechIcons } from "@/Icons/TechIcons";
import { BoardFour } from "@/components/BoardFour";

function Home() {
  return (
    <div className="m-auto max-w-7xl lg:flex-col lg:flex">
      <Header />
      <BoardOne />
      <BoardTwo />
      <BoardTree />
      <TechIcons />
      <BoardFour />
    </div>
  );
}
export default Home;

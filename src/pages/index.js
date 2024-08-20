import { BoardOne } from "@/components/Board-one";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { BoardTwo } from "@/components/Board-two";
import { BoardTree } from "@/components/Board-tree";
import { Javascript } from "@/Icons/Javascript";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <BoardOne />
      <BoardTwo />
      <BoardTree />
      {skills.map((skill) => {
        return <div>{skill.icon}</div>;
      })}
    </div>
  );
}
export default Home;

const skills = [
  {
    icon: <Javascript />,
    name: "Javascript",
  },
];

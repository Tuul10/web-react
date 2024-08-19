import { BoardOne } from "@/components/Board-one";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <BoardOne />
    </div>
  );
}
export default Home;

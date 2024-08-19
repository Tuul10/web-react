import styles from "./BoardOne.module.css";
import CatIcon from "../Icons/CatIcon";
import { Circle } from "../Icons/Circle";
import { Twitter } from "../Icons/Twitter";
import { Figma } from "@/Icons/Figma";
import { Location } from "@/Icons/location";

export const BoardOne = () => {
  return (
    <div className="flex justify-between">
      <div className={styles.board}>
        <h1 className="text-6xl">Hi, I’m Tom 👋</h1>
        <p className={styles.text}>
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className={styles.box}>
          <Location />
          <p style={{ margin: "0" }}>Ulaanbaatar, Mongolia</p>
        </div>
        <div className={styles.box}>
          <Circle />
          <p>Available for new projects</p>
        </div>
        <div className={styles.icons}>
          <CatIcon />
          <Twitter />
          <Figma />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="h-96 justify-center items-center flex"
          src="photo1.png"
        />
      </div>
    </div>
  );
};

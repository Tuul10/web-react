// import Title from "./Title";
import styles from "./Header.module.css";

const title = ["About", "Work", "Testimonials", "Contact"];

const Title = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};

function Header() {
  return (
    <div className={styles.flex}>
      <h1
        className="text-3xl font-normal 
"
      >
        Tom
      </h1>
      <div className={styles.items}>
        {title.map((item) => {
          return <Title text={item} />;
        })}
        <div className={styles.img}>
          <img
            style={{
              width: "24px",
              height: "24px",
            }}
            src="head-icon.png"
          />
          <p className={styles.download}>Download CV</p>
        </div>
      </div>
    </div>
  );
}
export default Header;

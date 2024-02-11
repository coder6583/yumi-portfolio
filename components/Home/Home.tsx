import About from "./About/About";
import Art from "./Art/Art";
import Blog from "./Blog/Blog";
import Course from "./Course/Course";
import styles from "./Home.module.css";
import News from "./News/News";
import Sax from "./Sax/Sax";

export default function Home(): JSX.Element {
  return (
    <div className={styles.parent}>
      <Art />
      <Sax />
      <Course />
      <Blog />
      <News />
      <About />
    </div>
  );
}

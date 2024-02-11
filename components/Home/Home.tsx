import About from "./About/About";
import Art from "./Art/Art";
import Blog from "./Blog/Blog";
import Course from "./Course/Course";
import Hero from "./Hero/Hero";
import styles from "./Home.module.css";
import News from "./News/News";
import Sax from "./Sax/Sax";

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.parent}>
      <Hero />
      <Art />
      <Sax />
      <Course />
      <Blog />
      <News />
      <About />
    </div>
  );
}

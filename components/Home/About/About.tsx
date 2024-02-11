import SectionHeader from "../SectionHeader";
import styles from "./About.module.css";

export default function About(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="ABOUT" subheader="自己紹介" />
    </div>
  );
}

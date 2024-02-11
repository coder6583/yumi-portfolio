import SectionHeader from "../SectionHeader";
import styles from "./News.module.css";

export default function News(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="NEWS" subheader="お知らせ" />
    </div>
  );
}

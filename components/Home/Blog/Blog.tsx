import SectionHeader from "../SectionHeader";
import styles from "./Blog.module.css";

export default function Blog(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="BLOG" subheader="ブログ" />
    </div>
  );
}

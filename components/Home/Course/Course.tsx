import SectionHeader from "../SectionHeader";
import styles from "./Course.module.css";

export default function Course(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="COURSE" subheader="授業" />
    </div>
  );
}

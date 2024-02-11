import SectionHeader from "../SectionHeader";
import styles from "./Sax.module.css";

export default function Sax(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="JAZZ" subheader="ジャズ" />
    </div>
  );
}

import SectionHeader from "../SectionHeader";
import styles from "./Art.module.css";

export default function Art(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="BOTANICAL ART" subheader="植物画" />
    </div>
  );
}

import SectionHeader from "../Common/SectionHeader";
import styles from "./ContactPage.module.css";

export default function ContactPage(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="CONTACT" subheader="お問い合わせ" />
    </div>
  );
}

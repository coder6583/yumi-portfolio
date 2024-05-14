import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  header,
  subheader,
}: {
  header: string;
  subheader?: string;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>{header}</div>
      {subheader && <div className={styles.subheader}>{subheader}</div>}
    </div>
  );
}

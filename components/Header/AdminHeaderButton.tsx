import Link from "next/link";
import styles from "./AdminHeaderButton.module.css";

export default function AdminHeaderButton({
  id,
  name,
  selectedMenu,
}: {
  id: string;
  name: string;
  selectedMenu: string;
}) {
  return id != selectedMenu ? (
    <div className={styles.headerButton}>
      <Link href="/admin/gallery">{name}</Link>
    </div>
  ) : (
    <div className={styles.selectedButton}>{name}</div>
  );
}

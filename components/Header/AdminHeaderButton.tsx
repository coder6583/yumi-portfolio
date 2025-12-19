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
      <a href="/admin/gallery">{name}</a>
    </div>
  ) : (
    <div className={styles.selectedButton}>{name}</div>
  );
}

import styles from "./AdminHeader.module.css";
import AdminHeaderButton from "./AdminHeaderButton";

export default function AdminHeader({
  selectedMenu,
}: {
  selectedMenu: string;
}): JSX.Element {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.logo}>Yumi Narita</div>
        <div className={styles.subLogo}>管理者ページ</div>
        {selectedMenu != "login" && (
          <>
            <AdminHeaderButton
              id="gallery"
              name="ギャラリー"
              selectedMenu={selectedMenu}
            />
            <AdminHeaderButton
              id="sax"
              name="サックス"
              selectedMenu={selectedMenu}
            />
            <AdminHeaderButton
              id="blog"
              name="ブログ"
              selectedMenu={selectedMenu}
            />
            <AdminHeaderButton
              id="news"
              name="ニュース"
              selectedMenu={selectedMenu}
            />
          </>
        )}
      </div>
    </>
  );
}

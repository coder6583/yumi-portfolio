import Link from "next/link";
import styles from "./HeroButton.module.css";

export default function HeroButton(): JSX.Element {
  return (
    <Link href="/contact">
      <button type="button" className={styles.button}>
        お仕事のご依頼はこちらまで
      </button>
    </Link>
  );
}

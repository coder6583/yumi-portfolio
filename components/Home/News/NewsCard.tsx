import { Moment } from "moment";
import styles from "./NewsCard.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function NewsCard({
  date,
  title,
  genre,
  link,
}: {
  date: Moment;
  title: string;
  genre: string;
  link: string;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <div className={styles.date}>{date.format("YYYY.MM.DD")}</div>/
        <div className={styles.genre}>{genre}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.button}>
        <a href={link} className={styles.link}>
          <div className={styles.words}>詳しく読む</div>
          <div className={styles.icon}>
            <ChevronRightIcon fontSize={24} marginBottom={1} />
          </div>
        </a>
      </div>
    </div>
  );
}

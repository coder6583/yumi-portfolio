import { Divider, Image } from "@chakra-ui/react";
import styles from "./BlogCard.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Moment } from "moment";

export default function BlogCard({
  title,
  description,
  date,
  link,
  thumbnail,
}: {
  title: string;
  description: string;
  date: Moment;
  link: string;
  thumbnail: string;
}): JSX.Element {
  const displayedDescription = description.substring(0, 80);
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <div className={styles.thumbnail}>
          <Image alt={thumbnail} src={thumbnail} borderRadius={"4px"} />
        </div>
        <div className={styles.date}>{date.format("YYYY.MM.DD")}</div>
      </div>
      <div className={styles.blogInfo}>
        <div className={styles.title}>{title}</div>
        <Divider />
        <div className={styles.description}>{displayedDescription}...</div>
        <div className={styles.button}>
          <a href={link} className={styles.link}>
            <div className={styles.words}>ブログを読む</div>
            <div className={styles.icon}>
              <ChevronRightIcon fontSize={24} marginBottom={1} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

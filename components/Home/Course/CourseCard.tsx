import styles from "./CourseCard.module.css";

export default function CourseCard({
  title,
  description,
  link,
  linkName,
}: {
  title: string;
  description: string;
  link: string;
  linkName: string;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <a href={link} className={styles.link}>
        {linkName}
      </a>
    </div>
  );
}

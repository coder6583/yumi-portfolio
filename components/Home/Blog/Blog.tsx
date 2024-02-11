import Link from "next/link";
import SectionHeader from "../SectionHeader";
import styles from "./Blog.module.css";
import BlogCard from "./BlogCard";
import { ChevronRightIcon } from "@chakra-ui/icons";
import moment from "moment";

export default function Blog(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="BLOG" subheader="ブログ" />
      <BlogCard
        date={moment()}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum velit neque eum, consectetur harum vero optio, sed in maxime atque, vel ipsum blanditiis officiis voluptates labore enim non laudantium odio!"
        link="/blog/introduction"
        thumbnail="/images/squash.jpg"
        title="ブログ開設しました！"
      />
      <BlogCard
        date={moment()}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum velit neque eum, consectetur harum vero optio, sed in maxime atque, vel ipsum blanditiis officiis voluptates labore enim non laudantium odio!"
        link="/blog/introduction"
        thumbnail="/images/squash.jpg"
        title="ブログ開設しました！"
      />
      <Link href="/blog" className={styles.link}>
        <div className={styles.words}>ブログ一覧を見る</div>
        <div className={styles.icon}>
          <ChevronRightIcon fontSize={24} marginBottom={1} />
        </div>
      </Link>
    </div>
  );
}

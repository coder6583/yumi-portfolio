import moment from "moment";
import SectionHeader from "../../Common/SectionHeader";
import styles from "./News.module.css";
import NewsCard from "./NewsCard";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function News(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="NEWS" subheader="お知らせ" />
      <NewsCard
        date={moment()}
        genre="GENERAL"
        title="ポートフォリオサイトを開設しました！"
        link="/news/introduction"
      />
      <NewsCard
        date={moment()}
        genre="GENERAL"
        title="ポートフォリオサイトを開設しました！"
        link="/news/introduction"
      />
      <NewsCard
        date={moment()}
        genre="GENERAL"
        title="ポートフォリオサイトを開設しました！"
        link="/news/introduction"
      />
      <Link href="/blog" className={styles.link}>
        <div className={styles.words}>お知らせ一覧を見る</div>
        <div className={styles.icon}>
          <ChevronRightIcon fontSize={24} marginBottom={1} />
        </div>
      </Link>
    </div>
  );
}

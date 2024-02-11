import { Divider } from "@chakra-ui/react";
import SectionHeader from "../SectionHeader";
import styles from "./Course.module.css";
import CourseCard from "./CourseCard";

export default function Course(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="LESSON" subheader="レッスン" />
      <CourseCard
        title={"ジャズレッスン"}
        description={
          "お客様の要望に合わせた一時間個人ジャズレッスン。バークリー音楽大学での留学経験もある成田由美が教えるプライベートレッスン。初心者から上級者まで大歓迎！"
        }
        link={"/contact#jazz"}
        linkName={"ジャズレッスンの申し込み"}
      />
      <CourseCard
        title={"植物画レッスン"}
        description={
          "お客様の要望に合わせた一時間個人植物画レッスン。ニューヨークボタニカルガーデンのボタニカルアートコース卒の成田由美が教えるプライベートレッスン。初心者大歓迎！"
        }
        link={"/contact#art"}
        linkName={"植物画レッスンの申し込み"}
      />
    </div>
  );
}

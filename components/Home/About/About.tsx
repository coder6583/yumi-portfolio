import { Icon, Image } from "@chakra-ui/react";
import SectionHeader from "../../Common/SectionHeader";
import styles from "./About.module.css";
import Link from "next/link";

export default function About(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="ABOUT" subheader="自己紹介" />
      <div className={styles.photo}>
        <Image src="/images/yumi_circle.png" alt="yumi circle" />
      </div>
      <div className={styles.name}>成田由美</div>
      <div className={styles.description}>
        成田由美は、2012年に米国ニューヨーク州立ニューヨーク植物園のボタニカルアートコースにて、サイエンスドローイングである、植物画＝ボタニカルアートを描き始めた。
        <br />
        <br />
        2015年7月に家族と共に日本に帰国した為、NYBGは休学していたが、コロナ禍のシャットダウンの為オンクラスとなった同コースに2020年12月より再度受講開始。
        2023年6月2日に同コースを終了。と同時に鉛筆画、色鉛筆画、インク画、ボタニカルジャーナル(optional)、水彩画を網羅するプログラムを持つボタニカルアートコースのサーティフィケイトを取得した。
      </div>
      <div className={styles.instagram}>
        <div className={styles.words}>BOTANICAL ART:</div>
        <Link href="https://www.instagram.com/yumi.botanical/?hl=en">
          <Image
            width={"24px"}
            height={"24px"}
            src="/images/insta.svg"
            alt="insta"
          />
        </Link>
        /<div className={styles.words}>SAX:</div>
        <Link href="https://www.instagram.com/yumi.sax/?hl=en">
          <Image
            width={"24px"}
            height={"24px"}
            src="/images/insta.svg"
            alt="insta"
          />
        </Link>
      </div>
    </div>
  );
}

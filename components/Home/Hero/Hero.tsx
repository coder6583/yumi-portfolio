import { Image } from "@chakra-ui/react";
import styles from "./Hero.module.css";
import HeroButton from "./HeroButton";

export default function Hero(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.heroImage}>
        <Image alt="yumi flower circle" src="/images/yumi_flower_circle.jpg" />
      </div>
      <div className={styles.englishName}>YUMI NARITA</div>
      <div className={styles.japaneseSubtitle}>
        植物画家・サックス奏者・講師
      </div>
      <HeroButton />
    </div>
  );
}

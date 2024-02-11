import { Image } from "@chakra-ui/react";
import SectionHeader from "../SectionHeader";
import styles from "./Sax.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Sax(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="JAZZ" subheader="ジャズ" />
      <div className={styles.gallery}>
        <div className={styles.column}>
          <div className={styles.image_tall}>
            <Image
              src="/images/yumi_sax_standing.png"
              alt="sax_standing"
              height={"100%"}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.image}>
            <Image src="/images/yumi_flute.jpg" alt="yumi_flute" />
          </div>
          <div className={styles.image}>
            <Image src="/images/yumi_sax.jpg" alt="yumi_sax" />
          </div>
        </div>
      </div>
      <Link href="/sax" className={styles.link}>
        <div className={styles.words}>SAXを見る</div>
        <div className={styles.icon}>
          <ChevronRightIcon fontSize={24} marginBottom={1} />
        </div>
      </Link>
    </div>
  );
}

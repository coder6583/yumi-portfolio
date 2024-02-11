import { Image } from "@chakra-ui/react";
import SectionHeader from "../SectionHeader";
import styles from "./Art.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Art(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="BOTANICAL ART" subheader="植物画" />
      <div className={styles.gallery}>
        <div className={styles.column}>
          <div className={styles.image}>
            <Image src="/images/clematie.jpg" alt="clematie" />
          </div>
          <div className={styles.image}>
            <Image src="/images/plum.jpg" alt="plum" />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.image}>
            <Image src="/images/squash.jpg" alt="squash" />
          </div>
          <div className={styles.image}>
            <Image src="/images/tomato.jpg" alt="tomato" />
          </div>
        </div>
      </div>
      <Link href="/gallery" className={styles.link}>
        <div className={styles.words}>GALLERYを見る</div>
        <div className={styles.icon}>
          <ChevronRightIcon fontSize={24} marginBottom={1} />
        </div>
      </Link>
    </div>
  );
}

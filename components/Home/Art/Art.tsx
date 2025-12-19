import SectionHeader from "../../Common/SectionHeader";
import styles from "./Art.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import GalleryPhoto from "@/components/Gallery/GalleryPhoto";

export default function Art(): JSX.Element {
  return (
    <div className={styles.parent}>
      <SectionHeader header="BOTANICAL ART" subheader="植物画" />
      <div className={styles.gallery}>
        <div className={styles.column}>
          <GalleryPhoto alt="clematie" url="/images/clematie.jpg" />
          <GalleryPhoto alt="plum" url="/images/plum.jpg" />
        </div>
        <div className={styles.column}>
          <GalleryPhoto alt="squash" url="/images/squash.jpg" />
          <GalleryPhoto alt="tomato" url="/images/tomato.jpg" />
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

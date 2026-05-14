import SectionHeader from "../../Common/SectionHeader";
import styles from "./Art.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getGallery } from "@/functions/firestore/getGallery";
import { Photo } from "@/types/types";
import ArtCarousel from "./ArtCarousel";

export default function Art(): JSX.Element {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getGallery().then((data: Photo[]) => {
      setPhotos(data.filter((val) => val.thumbnail));
    });
  }, []);

  return (
    <div className={styles.parent}>
      <SectionHeader header="BOTANICAL ART" subheader="植物画" />
      <ArtCarousel photos={photos} />
      <Link href="/gallery" className={styles.link}>
        <div className={styles.words}>GALLERYを見る</div>
        <div className={styles.icon}>
          <ChevronRightIcon fontSize={24} marginBottom={1} />
        </div>
      </Link>
    </div>
  );
}

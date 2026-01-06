import SectionHeader from "../../Common/SectionHeader";
import styles from "./Art.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import GalleryPhoto from "@/components/Gallery/GalleryPhoto";
import { useEffect, useState } from "react";
import { getGallery } from "@/functions/firestore/getGallery";
import { Photo } from "@/types/types";

export default function Art(): JSX.Element {
  const [photos, setPhotos] = useState<Photo[] | undefined>(undefined);

  useEffect(() => {
    getGallery().then((data: Photo[]) => {
      setPhotos(data.filter((val) => val.thumbnail));
      console.log(data);
    });
  }, []);
  return (
    <div className={styles.parent}>
      <SectionHeader header="BOTANICAL ART" subheader="植物画" />
      <div className={styles.gallery}>
        <div className={styles.column}>
          <GalleryPhoto
            alt={photos?.at(0)?.title ?? "none"}
            url={photos?.at(0)?.url ?? "/images/clematie.jpg"}
          />
          <GalleryPhoto
            alt={photos?.at(1)?.title ?? "none"}
            url={photos?.at(1)?.url ?? "/images/clematie.jpg"}
          />
        </div>
        <div className={styles.column}>
          <GalleryPhoto
            alt={photos?.at(2)?.title ?? "none"}
            url={photos?.at(2)?.url ?? "/images/clematie.jpg"}
          />
          <GalleryPhoto
            alt={photos?.at(3)?.title ?? "none"}
            url={photos?.at(3)?.url ?? "/images/clematie.jpg"}
          />
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

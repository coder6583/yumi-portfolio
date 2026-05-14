import { useEffect, useState } from "react";
import { getGallery } from "@/functions/firestore/getGallery";
import { Photo } from "@/types/types";
import SectionHeader from "@/components/Common/SectionHeader";
import GalleryPhoto from "./GalleryPhoto";
import styles from "./GalleryPage.module.css";

export default function GalleryPage(): JSX.Element {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getGallery().then(setPhotos);
  }, []);

  return (
    <div className={styles.parent}>
      <SectionHeader header="GALLERY" subheader="ギャラリー" />
      <div className={styles.grid}>
        {photos.map((photo) => (
          <GalleryPhoto key={photo.id} url={photo.url} alt={photo.title} />
        ))}
      </div>
    </div>
  );
}

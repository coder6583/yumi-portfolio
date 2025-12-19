import { Image } from "@chakra-ui/react";
import styles from "./GalleryPhoto.module.css";

export default function GalleryPhoto({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  return (
    <div className={styles.image}>
      <Image src={url} alt={alt} />
    </div>
  );
}

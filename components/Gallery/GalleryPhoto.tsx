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
      <Image src={url} alt={alt} width="100%" height="100%" objectFit="contain" />
    </div>
  );
}

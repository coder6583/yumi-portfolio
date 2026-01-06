import { doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";
import { Photo } from "@/types/types";

export async function uploadGalleryPhoto(photo: Photo) {
  await setDoc(doc(db, "gallery", "photos", "photos", photo.id), {
    id: photo.id,
    title: photo.title,
    url: photo.url,
    thumbnail: photo.thumbnail,
  });
}

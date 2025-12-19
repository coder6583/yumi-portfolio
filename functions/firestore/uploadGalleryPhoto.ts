import { addDoc, collection } from "firebase/firestore";
import { db } from "./firestore";
import { Photo } from "@/types/types";

export async function uploadGalleryPhoto(photo: Photo) {
  await addDoc(collection(db, "gallery", "photos", "photos"), {
    id: photo.id,
    url: photo.url,
  });
}

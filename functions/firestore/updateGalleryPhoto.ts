import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firestore";

export default async function updateGalleryPhoto(
  photoId: string,
  updates: { [x: string]: string | boolean }
) {
  await updateDoc(doc(db, "gallery", "photos", "photos", photoId), updates);
}

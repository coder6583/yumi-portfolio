import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firestore";

export async function deleteGalleryPhoto(photoId: string) {
  try {
    console.log(photoId);
    const res = await deleteDoc(
      doc(db, "gallery", "photos", "photos", photoId)
    );
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}

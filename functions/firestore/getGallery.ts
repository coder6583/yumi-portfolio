import { Photo } from "@/types/types";
import { converter, db } from "./firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getGalleryPhoto(id: string) {
  const blog = doc(db, "gallery", id).withConverter(converter<Photo>());
  const blogDoc = await getDoc(blog);
  const blogData = blogDoc.data();
  return blogData;
}

export async function getGallery() {
  const blogs = await getDocs(
    collection(db, "gallery", "photos", "photos").withConverter(
      converter<Photo>()
    )
  ).then((docs) => docs.docs.map((doc) => doc.data()));
  console.log(blogs);
  return blogs;
}

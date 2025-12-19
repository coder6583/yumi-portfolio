import { converter, db } from "./firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export interface BlogData {
  id: string;
  title: string;
  date: number;
  content: string;
  thumbnail: string;
}

export async function getBlog(id: string) {
  const blog = doc(db, "blogs", id).withConverter(converter<BlogData>());
  const blogDoc = await getDoc(blog);
  const blogData = blogDoc.data();
  return blogData;
}

export async function getBlogs() {
  const blogs = await getDocs(
    collection(db, "blogs").withConverter(converter<BlogData>())
  ).then((docs) => docs.docs.map((doc) => doc.data()));
  console.log(blogs);
  return blogs;
}

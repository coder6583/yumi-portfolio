import { useEffect, useState } from "react";
import styles from "./BlogIndexPage.module.css";
import { BlogData, getBlogs } from "@/functions/firestore/getBlogs";
import BlogCard from "./BlogCard";
import moment from "moment";

export default function BlogIndexPage(): JSX.Element {
  const [blogs, setBlogs] = useState<BlogData[] | undefined>(undefined);

  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <div className={styles.parent}>
      {(blogs ?? []).map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          date={moment(blog.date)}
          description={blog.content}
          link={`/blog/${blog.id}`}
          thumbnail={blog.thumbnail}
        />
      ))}
    </div>
  );
}

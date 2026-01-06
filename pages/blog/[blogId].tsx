import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BlogIndexPage from "@/components/Blog/BlogIndexPage";
import { useEffect } from "react";
import { usePageContext } from "../_app";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  const { pageId, setPageId } = usePageContext();

  useEffect(() => {
    setPageId("blog");
  }, []);

  return (
    <>
      <Head>
        <title>Yumi Narita Portfolio</title>
        <meta name="description" content="成田由美ポートフォリオサイト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={`${inter.className}`}>
        <BlogIndexPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

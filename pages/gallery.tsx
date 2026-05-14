import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import GalleryPage from "@/components/Gallery/GalleryPage";
import { useEffect } from "react";
import { usePageContext } from "./_app";

const inter = Inter({ subsets: ["latin"] });

export default function Gallery() {
  const { setPageId } = usePageContext();

  useEffect(() => {
    setPageId("gallery");
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
        <GalleryPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

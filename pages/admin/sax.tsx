import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import HomePage from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";
import AdminHeader from "@/components/Header/AdminHeader";
import GalleryAdminEditor from "@/components/Admin/Gallery/GalleryAdminEditor";
import { useEffect, useState } from "react";
import { getGallery } from "@/functions/firestore/getGallery";
import { Photo } from "@/types/types";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function SaxAdmin() {
  const [photos, setPhotos] = useState<Photo[] | undefined>(undefined);

  useEffect(() => {
    getGallery().then((data) => {
      setPhotos(data);
      console.log(data);
    });
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
        <AdminHeader selectedMenu="gallery" />
      </header>
      <main className={`${inter.className}`}>
        <ChakraProvider>
          <GalleryAdminEditor photos={photos ?? []} setPhotos={setPhotos} />
        </ChakraProvider>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

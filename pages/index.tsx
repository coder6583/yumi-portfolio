import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import HomePage from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

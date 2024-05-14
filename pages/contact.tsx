import ContactPage from "@/components/Contact/ContactPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
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
        <ContactPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

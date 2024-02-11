import { Html, Head, Main, NextScript } from "next/document";
import { ChakraProvider } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&family=Zen+Kaku+Gothic+Antique:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ChakraProvider>
          <Main />
          <NextScript />
        </ChakraProvider>
      </body>
    </Html>
  );
}

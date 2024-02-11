import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type PageType =
  | "home"
  | "gallery"
  | "sax"
  | "course"
  | "blog"
  | "news"
  | "contact";
export const checkPageType = (x: string): x is PageType => {
  return (
    x === "home" ||
    x === "gallery" ||
    x === "sax" ||
    x === "course" ||
    x === "blog" ||
    x === "news" ||
    x === "contact"
  );
};
export const getPageName = (x: PageType): string => {
  if (x == "home") return "Home";
  if (x == "gallery") return "Gallery";
  if (x == "sax") return "Sax";
  if (x == "course") return "Course";
  if (x == "blog") return "Blog";
  if (x == "news") return "News";
  if (x == "contact") return "Contact";
  return "home";
};
export type PageContextType = {
  pageId: PageType;
  setPageId: Dispatch<SetStateAction<PageType>>;
};
export const pageContext = createContext<PageContextType | undefined>(
  undefined
);
export const usePageContext = (): PageContextType => {
  const context = useContext(pageContext);
  if (context === undefined) {
    throw Error("pageContext is undefined.");
  }
  return context;
};

export default function App({ Component, pageProps }: AppProps) {
  const [pageId, setPageId] = useState<PageType>("home");

  return (
    <pageContext.Provider value={{ pageId, setPageId }}>
      <Component {...pageProps} />
    </pageContext.Provider>
  );
}

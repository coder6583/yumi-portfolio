import styles from "./Header.module.css";
import { IconButton } from "@chakra-ui/button";
import { ArrowRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";
import HeaderMenu from "./HeaderMenu";
import { getPageName, usePageContext } from "@/pages/_app";
import clsx from "clsx";

export default function Header(): JSX.Element {
  const { pageId } = usePageContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.logo}>Yumi Narita</div>
        <div className={styles.subLogo}>ART・JAZZ・LESSON</div>
        <div className={styles.menuButton}>
          <button type="submit" onClick={isOpen ? onClose : onOpen}>
            <div
              className={styles.animation}
              style={{ opacity: isOpen ? "0" : "100" }}
            >
              <HamburgerIcon
                fontSize={"x-large"}
                color={"#555"}
                margin={"8px"}
              />
            </div>
            <div
              className={styles.animation}
              style={{ opacity: isOpen ? "100" : "0" }}
            >
              <ArrowRightIcon
                fontSize={"x-large"}
                color={"#555"}
                margin={"8px"}
                marginTop={"-60px"}
              />
            </div>
          </button>
        </div>
        <HeaderMenu isOpen={isOpen} onClose={onClose} />
      </div>
      <div className={styles.extraHeader}>
        <div className={styles.extraContent}>{getPageName(pageId)}</div>
      </div>
    </>
  );
}

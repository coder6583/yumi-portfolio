import styles from "./Header.module.css";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";
import HeaderMenu from "./HeaderMenu";
import { getPageName, usePageContext } from "@/pages/_app";

export default function Header(): JSX.Element {
  const { pageId } = usePageContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.logo}>Yumi Narita</div>
        <div className={styles.subLogo}>ART・SAX・TEACHER</div>
        <div className={styles.menuButton}>
          <IconButton
            aria-label="Drop down menu"
            alignItems={"center"}
            display={"flex"}
            justifyContent={"center"}
            icon={
              <HamburgerIcon
                fontSize={"x-large"}
                color={"#555"}
                margin={"8px"}
              />
            }
            onClick={onOpen}
          />
        </div>
        <HeaderMenu isOpen={isOpen} onClose={onClose} />
      </div>
      <div className={styles.extraHeader}>
        <div className={styles.extraContent}>{getPageName(pageId)}</div>
      </div>
    </>
  );
}

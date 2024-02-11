import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import styles from "./HeaderMenu.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import HeaderMenuButton from "./HeaderMenuButton";

export default function HeaderMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element {
  return (
    <Drawer size="xs" isOpen={isOpen} onClose={onClose}>
      <div className={styles.overlay} />
      <DrawerContent
        backgroundColor={"white"}
        width={"80% !important"}
        className={styles.drawer}
      >
        <DrawerCloseButton>
          <div className={styles.backButton}>
            <ArrowRightIcon
              color="#ddd"
              fontSize={"x-large"}
              fontWeight={400}
            />
          </div>
        </DrawerCloseButton>
        <div className={styles.content}>
          <div className={styles.stack}>
            <HeaderMenuButton label="Home" id="home" onClose={onClose} />
            <HeaderMenuButton label="Gallery" id="gallery" onClose={onClose} />
            <HeaderMenuButton label="Sax" id="sax" onClose={onClose} />
            <HeaderMenuButton label="Course" id="course" onClose={onClose} />
            <HeaderMenuButton label="Blog" id="blog" onClose={onClose} />
            <HeaderMenuButton label="News" id="news" onClose={onClose} />
            <HeaderMenuButton label="Contact" id="contact" onClose={onClose} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

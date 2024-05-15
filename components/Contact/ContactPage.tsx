import SectionHeader from "../Common/SectionHeader";
import styles from "./ContactPage.module.css";
import ContactForm from "./ContactForm";
import { ChakraProvider } from "@chakra-ui/react";

export default function ContactPage(): JSX.Element {
  return (
    <ChakraProvider>
      <div className={styles.parent}>
        <SectionHeader header="CONTACT" subheader="お問い合わせ" />
        <ContactForm />
      </div>
    </ChakraProvider>
  );
}

import { Input } from "@chakra-ui/react";
import styles from "./InputField.module.css";

export default function InputField(): JSX.Element {
  return (
    <div className={styles.parent}>
      <Input width={"100%"} />
    </div>
  );
}

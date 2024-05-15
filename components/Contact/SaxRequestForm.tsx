import { Textarea } from "@chakra-ui/react";
import InputRow from "./InputRow";
import styles from "./SaxRequest.module.css";

export default function SaxRequestForm(): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        label="要望"
        required
        setData={() => {}}
        customInput={<Textarea rows={4} />}
      />
    </div>
  );
}

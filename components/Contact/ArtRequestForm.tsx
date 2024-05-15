import { Select, Textarea } from "@chakra-ui/react";
import styles from "./ArtRequestForm.module.css";
import InputRow from "./InputRow";

export default function ArtRequestForm(): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        label="要望（サイズ、花の種類など）"
        required
        setData={() => {}}
        customInput={<Textarea rows={4} />}
      />
    </div>
  );
}

import { Dispatch, SetStateAction } from "react";
import styles from "./InputRow.module.css";
import InputField from "./InputField";

export default function InputRow({
  label,
  required,
  setData,
  customInput,
}: {
  label: string;
  required?: boolean;
  setData: Dispatch<SetStateAction<string>>;
  customInput?: JSX.Element;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.label}>
        <div className={styles.labelString}>{label}</div>
        {required && <div className={styles.requiredTag}>必須</div>}
      </div>
      <div className={styles.input}>{customInput || <InputField />}</div>
    </div>
  );
}

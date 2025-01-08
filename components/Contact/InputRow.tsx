import { Dispatch, SetStateAction } from "react";
import styles from "./InputRow.module.css";
import InputField from "./InputField";

export default function InputRow({
  label,
  htmlFor,
  required,
  customInput,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  customInput?: JSX.Element;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.label}>
        <label className={styles.labelString} htmlFor={htmlFor}>
          {label}
        </label>
        {required && <div className={styles.requiredTag}>必須</div>}
      </div>
      <div className={styles.input}>
        {customInput || <InputField id={htmlFor} />}
      </div>
    </div>
  );
}

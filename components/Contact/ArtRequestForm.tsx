import { Select, Textarea } from "@chakra-ui/react";
import styles from "./ArtRequestForm.module.css";
import InputRow from "./InputRow";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function ArtRequestForm({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        htmlFor="comments"
        label="要望（サイズ、花の種類など）"
        required
        customInput={
          <Textarea
            id="comments"
            rows={4}
            {...register("comments", { required: true })}
          />
        }
      />
    </div>
  );
}

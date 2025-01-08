import { Textarea } from "@chakra-ui/react";
import InputRow from "./InputRow";
import styles from "./SaxRequest.module.css";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function SaxRequestForm({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        htmlFor="comments"
        label="要望"
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

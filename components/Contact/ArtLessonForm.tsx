import { Select, Textarea } from "@chakra-ui/react";
import styles from "./ArtLessonForm.module.css";
import InputRow from "./InputRow";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function ArtLessonForm({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        htmlFor="style"
        label="絵の種類"
        required
        customInput={
          <Select id="style" {...register("style", { required: true })}>
            <option value="none">ーー</option>
            <option value="inkwash">西洋式水墨画</option>
            <option value="monopencil">白黒鉛筆</option>
            <option value="colorpencil">色鉛筆</option>
            <option value="waterpaint"> 水彩画</option>
          </Select>
        }
      />
      <InputRow
        htmlFor="comments"
        label="その他（要望・希望など）"
        customInput={
          <Textarea id="comments" rows={4} {...register("comments", {})} />
        }
      />
    </div>
  );
}

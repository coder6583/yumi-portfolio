import { Input, Select, Textarea } from "@chakra-ui/react";
import InputRow from "./InputRow";
import styles from "./SaxLessonForm.module.css";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function SaxLessonForm({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        htmlFor="instrument"
        label="楽器選択"
        required
        customInput={
          <Select
            id="instrument"
            {...register("instrument", { required: true })}
          >
            <option value="none">ーー</option>
            <option value="alto">アルト</option>
            <option value="soprano">ソプラノ</option>
            <option value="tenor">テナー</option>
          </Select>
        }
      />
      <InputRow
        htmlFor="when"
        label="期間選択"
        required
        customInput={
          <Select id="when" {...register("when", { required: true })}>
            <option value="none">ーー</option>
            <option value="single">単発</option>
            <option value="regularly">定期</option>
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

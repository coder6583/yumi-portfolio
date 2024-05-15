import { Select, Textarea } from "@chakra-ui/react";
import styles from "./ArtLessonForm.module.css";
import InputRow from "./InputRow";

export default function ArtLessonForm(): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        label="絵の種類"
        required
        setData={() => {}}
        customInput={
          <Select>
            <option value="none">ーー</option>
            <option value="inkwash">西洋式水墨画</option>
            <option value="monopencil">白黒鉛筆</option>
            <option value="colorpencil">色鉛筆</option>
            <option value="waterpaint"> 水彩画</option>
          </Select>
        }
      />
      <InputRow
        label="その他（要望・希望など）"
        setData={() => {}}
        customInput={<Textarea rows={4} />}
      />
    </div>
  );
}

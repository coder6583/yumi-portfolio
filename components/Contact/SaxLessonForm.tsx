import { Input, Select, Textarea } from "@chakra-ui/react";
import InputRow from "./InputRow";
import styles from "./SaxLessonForm.module.css";

export default function SaxLessonForm(): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        label="楽器選択"
        required
        setData={() => {}}
        customInput={
          <Select>
            <option value="none">ーー</option>
            <option value="alto">アルト</option>
            <option value="soprano">ソプラノ</option>
            <option value="tenor">テナー</option>
          </Select>
        }
      />
      <InputRow
        label="期間選択"
        required
        setData={() => {}}
        customInput={
          <Select>
            <option value="none">ーー</option>
            <option value="single">単発</option>
            <option value="regularly">定期</option>
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

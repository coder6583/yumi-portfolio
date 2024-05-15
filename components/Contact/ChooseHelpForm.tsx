import { Input, Select } from "@chakra-ui/react";
import styles from "./ChooseHelp.module.css";
import InputRow from "./InputRow";

export default function ChooseHelpForm(): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        label="楽器の種類"
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
        label="予算"
        required
        setData={() => {}}
        customInput={
          <div className={styles.money}>
            <Input width={"60%"} />
            <div className={styles.unit}>円</div>
          </div>
        }
      />
    </div>
  );
}

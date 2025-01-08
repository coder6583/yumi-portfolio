import { Input, Select } from "@chakra-ui/react";
import styles from "./ChooseHelp.module.css";
import InputRow from "./InputRow";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function ChooseHelpForm({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <InputRow
        htmlFor="instrument"
        label="楽器の種類"
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
        htmlFor="cost"
        label="予算"
        required
        customInput={
          <div className={styles.money}>
            <Input
              id="cost"
              width={"60%"}
              {...register("cost", { required: true })}
            />
            <div className={styles.unit}>円</div>
          </div>
        }
      />
    </div>
  );
}

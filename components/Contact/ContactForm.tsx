import { useState } from "react";
import styles from "./ContactForm.module.css";
import InputRow from "./InputRow";
import { Input, Select } from "@chakra-ui/react";
import ContactButton from "./ContactButton";
import SaxLessonForm from "./SaxLessonForm";
import ChooseHelpForm from "./ChooseHelpForm";
import ArtLessonForm from "./ArtLessonForm";
import ArtRequestForm from "./ArtRequestForm";
import SaxRequestForm from "./SaxRequestForm";

function CategoryForm(category: string): JSX.Element {
  if (category === "sax-lesson") {
    return <SaxLessonForm />;
  }
  if (category === "choose-help") {
    return <ChooseHelpForm />;
  }
  if (category === "art-lesson") {
    return <ArtLessonForm />;
  }
  if (category === "art-request") {
    return <ArtRequestForm />;
  }
  if (category === "sax-request") {
    return <SaxRequestForm />;
  }
  return <div className={styles.noneText}>カテゴリーを選択してください。</div>;
}

export default function ContactForm(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [formState, setFormState] = useState<string>("");

  return (
    <div className={styles.parent}>
      <InputRow label="お名前" required setData={setName} />
      <InputRow
        label="Eメール"
        required
        setData={setEmail}
        customInput={<Input width={"100%"} type="email" />}
      />
      <InputRow
        label="性別"
        setData={() => {}}
        customInput={
          <Select
            onChange={(event) => {
              setFormState(event.currentTarget.value);
            }}
          >
            <option value="none">ーー</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </Select>
        }
      />
      <InputRow
        label="年齢区分"
        setData={() => {}}
        customInput={
          <Select
            onChange={(event) => {
              setFormState(event.currentTarget.value);
            }}
          >
            <option value="none">ーー</option>
            <option value="below10">10代未満</option>
            <option value="10">10代</option>
            <option value="20">20代</option>
            <option value="30">30代</option>
            <option value="40">40代</option>
            <option value="above50">50代以上</option>
          </Select>
        }
      />
      <InputRow
        label="カテゴリー"
        required
        setData={() => {}}
        customInput={
          <Select
            onChange={(event) => {
              setFormState(event.currentTarget.value);
            }}
          >
            <option value="none">ーー</option>
            <option value="sax-lesson">サックスレッスン</option>
            <option value="choose-help">楽器選定</option>
            <option value="art-lesson">絵画レッスン</option>
            <option value="art-request">絵画製作依頼</option>
            <option value="sax-request">演奏依頼</option>
          </Select>
        }
      />
      {CategoryForm(formState)}
      <ContactButton />
    </div>
  );
}

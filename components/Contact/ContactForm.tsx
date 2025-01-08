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

import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";

import emailjs from "@emailjs/browser";

function CategoryForm(
  category: string,
  register: UseFormRegister<FieldValues>
): JSX.Element {
  if (category === "sax-lesson") {
    return <SaxLessonForm register={register} />;
  }
  if (category === "choose-help") {
    return <ChooseHelpForm register={register} />;
  }
  if (category === "art-lesson") {
    return <ArtLessonForm register={register} />;
  }
  if (category === "art-request") {
    return <ArtRequestForm register={register} />;
  }
  if (category === "sax-request") {
    return <SaxRequestForm register={register} />;
  }
  return <div className={styles.noneText}>カテゴリーを選択してください。</div>;
}

export default function ContactForm(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [formState, setFormState] = useState<string>("");

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    console.log(publicKey, serviceID, templateID);

    if (!publicKey || !serviceID || !templateID) {
      return;
    }

    emailjs.init({ publicKey: publicKey });
    await emailjs
      .send(serviceID, templateID, {
        to_name: values.name,
        from_name: "成田由美",
        to_email: values.email,
      })
      .then(
        () => {
          console.log(`Email sent to ${values.email}`);
        },
        (error) => {
          console.log(`Failed email to ${values.email}`);
          console.error(error);
        }
      );
  };

  const onSubmitError: SubmitErrorHandler<FieldValues> = (errors) => {
    console.log(errors);
  };

  return (
    <div className={styles.parent}>
      <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <InputRow
          htmlFor="name"
          label="お名前"
          required
          customInput={
            <Input
              id="email"
              width={"100%"}
              {...register("name", { required: "お名前を入力してください。" })}
            />
          }
        />
        <InputRow
          htmlFor="email"
          label="Eメール"
          required
          customInput={
            <Input
              id="email"
              width={"100%"}
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "有効なEメールアドレスを入力してください。",
                },
              })}
            />
          }
        />
        <InputRow
          htmlFor="gender"
          label="性別"
          customInput={
            <Select id="gender" {...register("gender")}>
              <option value="none">ーー</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
            </Select>
          }
        />
        <InputRow
          htmlFor="age"
          label="年齢区分"
          customInput={
            <Select id="age" {...register("age")}>
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
          htmlFor="category"
          label="カテゴリー"
          required
          customInput={
            <Select
              id="category"
              {...register("category", {
                required: true,
                onChange: (event) => {
                  setFormState(event.currentTarget.value);
                },
              })}
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
        {CategoryForm(formState, register)}
        <ContactButton />
      </form>
    </div>
  );
}

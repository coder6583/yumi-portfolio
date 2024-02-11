import { MouseEventHandler } from "react";
import styles from "./HeaderMenuButton.module.css";
import { clsx } from "clsx";
import { PageType, usePageContext } from "@/pages/_app";

export default function HeaderMenuButton({
  label,
  id,
  onClose,
}: {
  label: string;
  id: PageType;
  onClose: () => void;
}): JSX.Element {
  const { pageId, setPageId } = usePageContext();
  return (
    <button
      className={clsx(styles.button, pageId == id && styles.isClicked)}
      onClick={() => {
        setPageId(id);
        onClose();
      }}
      type="button"
    >
      {label}
    </button>
  );
}

"use client";
import styles from "@/styles/page.module.css";
import { MdOpenInNew } from "react-icons/md";
import { useNotification } from "@/hook/useNotification";

export default function Home() {
  const { NotificationHandler } = useNotification();

  return (
    <div className={styles.container}>
      <div
        className={styles.togglebutton}
        onClick={() => {
          NotificationHandler("Info", "Digit-Recognizer app.", "Info");
        }}
      >
        <MdOpenInNew />
      </div>
    </div>
  );
}

"use client";
import styles from "@/styles/page.module.css";
import { MdOpenInNew } from "react-icons/md";
import { useNotification } from "@/hook/useNotification";
import Uploads from "@/components/Uploads";
import React, { useState } from "react";
import usePYModels from "@/hook/usePYModels";

export default function Home() {
  const { NotificationHandler } = useNotification();
  const { predictDigitRecognizer } = usePYModels();
  const [images, setImages] = useState([]);
  const [prediction, setPrediction] = useState([]);
  const submit = async () => {
    const response = await predictDigitRecognizer(images);
    setPrediction(response);
  };

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
      <Uploads images={images} setImages={setImages} />
      <div className={styles.submit} onClick={submit}>
        <button>Submit</button>
      </div>
    </div>
  );
}

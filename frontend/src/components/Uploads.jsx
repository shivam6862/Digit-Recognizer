"use client";
import classes from "@/styles/Uploads.module.css";
import React from "react";
import Image from "next/image";
import { v4 } from "uuid";

const Uploads = ({ images, setImages }) => {
  return (
    <div className={classes.container}>
      <h1>Uploads Images</h1>
      <div className={classes.box}>
        <label htmlFor="file">BROWSE</label>
        <input
          type="file"
          id="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
              const URLS = [];
              for (let i = 0; i < files.length; i++) {
                const url = URL.createObjectURL(files[i]);
                const name = files[i].name.split(".")[0];
                const id = v4();
                URLS.push({ url: url, name: name, id: id, file: files[i] });
              }
              setImages([...images, ...URLS]);
            }
          }}
        />
      </div>
      <div className={classes.images}>
        {images.map((item, index) => (
          <div key={index} className={classes.image}>
            <Image src={item.url} alt="img" height={300} width={400} />
            <div className={classes.name}>{item.name}</div>
            <div
              className={classes.delete}
              onClick={() => {
                setImages(
                  images.filter((item) => item.id !== images[index].id)
                );
              }}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Uploads;

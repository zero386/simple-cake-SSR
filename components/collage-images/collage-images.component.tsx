import React, { useState, useEffect } from "react";
import styles from "./collage-images.module.scss";
import { ICollageImage } from './interfaces/index';

type SCcollageImagesProps = {
    images: ICollageImage[];
}

const SCcollageImagesComponent = ({ images, ...props }: SCcollageImagesProps) => {

    useEffect(() => {
        //Call API to Fetch Images
    }, []);
  return (
    <div className={styles["collage-wrapper"]}>
      {images.map((image, indexImage) => {
        return (
          <div key={indexImage} className={styles["container"]}>
            <img
              alt="lo"
              src={image.images[0]}
              width={"100%"}
              height={"100%"}
              className={styles["image"]}
            />
            <div className={styles["overlay"]}>
              <div className={`${styles["text"]} sc-text`}><label className={`${styles["sc-text"]}`}> {image.category}</label></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SCcollageImagesComponent;

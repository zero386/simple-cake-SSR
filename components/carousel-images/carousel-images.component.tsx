import React from "react";
import styles from "./carousel-images.module.scss";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

type SCcarouselImagesProps = {
  images: string[];
};

const SCcarouselImagesComponent = ({
  images,
  ...props
}: SCcarouselImagesProps) => {
  return (
    <Carousel fade>
      {images.map((image, indexImage) => {
        return (
          <Carousel.Item key={indexImage}>
            {/* Bug with Nextjs Image inside carousel component from React Bootstrap*/}
            <img
              className={`${styles["d-block"]} image-carousel`}
              src={image}
              alt="First slide"
              width={"100%"}
              height={"100%"}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default SCcarouselImagesComponent;

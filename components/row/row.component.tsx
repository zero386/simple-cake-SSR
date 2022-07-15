import Image from "next/image";
import styles from "./row.module.scss";
import { IColumn } from "./interfaces/index";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type SCrowProps = {
  columns: IColumn[];
};

const SCrowComponent = ({ columns, ...props }: SCrowProps) => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        control.start("visible");
      }, 100);
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className={`${styles["row-info"]} row`}>
        {columns.map((column, indexColumn) => {
          return (
            <div key={indexColumn} className={`${styles["column"]} about-info`}>
              {column.image && (
                <Image
                  src={`${column.image}`}
                  alt="SC-Image"
                  className="image-fluid"
                  width={"100%"}
                  height={"100%"}
                />
              )}
              {column.text && (
                <p className={`${styles["sc-text"]}`}>{column.text}</p>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SCrowComponent;

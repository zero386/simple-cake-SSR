import React from "react";
import styles from "./loading-spinner.module.scss";
import Image from 'next/image';

const SCloadingSpinner = () => {
  return (
    <div className={`${styles['spinner-container']}`}>
      <img src={"/assets/logos/SClogo.png"} width={'100px'} height={'100px'} alt="d" className={`${styles['spinner']}`} />
    </div>
  );
};

export default SCloadingSpinner;

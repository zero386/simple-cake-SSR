import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { prefix } from "../../prefix";

const SCfooterComponent = () => {
  return (
    <div className={`${styles["footer"]}`}>
      <footer>
        <div className={`${styles["container"]}`}>
          <div className={`${styles["contact"]}`}>
            <p className={`${styles["sc-text"]}`}>Contacto</p>
            <label className={`${styles["sc-text"]}`}>Cel: 3327897983</label>
            <label className={`${styles["sc-text"]}`}>Zapopan, Jalisco</label>
          </div>
          <div className={`${styles["follow-us"]}`}>
            <ul
              className={`${styles["social-network"]} list-inline text-center`}
            >
              <li className={`${styles["list-inline-item"]}`}>
                <label className={`${styles["sc-text"]}`}>Siguenos</label>
              </li>
              <li className={`${styles["list-inline-item"]}`}>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Instagram</Tooltip>}
                >
                  <a
                    className={`${styles["btn-floating"]} btn-tw mx-1`}
                    href="https://instagram.com/reposteriasc"
                  >
                    <img
                      src={`/assets/logos/instagram-logo.png`}
                      className={`${styles["instagram"]}`}
                      alt="instagram"
                    />
                  </a>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
          <div className={`${styles["copyright"]}`}>
            <label className={`${styles["sc-text"]}`}>2022 Copyright</label>
            <label className={`${styles["sc-text"]}`}>www.simplecake.com.mx</label>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SCfooterComponent;

import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SCfooterComponent = () => {
  return (
    <div className={`${styles["footer"]}`}>
      <footer>
        <div className={`${styles["container"]}`}>
          <div>
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
                    href="https://www.google.com"
                  >
                    <Image
                      src={"/assets/logos/instagram-logo.png"}
                      width={'60%'}
                      height={'60%'}
                      alt="instagram"
                    />
                  </a>
                </OverlayTrigger>
              </li>
              <li className={`${styles["list-inline-item"]}`}>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Facebook</Tooltip>}
                >
                  <a
                    className={`${styles["btn-floating"]} btn-tw mx-1`}
                    href="https://www.google.com"
                  >
                    <Image
                      src={"/assets/logos/fb-logo.png"}
                      width={'60%'}
                      height={'60%'}
                      alt="facebook"
                    />
                  </a>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
          <div className={`${styles["copyright"]}`}>
            <div className={`${styles["copyright-text"]}`}>
              <label className={`${styles["sc-text"]}`}>2022 Copyright</label>
            </div>
            <div className={`${styles["copyright-text"]}`}>
              <label className={`${styles["sc-text"]}`}>
                simplecake.com.mx Todos los derechos reservados
              </label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SCfooterComponent;

import React, { ReactComponentElement, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from 'next/image';
import styles from "./modal.module.scss";

type SCmodalProps = {
  showModal: boolean;
  headerTitle?: string;
  bodyContent?: any;
  onCloseModal: (onClose: boolean) => void;
};

const SCmodalComponent = ({
  showModal,
  headerTitle,
  bodyContent,
  onCloseModal,
  ...props
}: SCmodalProps) => {
  const [show, setShow] = useState(showModal);

  const closeModal = () => {
    setShow(false);
    onCloseModal(true);
  };

  useEffect(() => {
    if (showModal) {
      setShow(true);
    }
  }, [showModal]);

  return (
    <Modal
      show={show}
      onHide={() => closeModal()}
      size="lg"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header className={`${styles['modal-header']}`}>
        <Modal.Title id="example-custom-modal-styling-title">
          <label className={`${styles['sc-text']}`}>{headerTitle}</label>
        </Modal.Title>
        <img
          src={"/assets/icons/x-icon.png"}
          alt="xIcon"
          title="Logo"
          className={`${styles['x-icon']}`}
          width={"40px"}
          height={"40px"}
          onClick={closeModal}
        />
      </Modal.Header>
      <Modal.Body>{bodyContent}</Modal.Body>
    </Modal>
  );
};

export default SCmodalComponent;

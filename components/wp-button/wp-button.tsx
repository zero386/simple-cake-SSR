import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const SCwpButtonComponent = () => {
  const [showWPButton, setShowWPButton] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
      setShowWPButton(true);
    }
  }, []);

  return (
    <>
      {showWPButton && (
        <FloatingWhatsApp
          popupMessage="Hola! Deseas realizar un pedido?"
          phone="3324953033"
          headerColor="#FF6666"
          headerTitle="Simple Cake Chat"
        />
      )}
    </>
  );
};

export default SCwpButtonComponent;

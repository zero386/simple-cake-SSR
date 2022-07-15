import React from "react";
import Badge from "react-bootstrap/Badge";
import styles from "./badge.module.scss";

type SCbadgeProps = {
  id?: string | number;
  text: string;
  color: string;
};

const SCbadgeComponent = ({ id, text, color, ...props }: SCbadgeProps) => {
  return (
    <Badge bg={color} className="badge">
      {text}
    </Badge>
  );
};

export default SCbadgeComponent;

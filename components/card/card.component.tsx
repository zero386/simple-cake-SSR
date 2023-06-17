import React from "react";
import { Card } from "react-bootstrap";
import styles from "./card.module.scss";

type SCcardProps = {
  id?: string | number;
  image: string;
  title?: string;
  text?: string[];
};

const SCcardComponent = ({ image, title, text, ...props }: SCcardProps) => {
  return (
    <Card style={{ width: "18rem", border: 0 }} className={`${styles['card']}`}>
      <Card.Img style={{ borderRadius: "50%" }} variant="top" src={image} width="200px" />
      <Card.Body>
      <hr style={{ height: "5px", backgroundColor: '#FF6666',  }}></hr>
        <Card.Title>
          <label className={`${styles['sc-text']}`}>{title}</label>
        </Card.Title>

        <div className={`${styles['price-item']} sc-text`}>
          <Card.Text>
            {text && text.length > 0 && <label>{text[0]}</label>}
          </Card.Text>
        </div>
        <div className={`${styles['content-item']} sc-text`}>
          <Card.Text>
            {text && text.length > 1 && <label>{text[1]}</label>}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SCcardComponent;

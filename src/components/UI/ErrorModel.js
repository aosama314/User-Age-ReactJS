import React from "react";
import Button from "./Button";
import Card from "./Card";
import cssStyles from "./ErrorModel.module.css";
const ErrorModel = (props) => {
  return (
    <div>
      <div className={cssStyles.backdrop} onClick={props.onConfirm} />
      <Card className={cssStyles.modal}>
        <header className={cssStyles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={cssStyles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={cssStyles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;

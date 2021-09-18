import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import cssStyles from "./ErrorModel.module.css";

const Backdrop = (props) => {
  return <div className={cssStyles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModel = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModel;

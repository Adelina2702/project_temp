import React from "react";
import styles from "./index.module.css";

const Button = ({ children, onClick = () => {}, projectType = "default" }) => {
  return (
    <button onClick={onClick} className={styles[projectType]}>
      {children}
    </button>
  );
};

export default Button;

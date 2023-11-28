import React from "react";
import classes from "@/styles/header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>Digit Recognizer</div>
    </div>
  );
};

export default Header;

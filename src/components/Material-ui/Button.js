import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function TheButton(props) {
  const { label, callback, colorType } = props;

  const useStyles = makeStyles({
    button: {
      margin: "30px auto",
      color: "white"
    }
  });

  const classes = useStyles();
  return (
    <Button
      onClick={callback}
      color={colorType}
      variant="contained"
      className={classes.button}
    >
      {label}
    </Button>
  );
}

export default TheButton;

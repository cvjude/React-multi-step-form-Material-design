import React from "react";
import TextField from "@material-ui/core/TextField";

function Input(props) {
  const { label, placeHolder, defaultValue, handleChange, name } = props;
  return (
    <TextField
      id="standard-with-placeholder"
      label={label}
      placeholder={placeHolder}
      defaultValue={defaultValue}
      margin="normal"
      onChange={handleChange(name)}
    />
  );
}

export default Input;

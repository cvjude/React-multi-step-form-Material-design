import React from "react";
import NavBar from "./Material-ui/NavBar";

function Success() {
  return (
    <React.Fragment>
      <NavBar title="Success" />
      <div style={formStyle}>
        <h1>Thank you for submittion</h1>
        <p>you will recieve an email with futher instructions</p>
      </div>
    </React.Fragment>
  );
}

const formStyle = {
  display: "flex",
  width: "40%",
  flexDirection: "column",
  justifyContent: "center",
  margin: "auto",
  textAlign: "center"
};

export default Success;

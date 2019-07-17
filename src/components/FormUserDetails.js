import React, { Component } from "react";
import NavBar from "./Material-ui/NavBar";
import Input from "./Material-ui/Input";
import Button from "./Material-ui/Button";

// import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <NavBar title="Enter User Details" />
        <div style={formStyle}>
          <Input
            name="firstName"
            label="First Name"
            placeHolder="Enter your first name"
            defaultValue={values.firstName}
            handleChange={handleChange}
          />
          <Input
            name="lastName"
            label="Last Name"
            placeHolder="Enter your last name"
            defaultValue={values.lastName}
            handleChange={handleChange}
          />
          <Input
            name="email"
            label="Email"
            placeHolder="Enter your email"
            defaultValue={values.email}
            handleChange={handleChange}
          />
          <Button
            colorType="primary"
            label="Continue"
            callback={this.continue}
          />
        </div>
      </React.Fragment>
    );
  }
}

const formStyle = {
  display: "flex",
  width: "40%",
  flexDirection: "column",
  justifyContent: "center",
  margin: "auto"
};

export default FormUserDetails;

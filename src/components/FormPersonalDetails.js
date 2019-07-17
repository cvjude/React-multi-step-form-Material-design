import React, { Component } from "react";
import NavBar from "./Material-ui/NavBar";
import Input from "./Material-ui/Input";
import Button from "./Material-ui/Button";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <NavBar title="Enter Personal Details" />
        <div style={formStyle}>
          <Input
            name="occupation"
            label="Occupation"
            placeHolder="Enter your occupation"
            defaultValue={values.occupation}
            handleChange={handleChange}
          />
          <Input
            name="city"
            label="city"
            placeHolder="Enter your City"
            defaultValue={values.city}
            handleChange={handleChange}
          />
          <Input
            name="bio"
            label="bio"
            placeHolder="Enter your Bio"
            defaultValue={values.bio}
            handleChange={handleChange}
          />
          <div style={buttonDiv}>
            <Button
              colorType="primary"
              label="Continue"
              callback={this.continue}
            />
            <Button colorType="default" label="Back" callback={this.back} />
          </div>
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

const buttonDiv = {
  display: "flex",
  justifyContent: "spaceBetween"
};

export default FormPersonalDetails;

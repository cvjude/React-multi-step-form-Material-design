import React, { Component } from "react";
import NavBar from "./Material-ui/NavBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "./Material-ui/Button";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
      handleChange
    } = this.props;
    return (
      <React.Fragment>
        <NavBar title="Confirm user details" />
        <div style={formStyle}>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <div style={buttonDiv}>
            <Button
              colorType="primary"
              label="Confirm & Continue"
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

export default Confirm;

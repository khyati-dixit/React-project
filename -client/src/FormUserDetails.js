import React, { Component } from "react";
//import validate from './validate'
//import renderField from './renderField'
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              marginRight="theme.spacing(2)"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <center>
              <Typography align-self="center" variant="h6">
                Enter Your Details
              </Typography>
            </center>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xs">
          <center>
            <Typography color="primary" variant="h5">
              Personal Details
            </Typography>
            <Typography color="primary" variant="h6">
              Step1 of 4
            </Typography>

            <TextField
              placeholder="First Name"
              label="Enter Your First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />

            <br />
            <TextField
              placeholder="Last Name"
              label="Enter Your Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Email"
              label="Enter Your Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Phone number"
              label="Enter Your Phone number"
              onChange={handleChange("phone")}
              defaultValue={values.phone}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Current Address"
              label="Enter Your Current Address"
              onChange={handleChange("current")}
              defaultValue={values.current}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Permanant Address"
              label="Enter Your Permanant Address"
              onChange={handleChange("permanant")}
              defaultValue={values.permanant}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </center>
        </Container>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;

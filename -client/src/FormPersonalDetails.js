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
import Container from "@material-ui/core/Container";
export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
              Educational Details
            </Typography>
            <Typography color="primary" variant="h6">
              Step2 of 4
            </Typography>
            <TextField
              placeholder="Degree"
              label="Enter Your Graduation Degrer"
              onChange={handleChange("course")}
              defaultValue={values.course}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Enter Your College/Univercity Name"
              placeholder="college"
              onChange={handleChange("college")}
              defaultValue={values.college}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Enter Your year of Graduation"
              placeholder="year"
              onChange={handleChange("year")}
              defaultValue={values.year}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Enter Your Percentage/CGPA"
              placeholder="percentage"
              onChange={handleChange("percentage")}
              defaultValue={values.percentage}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            {"     "}
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </center>
        </Container>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;

import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export class ProfessionalDetails extends Component {
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
              Professional Experienece Details
            </Typography>
            <Typography color="primary" variant="h6">
              Step3 of 4
            </Typography>
            <TextField
              label="Enter Your Company Details"
              placeholder="company"
              onChange={handleChange("company")}
              defaultValue={values.company}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              type="date"
              id="date"
              label="from"
              defaultValue={values.from}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              id="date"
              type="date"
              label="to"
              efaultValue={values.to}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Enter Your Designation"
              placeholder="designation"
              onChange={handleChange("designation")}
              defaultValue={values.designation}
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

export default ProfessionalDetails;

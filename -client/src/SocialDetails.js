import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export class SocialDetails extends Component {
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
              Social Details and Hobbies
            </Typography>
            <Typography color="primary" variant="h6">
              Step4 of 4
            </Typography>
            <TextField
              label="Enter Your LinkedIn profile link"
              placeholder="linked"
              onChange={handleChange("linked")}
              defaultValue={values.linked}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Enter Your GitHub profile link"
              placeholder="github"
              onChange={handleChange("github")}
              defaultValue={values.github}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Enter Your Facebook profile link"
              placeholder="facebook"
              onChange={handleChange("facebook")}
              defaultValue={values.facebook}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Enter Your Hobbies"
              placeholder="hobbies"
              onChange={handleChange("hobbies")}
              defaultValue={values.hobbies}
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
export default SocialDetails;

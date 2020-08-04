import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        phone,
        current,
        permanant,
        course,
        college,
        year,
        percentage,
        company,
        designation,

        linked,
        github,
        facebook,
        hobbies,
      },
    } = this.props;
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
                <ListItemText primary="Phone No." secondary={phone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Current Address:" secondary={current} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Permanant Address"
                  secondary={permanant}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Course" secondary={course} />
              </ListItem>
              <ListItem>
                <ListItemText primary="College Name" secondary={college} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Year" secondary={year} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Percentage/CGPA"
                  secondary={percentage}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Name" secondary={company} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Designation" secondary={designation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="LinkedIn link" secondary={linked} />
              </ListItem>
              <ListItem>
                <ListItemText primary="GitHub link" secondary={github} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Facebook link" secondary={facebook} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Hobbies" secondary={hobbies} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            {"     "}

            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </center>
        </Container>
        <br />
        <br />
        <div></div>
      </React.Fragment>
    );
  }
}

export default Confirm;

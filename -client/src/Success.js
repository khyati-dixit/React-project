import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";

export class Success extends Component {
  render() {
    return (
      <Dialog open fullWidth maxWidth="sm">
        <center>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions.</p>
        </center>
      </Dialog>
    );
  }
}

export default Success;

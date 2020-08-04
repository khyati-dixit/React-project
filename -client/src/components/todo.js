import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodos, deleteTodo, addTodo } from "../actions/todoAction";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "../list";
import UserForm from "../UserForm";

class Todo extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  handleShow = (e) => {
    <List />;
  };
  handleAdd = (e) => {
    <UserForm />;
  };

  render() {
    const { todos } = this.props.todo;

    const handleAddTodo = (e) => {
      const todo = prompt("Enter Todo here", " ");

      const newTodo = {
        name: todo,
      };
      this.props.addTodo(newTodo);
    };

    const handleDelete = (id) => {
      this.props.deleteTodo(id);
    };

    return (
      <React.Fragment>
        <div
          style={{
            margin: "10px",
            border: "2px solid #ec",
          }}
        >
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
                  Company Employee Details
                </Typography>
              </center>
            </Toolbar>
          </AppBar>
          <Button
            color="primary"
            variant="contained"
            style={{
              margin: "10px",
            }}
            onClick={this.handleShow}
          >
            SHOW LIST
          </Button>
          <br />
          <Button
            color="secondary"
            variant="contained"
            style={{
              margin: "10px",
            }}
            onClick={this.handleAdd}
          >
            ADD EMPLOYEE
          </Button>
          <br />
          <Button
            color="inherit"
            variant="contained"
            style={{
              margin: "10px",
            }}
            onClick={this.handleDelete}
          >
            DELETE EMPLOYEE
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

Todo.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodos, deleteTodo, addTodo })(
  Todo
);

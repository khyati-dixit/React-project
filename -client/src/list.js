import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodos } from "./actions/todoAction";

class Todo extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props.todo;

    return (
      <div
        style={{
          margin: "10px",
          border: "2px solid #ec",
        }}
      >
        <Table hover responsive striped bordered>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo._id}>
                  <td>{todo.name}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
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

export default connect(mapStateToProps, { getTodos })(Todo);

import React from "react";

import Todo from "../components/Todo";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
          {
              id: 11,
              text: "Read React",
              complete: false
          },
          {
              id: 12,
              text: "Read Angular",
              complete: true
          },
          {
              id: 13,
              text: "Read ES6",
              complete: false
          },
      ],
    };
  }


  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

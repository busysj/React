import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // state todos를 가져와서 값 할당
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  // dispatch 해서 사용될 액션함수(모듈)를 넣어줌
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);

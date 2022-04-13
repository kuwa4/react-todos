import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./Components/InputTodo";
import { IncompleteTodos } from "./Components/IncompleteTodos";
import { CompleteTodos } from "./Components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComp = (index) => {
    const newIncompTodos = [...incompleteTodos];
    newIncompTodos.splice(index, 1);

    const compTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompTodos);
    setCompleteTodos(compTodos);
  };
  const onClickBack = (index) => {
    const compTodos = [...completeTodos];
    const IncompTodos = [...incompleteTodos, compTodos[index]];
    compTodos.splice(index, 1);
    setIncompleteTodos(IncompTodos);
    setCompleteTodos(compTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

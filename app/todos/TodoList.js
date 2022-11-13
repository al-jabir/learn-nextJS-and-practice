import Link from 'next/link';
import React from 'react';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos;
};

const TodoList = async () => {
  const todos = await fetchTodos();
  console.log(todos);
  return (
    <>
      {todos.map((todo) => {
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>;
      })}
    </>
  );
};

export default TodoList;

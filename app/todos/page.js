import React from 'react';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    next: { revalidate: 60 },
  });
  const todos = await res.json();
  return todos;
};

const Todos = async () => {
  const todos = await fetchData();

  return (
    <>
      {todos.map(({ id, title }) => {
        return (
          <div key={id}>
            <p>
              <span className='font-bold'>title : </span> {title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Todos;

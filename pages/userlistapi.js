import React from 'react';

const UserListApi = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserListApi;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const err = console.log(`data is not found ${err}`);

  return {
    props: {
      users: data,
    },
  };
}

import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div>
      <h1>This is my product page</h1>
      <Link href='/'>Home</Link>
      <div>
        <h3>Hello World</h3>
        <h3>Hello Programmers</h3>
        <h3>Hello Coders</h3>
      </div>
    </div>
  );
};

export default index;

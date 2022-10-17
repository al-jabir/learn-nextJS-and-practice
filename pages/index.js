import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function Home() {
  const clicks = useRouter();

  const handleClick = () => {
    console.log('placing your order');
    clicks.push('/product');
  };

  return (
    <div>
      <h1>This is home page</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/product'>Product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;

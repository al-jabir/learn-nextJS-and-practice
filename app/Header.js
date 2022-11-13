import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='p-5 bg-sky-500 font-bold'>
      <Link href='/' className='px-2 py-1 bg-white text-purple-500 rounded-lg'>
        {' '}
        Home
      </Link>
    </header>
  );
};

export default Header;

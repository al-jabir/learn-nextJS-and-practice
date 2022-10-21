import { useRouter } from 'next/router';
import React from 'react';

const BlogPost = () => {
  const count = useRouter();
  const { id } = count.query;
  return (
    <div>
      <h1>This is blog post from {id}</h1>
    </div>
  );
};

export default BlogPost;

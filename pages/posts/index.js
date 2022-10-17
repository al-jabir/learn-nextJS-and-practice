import Link from 'next/link';
import React from 'react';

function PostList({ post }) {
  return (
    <div>
      <h1>PostList</h1>
      {post.map(({ id, title }) => {
        return (
          <div key={id}>
            <Link href={`posts/${postId}`} passHref />
            <p>
              {id} - {title}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  console.log(data);

  return {
    props: {
      post: data,
    },
  };
}

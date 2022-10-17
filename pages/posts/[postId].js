import React from 'react';

function PostList({ post }) {
  return (
    <div>
      <h1>PostList of count</h1>
      {post.map(({ id, body }) => {
        return (
          <div key={id}>
            <p>{body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default PostList;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  console.log(data);

  return {
    props: {
      post: data,
    },
  };
}

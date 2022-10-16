import { useRouter } from 'next/router';
import React from 'react';

const Review = () => {
  const count = useRouter();
  const { productsId, reviewId } = count.query;
  return (
    <div>
      Review {reviewId} for products {productsId}{' '}
    </div>
  );
};

export default Review;

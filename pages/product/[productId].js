import { useRouter } from 'next/router';
import React from 'react';

const ProductItem = () => {
  const count = useRouter();
  const productId = count.query.productId;
  return <div>This is product items {productId}</div>;
};

export default ProductItem;

import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>ProductDetails {productId}</div>;
};

export default ProductDetails;

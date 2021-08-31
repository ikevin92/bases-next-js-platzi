import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  // hook para las rutas
  const {
    query: { productId },
  } = useRouter();

  return (
    <div>
      <h2>Esta es la pagina del producto: {productId}</h2>
    </div>
  );
};

export default ProductItem;

import React from 'react'
import { useFilterContext } from '../context/filter_context';

const ProductList = () => {

  const { filter_products, setGridView } = useFilterContext();
    console.log(filter_products);

  if (setGridView === true) {
    return <GridView products={filter_products} />
  };
  
}

export default ProductList
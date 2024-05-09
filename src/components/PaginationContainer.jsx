import React from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

const PaginationContainer = () => {
  return (
    <React.Fragment>
      <ProductsList />
      <ProductsGrid />
    </React.Fragment>
  );
};

export default PaginationContainer;

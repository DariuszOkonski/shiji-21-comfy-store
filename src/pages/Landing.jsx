import React from 'react';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <FeaturedProducts />
    </React.Fragment>
  );
};

export default Landing;

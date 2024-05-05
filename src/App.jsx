import React from 'react';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';

function App() {
  return (
    <React.Fragment>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
      <About />
      <Cart />
      <Checkout />
      <Error />
      <HomeLayout />
      <Landing />
      <Orders />
      <Products />
      <Register />
      <SingleProduct />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <React.Fragment>
      <Header />
      <Navbar />
      {isPageLoading && <Loading />}
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default HomeLayout;

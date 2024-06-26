import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckBox from './FormCheckBox';

const Filters = () => {
  const { meta } = useLoaderData();

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <FormInput
        type='search'
        label='search product'
        name='search'
        size='input-sm'
      />

      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        size='select-sm'
      />

      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        size='select-sm'
      />

      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
      />

      <FormRange label='select price' name='range' size='range-sm' />

      <FormCheckBox
        name='shipping'
        label='free shipping'
        size='checkbox-sm'
        defaultValue={false}
      />

      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};

export default Filters;

import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from './Post';

test('renders post component with correct data set', () => {
  // we extract out the `getByText`, which has the container context set already. and then the `test` path matches and returns the *element* 
  const { getByText } = render(<Post title='header' body='body' />)
    
  getByText('header')
  getByText('body')
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import PostItem from './PostItem';

test('renders Sidebar component with correct data set', () => {

  const { getByText } = render(<PostItem key={1} date={new Date(2020, 2, 2)} title='Test' body='Test Body'  />)
  
  expect(getByText('Test')).toBeInTheDocument();

});

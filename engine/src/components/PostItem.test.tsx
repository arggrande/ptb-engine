import React from 'react';
import { render } from '@testing-library/react';
import PostItem from './PostItem';
import moment from 'moment';

function getDefaultTestComponent() {
   return render(<PostItem key={1} date={new Date(2020, 2, 2)} title='Test' body='Test Body'  />)
}

test('renders Sidebar component with correct data set', () => {

  const { getByText } = getDefaultTestComponent();
  
  expect(getByText('Test')).toBeInTheDocument();

});

test('renders the correct date format', () => {
  const { getByText } = render(<PostItem key={1} date={moment("20200825").toDate()} title='Test' body='Test Body'  />)
  
  expect(getByText(/August 25th 2020/)).toBeInTheDocument();
});
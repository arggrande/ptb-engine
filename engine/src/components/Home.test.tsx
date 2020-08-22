import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home';
import { PostModel } from '../models/PostModel';

test('main render', () => {
  
  let mockPosts: PostModel[] = [
    {
      id: 1,
      title: 'hello',
      body: 'body',
      date: new Date(2020, 1, 1),
      headerUri: 'test'
    }
  ]
  const {getByText} = render(<Home posts={mockPosts} />);

  expect(getByText('hello')).toBeInTheDocument();
  
});
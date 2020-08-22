import React from 'react';
import { render } from '@testing-library/react';
import NewPost from './NewPost';

test('Main render of New Post', () => {

  const { getByText } = render(<NewPost />)

  expect(getByText('New Post')).toBeInTheDocument();
})
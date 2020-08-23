import React from 'react';
import { render } from '@testing-library/react';
import NewPost from './NewPost';

test('Main render of New Post', () => {

  const { getByPlaceholderText } = render(<NewPost />)

  expect(getByPlaceholderText('Begin writing your post...')).toBeInTheDocument();
})
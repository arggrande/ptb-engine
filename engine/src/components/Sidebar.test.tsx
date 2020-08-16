import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders Sidebar component with correct data set', () => {

  const { getByAltText } = render(<Sidebar title='Pending Technical' subText='A Programmers Life' avatarUri='https://google.com' twitterBioUri='https://pendingtechnical.com'  />)
    

  expect(getByAltText('Avatar')).toBeInTheDocument();
  expect(getByAltText('Twitter Bio')).toBeInTheDocument();

  // todo: simulate clicking the avatar and twitter links takes me somewhere
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from './index';

test('renders the loader', () => {
  render(<ListItem 
        data={{
            userId: 1,
            id: 1,
            title: '',
            body: ''
        }}
        />);
  const loader = screen.getByTestId('listItem');
  expect(loader).toBeInTheDocument();
});
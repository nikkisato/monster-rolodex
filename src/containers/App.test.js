import { shallow } from 'react';
import React from 'react';
import App from './App';

it('expects to render App Component', () => {
  const mockStore = {
    monsters: [],
    searchField: '',
  };

  expect(shallow(<App store={mockStore} />)).toMatchSnapshot;
});

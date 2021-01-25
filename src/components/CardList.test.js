import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expects to render cardList Component', () => {
  const mockMonsters = [
    {
      id: 1,
      name: 'john snow',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    },
  ];
  expect(
    shallow(<CardList monsters={mockMonsters} />).length
  ).toMatchSnapshot();
});

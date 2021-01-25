import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestMonsters: jest.fn(),
    monsters: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('fileters monsters', () => {
  const mockProps = {
    onRequestMonsters: jest.fn(),
    monsters: [],
    searchField: 'a',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterMonsters()).toEqual([]);
});

it('fileters Monsters correctly', () => {
  const filteredMonsters = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
  ];
  const mockProps = {
    onRequestMonsters: jest.fn(),
    monsters: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
    ],
    searchField: 'Leanne',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterMonsters()).toEqual(filteredMonsters);
});

it('fileters Monsters correctly 2', () => {
  const filteredMonsters = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
  ];
  const mockProps = {
    onRequestMonsters: jest.fn(),
    monsters: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
    ],
    searchField: 'Xavier',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterMonsters()).toEqual([]);
});

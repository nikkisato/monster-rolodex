import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_FAILED,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
} from './constants.js';

import * as reducers from './reducers';

describe('searchMonsters', () => {
  const initialStateSearch = {
    searchField: '',
  };
  it('should return the initial state', () => {
    expect(reducers.searchMonsters(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchMonsters(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc',
      })
    ).toEqual({ searchField: 'abc' });
  });
});

const initialStateMonsters = {
  monsters: [],
  isPending: true,
};
describe('requestMonsters', () => {
  it('should handle REQUEST_MONSTERS_PENDING action', () => {
    expect(
      reducers.requestMonsters(initialStateMonsters, {
        type: REQUEST_MONSTERS_PENDING,
      })
    ).toEqual({
      monsters: [],
      isPending: true,
    });
  });

  it('should handle REQUEST_MONSTERS_SUCCESS action', () => {
    expect(
      reducers.requestMonsters(initialStateMonsters, {
        type: REQUEST_MONSTERS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'test@gmail.com',
          },
        ],
      })
    ).toEqual({
      monsters: [
        {
          id: '123',
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
      isPending: false,
    });
  });

  it('should handle REQUEST_MONSTERS_FAILED action', () => {
    expect(
      reducers.requestMonsters(initialStateMonsters, {
        type: REQUEST_MONSTERS_FAILED,
        payload: 'failed',
      })
    ).toEqual({
      error: 'failed',
      isPending: false,
      monsters: [],
    });
  });
});

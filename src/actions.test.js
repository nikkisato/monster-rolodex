import * as actions from './actions';
import * as types from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search monsters', () => {
  const text = 'boooo';
  const expectedAction = {
    type: types.CHANGE_SEARCH_FIELD,
    payload: text,
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

describe('Fetch monsters action PENDING', () => {
  it('should creat a Pending action on request Monsters', () => {
    const store = mockStore();
    store.dispatch(actions.requestMonsters());
    const action = store.getActions();
    expect(action[0]).toEqual({ type: 'REQUEST_MONSTERS_PENDING' });
  });
});

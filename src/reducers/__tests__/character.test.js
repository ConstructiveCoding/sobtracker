import CharacterReducer from '../character';

import * as types from '../../actions/actionTypes';

describe('Character reducer', () => {
  it('return the default state when there is no matching action', () => {
    const returnedState = CharacterReducer();

    expect(returnedState).toBeDefined();
    expect(returnedState.characterList).toHaveLength(0);
  });

  it('should store a newly created character', () => {
    const initialState = {
      characterList: []
    };

    const action = {
      type: types.CREATE_CHARACTER,
      character: { name: 'test character' }
    };

    const returnedState = CharacterReducer(initialState, action);
    expect(returnedState).toBeDefined();
    expect(returnedState.characterList).toBeDefined();
    expect(returnedState.characterList).toHaveLength(1);
    expect(returnedState.characterList[0].name).toEqual('test character');
  });
});

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
      characterList: [],
    };

    const action = {
      type: types.CREATE_CHARACTER,
      character: { name: 'test character' },
    };

    const returnedState = CharacterReducer(initialState, action);
    expect(returnedState).toBeDefined();
    expect(returnedState.characterList).toBeDefined();
    expect(returnedState.characterList).toHaveLength(1);
    expect(returnedState.characterList[0].name).toEqual('test character');
  });

  it('should select the specified character', () => {
    const initialState = {
      characterList: [
        {
          id: 'character1',
          name: 'test character 1',
        },
        {
          id: 'character2',
          name: 'test character 2',
        },
      ],
      selectedCharacter: undefined,
    };

    const action = {
      type: types.LOAD_CHARACTER,
      characterId: 'character2',
    };

    const returnedState = CharacterReducer(initialState, action);
    expect(returnedState).toBeDefined();
    expect(returnedState.characterList).toHaveLength(2);
    expect(returnedState.selectedCharacter).toBeDefined();
    expect(returnedState.selectedCharacter.id).toEqual('character2');
    expect(returnedState.selectedCharacter.name).toEqual('test character 2');
  });
});

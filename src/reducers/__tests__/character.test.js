import Immutable from 'seamless-immutable';

import CharacterReducer from '../character';
import * as types from '../../actions/actionTypes';

describe('Character reducer', () => {
  it('should return the default state when there is no matching action', () => {
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

  it('should update the specified charcter and attributes', () => {
    const initialState = Immutable({
      characterList: [
        {
          id: 'character1',
          name: 'test character 1',
          xp: 235,
          level: 1,
        },
        {
          id: 'character2',
          name: 'test character 2',
          xp: 535,
          level: 0,
        },
        {
          id: 'character3',
          name: 'test character 3',
          xp: 5353,
          level: 100,
        },
      ],
      selectedCharacter: 'character2',
    });

    const action = {
      type: types.UPDATE_CHARACTER,
      characterId: 'character2',
      characterUpdate: {
        xp: 35,
        level: 1,
      },
    };

    const returnedState = CharacterReducer(initialState, action);
    expect(returnedState.characterList).toHaveLength(3);

    // Make sure that the first character was not updated
    expect(returnedState.characterList[0].id).toEqual('character1');
    expect(returnedState.characterList[0].xp).toEqual(235);
    expect(returnedState.characterList[0].level).toEqual(1);

    // Make sure that the last character was not updated
    expect(returnedState.characterList[2].id).toEqual('character3');
    expect(returnedState.characterList[2].xp).toEqual(5353);
    expect(returnedState.characterList[2].level).toEqual(100);

    // Check that the intended update was applied
    expect(returnedState.characterList[1].id).toEqual('character2');
    expect(returnedState.characterList[1].xp).toEqual(35);
    expect(returnedState.characterList[1].level).toEqual(1);
  });
});

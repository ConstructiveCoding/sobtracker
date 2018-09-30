import Immutable from 'seamless-immutable';

import CharacterReducer from '../character';
import * as types from '../../actions/actionTypes';

describe('Character reducer', () => {
  it('should return the default state when there is no matching action', () => {
    const returnedState = CharacterReducer();

    expect(returnedState).toBeDefined();
    expect(returnedState.allIds).toHaveLength(0);
    expect(returnedState.byId).toBeDefined();
    expect(returnedState.selectedCharacter).toBeUndefined();
  });

  it('should store a newly created character', () => {
    const initialState = {
      allIds: [],
      byId: {},
    };

    const action = {
      type: types.CREATE_CHARACTER,
      character: { name: 'test character', id: '1234567890' },
    };

    const returnedState = CharacterReducer(initialState, action);
    expect(returnedState).toBeDefined();

    expect(returnedState.allIds).toHaveLength(1);
    expect(returnedState.allIds[0]).toEqual('1234567890');

    expect(returnedState.byId['1234567890'].name).toEqual('test character');
  });

  it('should select the specified character', () => {
    const initialState = {
      allIds: ['character1', 'character2'],
      byId: {
        character1: {
          id: 'character1',
          name: 'test character 1',
        },
        character2: {
          id: 'character2',
          name: 'test character 2',
        },
      },
      selectedCharacter: undefined,
    };

    const action = {
      type: types.LOAD_CHARACTER,
      characterId: 'character2',
    };

    const returnedState = CharacterReducer(initialState, action);
    expect(returnedState).toBeDefined();
    expect(returnedState.selectedCharacter).toBeDefined();
    expect(returnedState.selectedCharacter.id).toEqual('character2');
    expect(returnedState.selectedCharacter.name).toEqual('test character 2');
  });

  it('should update the specified character and attributes', () => {
    const initialState = Immutable({
      allIds: ['character1', 'character2', 'character3'],
      byId: {
        character1: {
          id: 'character1',
          name: 'test character 1',
          xp: 235,
          level: 1,
        },
        character2: {
          id: 'character2',
          name: 'test character 2',
          xp: 535,
          level: 0,
        },
        character3: {
          id: 'character3',
          name: 'test character 3',
          xp: 5353,
          level: 100,
        },
      },
      selectedCharacter: { id: 'character2' },
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
    expect(returnedState.byId['character2'].xp).toEqual(35);
    expect(returnedState.byId['character2'].level).toEqual(1);
  });

  it('should add a new item to the currently selected character', () => {
    const InitialState = Immutable({
      allIds: ['character2'],
      byId: {
        character2: {
          id: 'character2',
          name: 'test character 2',
          xp: 535,
          level: 0,
          items: [],
        },
      },
      selectedCharacter: { id: 'character2' },
    });

    const testItemName = 'Test Item';
    const testItemId = 'TEST_ITEM_ID';

    const action = {
      type: types.CREATE_ITEM,
      item: { id: testItemId, name: testItemName },
    };

    const updatedState = CharacterReducer(InitialState, action);

    expect(updatedState.byId['character2'].items).toHaveLength(1);
    expect(updatedState.byId['character2'].items[0]).toEqual(testItemId);

    expect(updatedState.selectedCharacter.items).toHaveLength(1);
    expect(updatedState.selectedCharacter.items[0]).toEqual(testItemId);
  });

  it('should add a new injury to the currently selected character', () => {
    const InitialState = Immutable({
      allIds: ['character2'],
      byId: {
        character2: {
          id: 'character2',
          name: 'test character 2',
          xp: 535,
          level: 0,
          items: [],
          injuries: [],
        },
      },
      selectedCharacter: { id: 'character2' },
    });

    const testInjuryName = 'Test injury';
    const testInjuryId = 'TEST_INJURY_ID';

    const action = {
      type: types.CREATE_INJURY,
      injury: { id: testInjuryId, name: testInjuryName },
    };

    const updatedState = CharacterReducer(InitialState, action);

    expect(updatedState.byId['character2'].injuries).toHaveLength(1);
    expect(updatedState.byId['character2'].injuries[0]).toEqual(testInjuryId);

    expect(updatedState.selectedCharacter.injuries).toHaveLength(1);
    expect(updatedState.selectedCharacter.injuries[0]).toEqual(testInjuryId);
  });
});

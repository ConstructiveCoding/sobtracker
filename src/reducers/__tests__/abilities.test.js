/* @flow */
import AbilitiesReducer from '../abilities';

import * as types from '../../actions/actionTypes';

describe('Abilities reducer', () => {
  it('should return the default state when there is no matching action', () => {
    const initialState = AbilitiesReducer();

    expect(initialState).toBeDefined();
    expect(initialState.allIds).toHaveLength(0);
  });

  it('should store a newly created ability', () => {
    const initiaState = {
      allIds: [],
      byId: {},
    };

    const testAbilityName = 'Test Ability';
    const testAbilityId = 'TEST_ABILITY_ID';

    const action = {
      type: types.CREATE_ABILITY,
      ability: { id: testAbilityId, name: testAbilityName },
    };

    const returnedState = AbilitiesReducer(initiaState, action);
    expect(returnedState.allIds).toHaveLength(1);
    expect(returnedState.byId[testAbilityId]).toBeDefined();
    expect(returnedState.byId[testAbilityId].name).toEqual(testAbilityName);
  });

  it('should store the ID of an ability to edit', () => {
    const initialState = {
      allIds: ['1', '2', '3', '4'],
      byId: {
        '1': { id: '1' },
        '2': { id: '2' },
        '3': { id: '3' },
        '4': { id: '4' },
      },
      editingAbilityId: undefined,
    };

    const abilityToEditId = '3';

    const action = {
      type: types.EDIT_ABILITY,
      abilityId: abilityToEditId,
    };

    const returnedState = AbilitiesReducer(initialState, action);

    expect(returnedState.editingAbilityId).toBeDefined();
    expect(returnedState.editingAbilityId).toEqual(abilityToEditId);
  });

  it('should update an edited ability', () => {
    const initialState = {
      allIds: ['1', '2', '3', '4'],
      byId: {
        '1': { id: '1' },
        '2': { id: '2' },
        '3': { id: '3' },
        '4': { id: '4' },
      },
      editingAbilityId: '4',
    };

    const updateToAbility = {
      id: '4',
      name: 'This is updated',
    };

    const action = {
      type: types.SAVE_ABILITY,
      ability: updateToAbility,
    };

    const returnedState = AbilitiesReducer(initialState, action);
    expect(returnedState.byId['4'].name).toBeDefined();
    expect(returnedState.byId['4'].name).toEqual('This is updated');
    expect(returnedState.editingAbilityId).toBeUndefined();
  });

  it('should remove the editing ability id', () => {
    const initialState = {
      allIds: [],
      byId: {},
      editingAbilityId: '4',
    };

    const action = {
      type: types.CANCEL_EDIT,
    };

    const returnedState = AbilitiesReducer(initialState, action);
    expect(returnedState.editingAbilityId).toBeUndefined();
  });
});

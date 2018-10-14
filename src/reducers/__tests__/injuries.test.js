/* @flow */
import InjuriesReducer from '../injuries';

import * as types from '../../actions/actionTypes';

describe('Injuries reducer', () => {
  it('should return the default state when there is no matching action', () => {
    const initialState = InjuriesReducer();

    expect(initialState).toBeDefined();
    expect(initialState.allIds).toHaveLength(0);
  });

  it('should store a newly created injury', () => {
    const initiaState = {
      allIds: [],
      byId: {},
    };

    const testInjuryName = 'Test Injury';
    const testInjuryId = 'TEST_INJURY_ID';

    const action = {
      type: types.CREATE_INJURY,
      injury: { id: testInjuryId, name: testInjuryName },
    };

    const returnedState = InjuriesReducer(initiaState, action);
    expect(returnedState.allIds).toHaveLength(1);
    expect(returnedState.byId[testInjuryId]).toBeDefined();
    expect(returnedState.byId[testInjuryId].name).toEqual(testInjuryName);
  });

  it('should store the ID of an injury to edit', () => {
    const initialState = {
      allIds: ['1', '2', '3', '4'],
      byId: {
        '1': { id: '1' },
        '2': { id: '2' },
        '3': { id: '3' },
        '4': { id: '4' },
      },
      editingInjuryId: undefined,
    };

    const injuryToEditId = '3';

    const action = {
      type: types.EDIT_INJURY,
      injuryId: injuryToEditId,
    };

    const returnedState = InjuriesReducer(initialState, action);

    expect(returnedState.editingInjuryId).toBeDefined();
    expect(returnedState.editingInjuryId).toEqual(injuryToEditId);
  });

  it('should update an edited injury', () => {
    const initialState = {
      allIds: ['1', '2', '3', '4'],
      byId: {
        '1': { id: '1' },
        '2': { id: '2' },
        '3': { id: '3' },
        '4': { id: '4' },
      },
      editingInjuryId: '4',
    };

    const updateToInjury = {
      id: '4',
      name: 'This is updated',
    };

    const action = {
      type: types.SAVE_INJURY,
      injury: updateToInjury,
    };

    const returnedState = InjuriesReducer(initialState, action);
    expect(returnedState.byId['4'].name).toBeDefined();
    expect(returnedState.byId['4'].name).toEqual('This is updated');
    expect(returnedState.editingInjuryId).toBeUndefined();
  });

  it('should remove the editing injury id', () => {
    const initialState = {
      allIds: [],
      byId: {},
      editingInjuryId: '4',
    };

    const action = {
      type: types.CANCEL_EDIT,
    };

    const returnedState = InjuriesReducer(initialState, action);
    expect(returnedState.editingInjuryId).toBeUndefined();
  });

  it('should delete the specified injury', () => {
    const initialSatate = {
      allIds: ['1', '2', '3'],
      byId: {
        '1': { id: '1' },
        '2': { id: '2' },
        '3': { id: '3' },
      },
    };

    const action = {
      type: types.DELETE_INJURY,
      injuryId: '2',
    };

    const returnedState = InjuriesReducer(initialSatate, action);

    expect(returnedState.allIds).toHaveLength(2);
    expect(returnedState.byId['2']).toBeUndefined();
  });
});

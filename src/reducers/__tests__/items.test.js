import Immutable from 'seamless-immutable';
import ItemsReducer from '../items';

import * as types from '../../actions/actionTypes';

describe('Items reducer', () => {
  it('should return the default state when there is no matching action', () => {
    const initialState = ItemsReducer();

    expect(initialState).toBeDefined();
    expect(initialState.allIds).toHaveLength(0);
  });

  it('should store a newly created item', () => {
    const initiaState = {
      allIds: [],
      byId: {},
    };

    const testItemName = 'Test Item';
    const testItemId = 'TEST_ITEM_ID';

    const action = {
      type: types.CREATE_ITEM,
      item: { id: testItemId, name: testItemName },
    };

    const returnedState = ItemsReducer(initiaState, action);
    expect(returnedState.allIds).toHaveLength(1);
    expect(returnedState.byId[testItemId]).toBeDefined();
    expect(returnedState.byId[testItemId].name).toEqual(testItemName);
  });

  it('should store the ID of an item to edit', () => {
    const initialState = {
      allIds: ['1', '2', '3', '4'],
      byId: {
        '1': { id: '1' },
        '2': { id: '2' },
        '3': { id: '3' },
        '4': { id: '4' },
      },
      editingItemId: undefined,
    };

    const itemToEditId = '3';

    const action = {
      type: types.EDIT_ITEM,
      itemId: itemToEditId,
    };

    const returnedState = ItemsReducer(initialState, action);

    expect(returnedState.editingItemId).toBeDefined();
    expect(returnedState.editingItemId).toEqual(itemToEditId);
  });

  it('should update an edited item', () => {
    const initialState = {
      allIds: ['1', '2', '3', '4'],
      byId: {
        '1': { id: '1' },
        '2': { id: '2' },
        '3': { id: '3' },
        '4': { id: '4' },
      },
      editingItemId: '4',
    };

    const updateToItem = {
      id: '4',
      name: 'This is updated',
    };

    const action = {
      type: types.SAVE_ITEM,
      item: updateToItem,
    };

    const returnedState = ItemsReducer(initialState, action);
    expect(returnedState.byId['4'].name).toBeDefined();
    expect(returnedState.byId['4'].name).toEqual('This is updated');
    expect(returnedState.editingItemId).toBeUndefined();
  });
});

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
});

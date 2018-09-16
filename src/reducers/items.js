/* @flow */
import Immutable from 'seamless-immutable';

import * as types from '../actions/actionTypes';

type ItemState = {
  allIds: Array<string>,
  byId: Object,
  editingItemId?: string,
};

const InitialState = Immutable({
  allIds: [],
  byId: {},
  editingItemId: undefined,
});

export default function(
  state: ItemState = InitialState,
  action: types.Action = { type: undefined }
): ItemState {
  switch (action.type) {
    case types.CREATE_ITEM: {
      const allIds = [action.item.id].concat(state.allIds);
      const byId = {
        ...state.byId,
      };

      byId[action.item.id] = action.item;

      return Immutable({
        allIds,
        byId,
      });
    }
    case types.EDIT_ITEM: {
      return Immutable({
        ...state,
        editingItemId: action.itemId,
      });
    }
    case types.SAVE_ITEM: {
      const byId = {
        ...state.byId,
      };

      byId[action.item.id] = action.item;

      return Immutable({
        ...state,
        byId,
        editingItemId: undefined,
      });
    }
    default:
      return state;
  }
}

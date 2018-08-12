/* @flow */
import Immutable from 'seamless-immutable';

import * as types from '../actions/actionTypes';

type ItemState = {
  allIds: Array<string>,
  byId: Object,
};

const InitialState = Immutable({
  allIds: [],
  byId: {},
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
    default:
      return state;
  }
}

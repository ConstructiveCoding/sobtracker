/* @flow */
import Immutable from 'seamless-immutable';

import * as types from '../actions/actionTypes';

type InjuryState = {
  allIds: Array<string>,
  byId: Object,
  editingInjuryId?: string,
};

const InitialState = Immutable({
  allIds: [],
  byId: {},
  editingInjuryId: undefined,
});

export default function(
  state: InjuryState = InitialState,
  action: types.Action = { type: undefined }
): InjuryState {
  switch (action.type) {
    case types.CREATE_INJURY: {
      const allIds = [action.injury.id].concat(state.allIds);
      const byId = {
        ...state.byId,
      };

      byId[action.injury.id] = action.injury;

      return Immutable({
        allIds,
        byId,
      });
    }
    case types.EDIT_INJURY: {
      return Immutable({
        ...state,
        editingInjuryId: action.injuryId,
      });
    }
    case types.SAVE_INJURY: {
      const byId = {
        ...state.byId,
      };

      byId[action.injury.id] = action.injury;

      return Immutable({
        ...state,
        byId,
        editingInjuryId: undefined,
      });
    }
    case types.CANCEL_EDIT: {
      return Immutable({
        ...state,
        editingInjuryId: undefined,
      });
    }
    case types.DELETE_INJURY: {
      const byId = {
        ...state.byId,
      };

      delete byId[action.injuryId];

      const allIds = state.allIds.filter(id => id !== action.injuryId);

      return Immutable({
        ...state,
        byId,
        allIds,
      });
    }
    default:
      return state;
  }
}

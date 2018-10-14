/* @flow */
import Immutable from 'seamless-immutable';

import * as types from '../actions/actionTypes';

type AbilityState = {
  allIds: Array<string>,
  byId: Object,
  editingAbilityId?: string,
};

const InitialState = Immutable({
  allIds: [],
  byId: {},
  editingAbilityId: undefined,
});

export default function(
  state: AbilityState = InitialState,
  action: types.Action = { type: undefined }
): AbilityState {
  switch (action.type) {
    case types.CREATE_ABILITY: {
      const allIds = [action.ability.id].concat(state.allIds);
      const byId = {
        ...state.byId,
      };

      byId[action.ability.id] = action.ability;

      return Immutable({
        allIds,
        byId,
      });
    }
    case types.EDIT_ABILITY: {
      return Immutable({
        ...state,
        editingAbilityId: action.abilityId,
      });
    }
    case types.SAVE_ABILITY: {
      const byId = {
        ...state.byId,
      };

      byId[action.ability.id] = action.ability;

      return Immutable({
        ...state,
        byId,
        editingAbilityId: undefined,
      });
    }
    case types.CANCEL_EDIT: {
      return Immutable({
        ...state,
        editingAbilityId: undefined,
      });
    }
    case types.DELETE_ABILITY: {
      const byId = {
        ...state.byId,
      };

      delete byId[action.abilityId];

      const allIds = state.allIds.filter(id => id !== action.abilityId);

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

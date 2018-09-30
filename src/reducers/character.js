/* @flow */
import Immutable from 'seamless-immutable';

import * as types from '../actions/actionTypes';

type CharacterState = {
  allIds: Array<string>,
  byId: Object,
  selectedCharacter: Character,
};

const InitialState = Immutable({
  allIds: [],
  byId: {},
  selectedCharacter: undefined,
});

export default function(
  state: CharacterState = InitialState,
  action: types.Action = { type: undefined }
): CharacterState {
  switch (action.type) {
    case types.CREATE_CHARACTER: {
      const allIds = [action.character.id].concat(state.allIds);
      const byId = {
        ...state.byId,
      };

      byId[action.character.id] = action.character;

      return Immutable({
        ...state,
        allIds,
        byId,
      });
    }
    case types.LOAD_CHARACTER: {
      return Immutable({
        ...state,
        selectedCharacter: state.byId[action.characterId],
      });
    }
    case types.UPDATE_CHARACTER: {
      const characterToUpdate = state.byId[action.characterId];

      const updatedCharacter = {
        ...characterToUpdate,
        ...action.characterUpdate,
      };

      const newById = {
        ...state.byId,
      };

      newById[action.characterId] = updatedCharacter;

      return Immutable({
        ...state,
        byId: newById,
        selectedCharacter: updatedCharacter,
      });
    }
    case types.CREATE_ITEM: {
      const itemId = action.item.id;
      const characterToUpdate = state.byId[state.selectedCharacter.id];

      const mutableItems = [].concat(characterToUpdate.items);
      mutableItems.push(itemId);

      const updatedCharacter = {
        ...characterToUpdate,
        items: mutableItems,
      };

      const newById = {
        ...state.byId,
      };

      newById[state.selectedCharacter.id] = updatedCharacter;

      return Immutable({
        ...state,
        byId: newById,
        selectedCharacter: updatedCharacter,
      });
    }
    case types.CREATE_INJURY: {
      const injuryId = action.injury.id;
      const characterToUpdate = state.byId[state.selectedCharacter.id];

      const mutableinjuries = [].concat(characterToUpdate.injuries);
      mutableinjuries.push(injuryId);

      const updatedCharacter = {
        ...characterToUpdate,
        injuries: mutableinjuries,
      };

      const newById = {
        ...state.byId,
      };

      newById[state.selectedCharacter.id] = updatedCharacter;

      return Immutable({
        ...state,
        byId: newById,
        selectedCharacter: updatedCharacter,
      });
    }
    default:
      return state;
  }
}

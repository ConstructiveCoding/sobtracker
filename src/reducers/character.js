/* @flow */
import Immutable from 'seamless-immutable';

import * as types from '../actions/actionTypes';

type CharacterState = {
  characterList: Array<Character>,
  selectedCharacter: Character,
};

const InitialState = Immutable({
  characterList: [],
  selectedCharacter: undefined,
});

export default function(
  state: CharacterState = InitialState,
  action: types.Action = { type: undefined }
): CharacterState {
  switch (action.type) {
    case types.CREATE_CHARACTER: {
      return Immutable({
        ...state,
        characterList: [action.character].concat(state.characterList),
      });
    }
    case types.LOAD_CHARACTER: {
      return Immutable({
        ...state,
        selectedCharacter: state.characterList.find(
          item => item.id === action.characterId
        ),
      });
    }
    case types.UPDATE_CHARACTER: {
      const characterToUpdate = state.characterList.find(
        item => item.id === action.characterId
      );

      const updatedCharacter = {
        ...characterToUpdate,
        ...action.characterUpdate,
      };

      const mutableCharacterList = [].concat(state.characterList);

      // find the index of the character to be updated
      const characterIndex = mutableCharacterList.findIndex(
        item => item.id === action.characterId
      );
      // replace the instance of the character directly in the array
      mutableCharacterList[characterIndex] = updatedCharacter;

      return Immutable({
        ...state,
        characterList: mutableCharacterList,
        selectedCharacter: updatedCharacter,
      });
    }
    case types.CREATE_ITEM: {
      const itemId = action.item.id;
      const characterToUpdate = state.characterList.find(
        item => item.id === state.selectedCharacter.id
      );

      const mutableItems = [].concat(characterToUpdate.items);
      mutableItems.push(itemId);

      const updatedCharacter = {
        ...characterToUpdate,
        items: mutableItems,
      };

      const mutableCharacterList = [].concat(state.characterList);

      // find the index of the character to be updated
      const characterIndex = mutableCharacterList.findIndex(
        item => item.id === state.selectedCharacter.id
      );
      // replace the instance of the character directly in the array
      mutableCharacterList[characterIndex] = updatedCharacter;

      return Immutable({
        ...state,
        characterList: mutableCharacterList,
      });
    }
    default:
      return state;
  }
}

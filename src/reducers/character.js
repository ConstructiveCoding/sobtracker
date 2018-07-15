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
    default:
      return state;
  }
}

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
  action: Types.Action = { type: undefined }
): CharacterState {
  switch (action.type) {
    case types.CREATE_CHARACTER: {
      return Immutable({
        ...state,
        characterList: [action.character].concat(state.characterList),
      });
    }
    default:
      return state;
  }
}

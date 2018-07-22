import * as types from './actionTypes';

export function createCharacter(character) {
  return {
    type: types.CREATE_CHARACTER,
    character,
  };
}

export function loadCharacter(characterId) {
  return {
    type: types.LOAD_CHARACTER,
    characterId,
  };
}

export function updateCharacter(characterId, characterUpdate) {
  return {
    type: types.UPDATE_CHARACTER,
    characterId,
    characterUpdate,
  };
}

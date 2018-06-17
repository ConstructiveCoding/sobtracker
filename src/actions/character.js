import * as types from './actionTypes';
import CreateCharacter from "../components/characterCreation";

export function createCharacter(character) {
  return {
    type: types.CREATE_CHARACTER,
    character,
  };
}

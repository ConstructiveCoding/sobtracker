import * as types from './actionTypes';

export function createAbility(ability) {
  return {
    type: types.CREATE_ABILITY,
    ability,
  };
}

export function editAbility(abilityId) {
  return {
    type: types.EDIT_ABILITY,
    abilityId,
  };
}

export function saveAbility(ability) {
  return {
    type: types.SAVE_ABILITY,
    ability,
  };
}

export function cancelEditAbility() {
  return {
    type: types.CANCEL_EDIT,
  };
}

import * as types from './actionTypes';

export function createInjury(injury) {
  return {
    type: types.CREATE_INJURY,
    injury,
  };
}

export function editInjury(injuryId) {
  return {
    type: types.EDIT_INJURY,
    injuryId,
  };
}

export function saveInjury(injury) {
  return {
    type: types.SAVE_INJURY,
    injury,
  };
}

export function cancelEditInjury() {
  return {
    type: types.CANCEL_EDIT,
  };
}

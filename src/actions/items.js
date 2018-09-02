import * as types from './actionTypes';

export function createItem(item) {
  return {
    type: types.CREATE_ITEM,
    item,
  };
}

export function editItem(itemId) {
  return {
    type: types.EDIT_ITEM,
    itemId,
  };
}

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

export function saveItem(item) {
  return {
    type: types.SAVE_ITEM,
    item,
  };
}

export function cancelEditItem() {
  return {
    type: types.CANCEL_EDIT,
  };
}

export function deleteItem(itemId) {
  return {
    type: types.DELETE_ITEM,
    itemId,
  };
}

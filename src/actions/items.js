import * as types from './actionTypes';

export function createItem(item) {
  return {
    type: types.CREATE_ITEM,
    item,
  };
}

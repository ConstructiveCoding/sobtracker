import * as types from './actionTypes';

export function prepareCalculator(originalValue: number, attribute: string) {
  return {
    type: types.PREPARE_CALCULATOR,
    value: originalValue,
    attribute,
  };
}

export function resetCalculator() {
  return {
    type: types.RESET_CALCULATOR,
  };
}

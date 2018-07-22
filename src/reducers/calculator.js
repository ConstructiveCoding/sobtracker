/* @flow */
import Immutable from 'seamless-immutable';

import * as types from '../actions/actionTypes';

type CalculatorState = {
  originalValue: number,
  attribute: string,
};

const InitialState = Immutable({
  originalValue: 0,
  attribute: undefined,
});

export default function(
  state: CalculatorState = InitialState,
  action: types.Action = { type: undefined }
): CalculatorState {
  switch (action.type) {
    case types.PREPARE_CALCULATOR: {
      return Immutable({
        originalValue: action.value,
        attribute: action.attribute,
      });
    }
    case types.RESET_CALCULATOR: {
      return InitialState;
    }
    default:
      return state;
  }
}

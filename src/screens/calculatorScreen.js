/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StackActions } from 'react-navigation';

import CalculatorStyles from '../theme/standard/components/calculator.styles';

import Calculator from '../components/calculator';

import { updateCharacter } from '../actions/character';

const popAction = StackActions.pop({
  n: 1,
});

const CalculatorScreen = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <Calculator
      attributeToUpdate={props.attributeToUpdate}
      original={props.original}
      style={CalculatorStyles.standard}
      onCancel={() => props.navigation.dispatch(popAction)}
      onSave={updatedValue => {
        const update = {};

        update[props.attributeToUpdate] = updatedValue;
        props.updateCharacter(props.selectedCharacterId, update);

        props.navigation.dispatch(popAction);
      }}
    />
  </SafeAreaView>
);

function mapStateToProps(state) {
  return {
    selectedCharacterId: state.character.selectedCharacter.id,
    original: state.calculator.originalValue,
    attributeToUpdate: state.calculator.attribute,
  };
}

const actions = {
  updateCharacter,
};

export default connect(
  mapStateToProps,
  actions
)(CalculatorScreen);

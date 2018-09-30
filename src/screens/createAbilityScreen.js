/* @flow */

import React from 'react';
import { SafeAreaView, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import {
  cancelEditAbility,
  createAbility,
  saveAbility,
} from '../actions/abilities';
import AbilityCreation from '../components/abilities/abilityCreation';

const popAction = StackActions.pop({
  n: 1,
});

const CreateAbilityScreen = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <AbilityCreation
      abilityDetails={props.existingAbility}
      onCancel={() => {
        props.cancelEditAbility();
        props.navigation.dispatch(popAction);
      }}
      onSave={abilityDetails => {
        if (typeof props.existingAbility !== 'undefined') {
          props.saveAbility(abilityDetails);
        } else {
          props.createAbility(abilityDetails);
        }
        props.navigation.dispatch(popAction);
      }}
    />
  </SafeAreaView>
);

function mapStateToProps(state) {
  return {
    existingAbility: state.abilities.byId[state.abilities.editingAbilityId],
  };
}

const actions = {
  cancelEditAbility,
  createAbility,
  saveAbility,
};

export default connect(
  mapStateToProps,
  actions
)(CreateAbilityScreen);

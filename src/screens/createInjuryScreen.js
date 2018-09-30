/* @flow */

import React from 'react';
import { SafeAreaView, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import {
  cancelEditInjury,
  createInjury,
  saveInjury,
} from '../actions/injuries';
import InjuryCreation from '../components/injuries/injuryCreation';

const popAction = StackActions.pop({
  n: 1,
});

const CreateInjuryScreen = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <InjuryCreation
      injuryDetails={props.existingInjury}
      onCancel={() => {
        props.cancelEditInjury();
        props.navigation.dispatch(popAction);
      }}
      onSave={injuryDetails => {
        if (typeof props.existingInjury !== 'undefined') {
          props.saveInjury(injuryDetails);
        } else {
          props.createInjury(injuryDetails);
        }
        props.navigation.dispatch(popAction);
      }}
    />
  </SafeAreaView>
);

function mapStateToProps(state) {
  return {
    existingInjury: state.injuries.byId[state.injuries.editingInjuryId],
  };
}

const actions = {
  cancelEditInjury,
  createInjury,
  saveInjury,
};

export default connect(
  mapStateToProps,
  actions
)(CreateInjuryScreen);

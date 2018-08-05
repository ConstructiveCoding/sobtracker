/* @flow */

import React from 'react';
import { SafeAreaView, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import { createItem } from '../actions/items';
import ItemCreation from '../components/items/itemCreation';

const popAction = StackActions.pop({
  n: 1,
});

const CreateItemScreen = props => {
  return (
    <SafeAreaView>
      <ItemCreation
        onCancel={() => props.navigation.dispatch(popAction)}
        onSave={newItemDetails => {
          props.createItem(newItemDetails);
          props.navigation.dispatch(popAction);
        }}
      />
    </SafeAreaView>
  );
};

function mapStateToProps() {
  return {};
}

const actions = {
  createItem,
};

export default connect(
  mapStateToProps,
  actions
)(CreateItemScreen);

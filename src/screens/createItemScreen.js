/* @flow */

import React from 'react';
import { SafeAreaView, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import { cancelEditItem, createItem, saveItem } from '../actions/items';
import ItemCreation from '../components/items/itemCreation';

const popAction = StackActions.pop({
  n: 1,
});

const CreateItemScreen = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ItemCreation
      itemDetails={props.existingItem}
      onCancel={() => {
        props.cancelEditItem();
        props.navigation.dispatch(popAction);
      }}
      onSave={itemDetails => {
        if (typeof props.existingItem !== 'undefined') {
          props.saveItem(itemDetails);
        } else {
          props.createItem(itemDetails);
        }
        props.navigation.dispatch(popAction);
      }}
    />
  </SafeAreaView>
);

function mapStateToProps(state) {
  return {
    existingItem: state.items.byId[state.items.editingItemId],
  };
}

const actions = {
  cancelEditItem,
  createItem,
  saveItem,
};

export default connect(
  mapStateToProps,
  actions
)(CreateItemScreen);

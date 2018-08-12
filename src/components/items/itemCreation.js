/* @flow */

import React from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import CreateItemStyles from '../../theme/standard/components/createItem.style';
import Item from '../../models/item';
import Strings from '../../language/strings';

type ItemCreationState = {
  name: string,
  weight: number,
  keywords: Array<string>,
  location: string,
  cost: number,
  modifiers: Array,
  description: string,
};

const initialState = {
  name: '',
  weight: 0,
  keywords: [],
  location: 'Mine',
  cost: 0,
  modifiers: [],
  description: '',
};

export default class ItemCreation extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    const item = new Item(
      this.state.name,
      this.state.type,
      this.state.weight,
      this.state.keywords,
      this.state.location,
      this.state.cost,
      this.state.modifiers,
      this.state.description
    );
    this.props.onSave(item);
  }

  render() {
    const styles = CreateItemStyles.standard;
    return (
      <View style={styles.formContainer}>
        <View style={styles.formHeader}>
          <Text style={styles.formHeaderText}>{Strings.newItem}</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.name}</Text>
          <TextInput
            testID="item-name-entry"
            style={styles.formDataEntry}
            value={this.state.name}
            onChangeText={newValue => {
              this.setState({ name: newValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.weight}</Text>
          <TextInput
            style={styles.formDataEntry}
            value={this.state.weight.toString()}
            onChangeText={newValue => {
              let changeValue = Number(newValue);
              if (Number.isNaN(changeValue)) {
                changeValue = 0;
              }

              this.setState({ weight: changeValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.keywords}</Text>
          <TextInput />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.location}</Text>
          <TextInput
            style={styles.formDataEntry}
            value={this.state.location}
            onChangeText={newValue => {
              this.setState({ location: newValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.cost}</Text>
          <TextInput
            style={styles.formDataEntry}
            value={this.state.cost.toString()}
            onChangeText={newValue => {
              let costValue = Number(newValue);
              if (Number.isNaN(costValue)) {
                costValue = 0;
              }

              this.setState({ cost: costValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.modifiers}</Text>
          <TextInput />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.description}</Text>
          <TextInput
            style={styles.formDataEntry}
            value={this.state.description}
            onChangeText={newValue => {
              this.setState({ description: newValue });
            }}
          />
        </View>
        <View style={styles.commandRow}>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={this.props.onCancel}
            >
              <Text>{Strings.cancel}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.saveButtonContainer}>
            <TouchableOpacity
              testID="save-item"
              style={styles.saveButton}
              onPress={this.validateForm}
            >
              <Text>{Strings.save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

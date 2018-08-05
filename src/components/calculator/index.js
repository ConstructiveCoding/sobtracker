/* @flow */

import React from 'react';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Strings from '../../language/strings';

const Operators = {
  add: 0,
  subtract: 1,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      originalValue: props.original,
      changeValue: 0,
      operator: Operators.add,
      updatedValue: this.calculateNewValue(props.original, 0, Operators.add),
    };

    this.newChangeValueEntered = this.newChangeValueEntered.bind(this);
  }

  operatorSelected(operator) {
    this.setState({
      operator,
      updatedValue: this.calculateNewValue(
        this.state.originalValue,
        this.state.changeValue,
        operator
      ),
    });
  }

  calculateNewValue(original, update, operator) {
    return operator === Operators.add ? original + update : original - update;
  }

  newChangeValueEntered(newValue) {
    let changeValue = Number(newValue);
    if (Number.isNaN(changeValue)) {
      changeValue = 0;
    }

    this.setState({
      changeValue,
      updatedValue: this.calculateNewValue(
        this.state.originalValue,
        changeValue,
        this.state.operator
      ),
    });
  }

  render() {
    const minusButtonStyle =
      this.state.operator === Operators.subtract
        ? this.props.style.selectedOperatorButton
        : this.props.style.operatorButton;

    const plusButtonStyle =
      this.state.operator === Operators.add
        ? this.props.style.selectedOperatorButton
        : this.props.style.operatorButton;

    return (
      <View style={this.props.style.container}>
        <View style={this.props.style.title}>
          <Text
            testID="attribute-to-update-title"
            style={this.props.style.titleText}
          >
            {this.props.attributeToUpdate}
          </Text>
        </View>
        <View style={this.props.style.row}>
          <Text style={this.props.style.label}>{`${Strings.currentValue} ${
            this.props.attributeToUpdate
          }`}</Text>
          <Text style={this.props.style.value}>{this.state.originalValue}</Text>
        </View>
        <View style={this.props.style.row}>
          <Text style={this.props.style.label}>{Strings.newAmount}</Text>
          <TextInput
            testID="new-amount-entry"
            style={this.props.style.numericInput}
            value={`${this.state.changeValue}`}
            onChangeText={this.newChangeValueEntered}
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={this.props.style.operatorRow}>
          <View style={minusButtonStyle}>
            <TouchableOpacity
              testID="minus-operator"
              style={this.props.style.button}
              onPress={() => this.operatorSelected(Operators.subtract)}
            >
              <Icon name="minus" />
            </TouchableOpacity>
          </View>
          <View style={plusButtonStyle}>
            <TouchableOpacity
              testID="add-operator"
              style={this.props.style.button}
              onPress={() => this.operatorSelected(Operators.add)}
            >
              <Icon name="plus" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={this.props.style.totalRow}>
          <Text style={this.props.style.label}>{Strings.total}</Text>
          <Text>{this.state.updatedValue}</Text>
        </View>
        <View style={this.props.style.commandRow}>
          <View style={this.props.style.cancelButtonContainer}>
            <TouchableOpacity
              testID="cancel-calculator"
              style={this.props.style.cancelButton}
              onPress={this.props.onCancel}
            >
              <Text>{Strings.cancel}</Text>
            </TouchableOpacity>
          </View>
          <View style={this.props.style.saveButtonContainer}>
            <TouchableOpacity
              testID="save-calculator"
              style={this.props.style.saveButton}
              onPress={() => {
                this.props.onSave(this.state.updatedValue);
              }}
            >
              <Text>{Strings.save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Calculator;

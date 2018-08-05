/* @flow */

import React from 'react';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';

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
  }

  render() {
    return (
      <View>
        <View>
          <Text>{Strings.newItem}</Text>
        </View>
        <View>
          <Text>{Strings.name}</Text>
          <TextInput
            value={this.state.name}
            onChangeText={newValue => {
              this.setState({ name: newValue });
            }}
          />
        </View>
        <View>
          <Text>{Strings.weight}</Text>
          <TextInput
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
        <View>
          <Text>{Strings.keywords}</Text>
          <TextInput />
        </View>
        <View>
          <Text>{Strings.location}</Text>
          <TextInput
            value={this.state.location}
            onChangeText={newValue => {
              this.setState({ location: newValue });
            }}
          />
        </View>
        <View>
          <Text>{Strings.cost}</Text>
          <TextInput
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
        <View>
          <Text>{Strings.modifiers}</Text>
          <TextInput />
        </View>
        <View>
          <Text>{Strings.description}</Text>
          <TextInput
            value={this.state.description}
            onChangeText={newValue => {
              this.setState({ description: newValue });
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={this.props.onCancel}>
            <Text>{Strings.cancel}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.onSave(this.state)}>
            <Text>{Strings.save}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

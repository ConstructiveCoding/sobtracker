/* @flow */

import React from 'react';
import { FlatList, View } from 'react-native';

import { connect } from 'react-redux';

import Strings from '../language/strings';
import Attribute from '../components/attribute';
import AttributeStyles from '../theme/standard/components/attribute.style';

import { updateCharacter } from '../actions/character';

class AttributesScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: Strings.attributes,
    };
  };

  constructor(props) {
    super(props);

    const dataSource = [
      {
        label: Strings.agility,
        value: props.character.agility,
        attribute: 'agility',
      },
      {
        label: Strings.cunning,
        value: props.character.cunning,
        attribute: 'cunning',
      },
      {
        label: Strings.strength,
        value: props.character.strength,
        attribute: 'strength',
      },
      {
        label: Strings.spirit,
        value: props.character.spirit,
        attribute: 'spirit',
      },
      { label: Strings.lore, value: props.character.lore, attribute: 'lore' },
      { label: Strings.luck, value: props.character.luck, attribute: 'luck' },
      {
        label: Strings.health,
        value: props.character.health,
        attribute: 'health',
      },
      {
        label: Strings.defense,
        value: props.character.defense,
        attribute: 'defense',
      },
      {
        label: Strings.sanity,
        value: props.character.sanity,
        attribute: 'sanity',
      },
      {
        label: Strings.willpower,
        value: props.character.willpower,
        attribute: 'willpower',
      },
      {
        label: Strings.maxGrit,
        value: props.character.maxGrit,
        attribute: 'maxGrit',
      },
      {
        label: Strings.combat,
        value: props.character.combat,
        attribute: 'combat',
      },
      {
        label: Strings.range,
        value: props.character.range,
        attribute: 'range',
      },
      {
        label: Strings.melee,
        value: props.character.melee,
        attribute: 'melee',
      },
    ];

    this.state = {
      selectedIndex: undefined,
      dataSource,
    };

    this.createAttributeSelector = this.createAttributeSelector.bind(this);
    this.selectAttribute = this.selectAttribute.bind(this);
    this.renderAttributeItem = this.renderAttributeItem.bind(this);
    this.createIncrementor = this.createIncrementor.bind(this);
    this.createDecrementor = this.createDecrementor.bind(this);
  }

  createAttributeSelector(index) {
    return () => {
      this.selectAttribute(index);
    };
  }

  createIncrementor(index) {
    return () => {
      this.incrementAttribute(index);
    };
  }

  createDecrementor(index) {
    return () => {
      this.decrementAttribute(index);
    };
  }

  incrementAttribute(index) {
    const dataSource = this.state.dataSource;

    dataSource[index].value += 1;
    this.setState({
      dataSource,
    });

    const characterUpdate = {};
    characterUpdate[dataSource[index].attribute] = dataSource[index].value;

    this.props.updateCharacter(this.props.character.id, characterUpdate);
  }

  decrementAttribute(index) {
    const dataSource = this.state.dataSource;

    dataSource[index].value -= 1;
    this.setState({
      dataSource,
    });

    const characterUpdate = {};
    characterUpdate[dataSource[index].attribute] = dataSource[index].value;

    this.props.updateCharacter(this.props.character.id, characterUpdate);
  }

  selectAttribute(index) {
    this.setState({
      selectedIndex: this.state.selectedIndex === index ? -1 : index,
    });
  }

  renderAttributeItem({ item, index }) {
    return (
      <Attribute
        increment={this.createIncrementor(index)}
        decrement={this.createDecrementor(index)}
        startEditing={this.createAttributeSelector(index)}
        editing={this.state.selectedIndex === index}
        label={item.label}
        value={item.value}
        style={
          this.state.selectedIndex === index
            ? AttributeStyles.selected
            : AttributeStyles.standard
        }
        attribute={item.attribute}
      />
    );
  }

  render() {
    return (
      <FlatList
        numColumns={2}
        data={this.state.dataSource}
        extraData={this.state}
        keyExtractor={item => item.label}
        renderItem={this.renderAttributeItem}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character.selectedCharacter,
  };
}

const actions = {
  updateCharacter,
};

export default connect(
  mapStateToProps,
  actions
)(AttributesScreen);

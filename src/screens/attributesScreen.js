/* @flow */

import React from 'react';
import { FlatList, View } from 'react-native';

import { connect } from 'react-redux';

import CharacterAttributesSelector from '../selectors/characterAttributesSelector';

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

    this.state = {
      selectedIndex: undefined,
      dataSource: this.props.dataSource,
    };

    this.createAttributeSelector = this.createAttributeSelector.bind(this);
    this.selectAttribute = this.selectAttribute.bind(this);
    this.renderAttributeItem = this.renderAttributeItem.bind(this);
    this.createIncrementor = this.createIncrementor.bind(this);
    this.createDecrementor = this.createDecrementor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.dataSource,
    });
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

    dataSource[index].baseValue += 1;

    const characterUpdate = {};
    characterUpdate[dataSource[index].attribute] = dataSource[index].baseValue;

    this.props.updateCharacter(this.props.character.id, characterUpdate);
  }

  decrementAttribute(index) {
    const dataSource = this.state.dataSource;

    dataSource[index].baseValue -= 1;

    const characterUpdate = {};
    characterUpdate[dataSource[index].attribute] = dataSource[index].baseValue;

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
        baseValue={item.baseValue}
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
        testID="attributes-list"
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
  const dataSource = CharacterAttributesSelector(state);

  return {
    dataSource,
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

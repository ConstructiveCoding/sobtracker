/* @flow */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default ({
  increment,
  decrement,
  startEditing,
  editing,
  label,
  baseValue,
  value,
  style,
  attribute,
}) => (
  <View style={style.attributeContainer}>
    {label !== undefined && (
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        minimumFontScale={0.5}
        style={style.attributeLabel}
      >
        {label}
      </Text>
    )}
    <View
      testID={`${attribute}-attribute`}
      style={style.attributeInnerContainer}
    >
      {editing && (
        <TouchableOpacity testID="decrement-attribute" onPress={decrement}>
          <Icon size={25} name="minus" />
        </TouchableOpacity>
      )}
      <TouchableOpacity testID="edit-attribute" onPress={startEditing}>
        <Text
          testID={`${attribute}-attribute-current`}
          adjustsFontSizeToFit
          numberOfLines={1}
          minimumFontScale={0.5}
          style={style.attributeValue}
        >
          {value}
        </Text>
        {baseValue !== undefined && (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            minimumFontScale={0.5}
            style={style.attributeBaseValue}
          >
            {baseValue}
          </Text>
        )}
      </TouchableOpacity>
      {editing && (
        <TouchableOpacity testID="increment-attribute" onPress={increment}>
          <Icon size={25} name="plus" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

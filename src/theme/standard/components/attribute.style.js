import { StyleSheet } from 'react-native';

import Colours from '../colours';

export default class AttributeStyles {
  static base = {
    attributeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
    },
    attributeInnerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    attributeLabel: {
      marginBottom: 4,
    },
    attributeValue: {
      fontSize: 24,
      fontWeight: '900',
      marginHorizontal: 8,
      padding: 8,
      color: Colours.attributeText,
      backgroundColor: Colours.attributeBackground,
      height: 44,
      width: 44,
      borderRadius: 22,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    attributeBaseValue: {
      fontSize: 12,
      fontWeight: '400',
      marginHorizontal: 4,
      padding: 4,
      color: Colours.attributeBackground,
      backgroundColor: Colours.attributeText,
      height: 22,
      width: 22,
      borderRadius: 11,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
  };

  static standard: StyleSheet = StyleSheet.create(AttributeStyles.base);
  static selected: StyleSheet = StyleSheet.create({
    ...AttributeStyles.base,
    attributeValue: {
      fontSize: 24,
      fontWeight: '900',
      marginHorizontal: 8,
      padding: 8,
      color: Colours.attributeBackground,
      backgroundColor: Colours.attributeText,
      height: 44,
      width: 44,
      borderRadius: 22,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
  });
}

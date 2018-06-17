import { StyleSheet } from 'react-native';
import Colours from '../colours';

export default class CharacterListStyles {
  static standard: StyleSheet = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 20,
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: Colours.characterListItemBorder,
    },
    addIcon: {
      fontSize: 32,
      paddingRight: 10,
    },
    characterName: {
      color: Colours.characterName,
    },
    characterClass: {
      color: Colours.characterClass,
    },
  });
}

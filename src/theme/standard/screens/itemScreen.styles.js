import { StyleSheet } from 'react-native';

export default class ItemScreenStyles {
  static standard: StyleSheet = StyleSheet.create({
    addIcon: {
      fontSize: 35,
      paddingRight: 10,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 5,
    },
    itemName: {
      fontWeight: '900',
      paddingRight: 20,
    },
    itemType: {
      fontWeight: '100',
    },
  });
}

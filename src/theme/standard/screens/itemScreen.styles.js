import { StyleSheet } from 'react-native';

export default class ItemScreenStyles {
  static standard: StyleSheet = StyleSheet.create({
    addIcon: {
      fontSize: 35,
      paddingRight: 10,
    },
    row: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'center',
    },
    itemName: {
      fontWeight: '900',
      paddingRight: 20,
    },
    itemType: {
      fontWeight: '100',
      flex: 1,
    },
  });
}

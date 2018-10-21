import { StyleSheet } from 'react-native';

export default class InjuryScreenStyles {
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
    injuryName: {
      fontWeight: '900',
      paddingRight: 20,
    },
    injuryType: {
      fontWeight: '100',
      flex: 1,
    },
  });
}

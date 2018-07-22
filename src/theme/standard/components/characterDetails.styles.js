import { StyleSheet } from 'react-native';
import Colours from '../colours';

export default class CharacterDetailsStyles {
  static standard: StyleSheet = StyleSheet.create({
    characterMinorDetailsContainer: {
      flexDirection: 'row',
    },
    characterDetailsContainer: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    characterNameContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    characterName: {
      fontSize: 18,
    },
    characterClassContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    characterClassTitle: {
      fontSize: 10,
    },
    characterClass: {
      fontSize: 18,
    },
    characterGenderContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    characterGenderTitle: {
      fontSize: 10,
    },
    characterGender: {
      fontSize: 18,
    },
    characterDetailRow: {
      marginTop: 10,
      paddingBottom: 5,
    },
    characterDetailRowButton: {
      flexDirection: 'row',
    },
    characterDetailTitle: {
      flex: 1,
      textAlign: 'left',
    },
    characterDetailValue: {
      flex: 1,
      textAlign: 'right',
    },
  });
}

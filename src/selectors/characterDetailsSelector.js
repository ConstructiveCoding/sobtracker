/* @flow */
import CalculateValue from './calculations';
import Strings from '../language/strings';

export default state => {
  const character = {
    ...state.character.selectedCharacter,
    healthRemaining:
      state.character.selectedCharacter.health -
      state.character.selectedCharacter.wounds,
    sanityRemaining:
      state.character.selectedCharacter.sanity -
      state.character.selectedCharacter.sanityDamage,
  };

  character.move = CalculateValue(
    character.move,
    'move',
    character,
    state.items,
    state.injuries,
    state.abilities
  );
  character.initiative = CalculateValue(
    character.initiative,
    'initiative',
    character,
    state.items,
    state.injuries,
    state.abilities
  );
  character.armour = CalculateValue(
    0,
    'armour',
    character,
    state.items,
    state.injuries,
    state.abilities
  );
  character.spiritArmour = CalculateValue(
    0,
    'spiritArmour',
    character,
    state.items,
    state.injuries,
    state.abilities
  );

  return character;
};

/* @flow */

import CalculateValue from './calculations';
import Strings from '../language/strings';

export default state => {
  const character = state.character.selectedCharacter;
  const attributes = [];

  attributes.push({
    value: CalculateValue(
      character.agility,
      'agility',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.agility,
    label: Strings.agility,
    attribute: 'agility',
  });
  attributes.push({
    value: CalculateValue(
      character.cunning,
      'cunning',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.cunning,
    label: Strings.cunning,
    attribute: 'cunning',
  });
  attributes.push({
    value: CalculateValue(
      character.strength,
      'strength',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.strength,
    label: Strings.strength,
    attribute: 'strength',
  });
  attributes.push({
    value: CalculateValue(
      character.spirit,
      'spirit',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.spirit,
    label: Strings.spirit,
    attribute: 'spirit',
  });
  attributes.push({
    value: CalculateValue(
      character.luck,
      'luck',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.luck,
    label: Strings.luck,
    attribute: 'luck',
  });
  attributes.push({
    value: CalculateValue(
      character.lore,
      'lore',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.lore,
    label: Strings.lore,
    attribute: 'lore',
  });
  attributes.push({
    value: CalculateValue(
      character.health,
      'health',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.health,
    label: Strings.health,
    attribute: 'health',
  });
  attributes.push({
    value: CalculateValue(
      character.sanity,
      'sanity',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.sanity,
    label: Strings.sanity,
    attribute: 'sanity',
  });
  attributes.push({
    value: CalculateValue(
      character.defense,
      'defense',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.defense,
    label: Strings.defense,
    attribute: 'defense',
  });
  attributes.push({
    value: CalculateValue(
      character.willpower,
      'willpower',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.willpower,
    label: Strings.willpower,
    attribute: 'willpower',
  });
  attributes.push({
    value: CalculateValue(
      character.maxGrit,
      'maxGrit',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.maxGrit,
    label: Strings.maxGrit,
    attribute: 'maxGrit',
  });
  attributes.push({
    value: CalculateValue(
      character.combat,
      'combat',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.combat,
    label: Strings.combat,
    attribute: 'combat',
  });
  attributes.push({
    value: CalculateValue(
      character.range,
      'range',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.range,
    label: Strings.range,
    attribute: 'range',
  });
  attributes.push({
    value: CalculateValue(
      character.melee,
      'melee',
      character,
      state.items,
      state.injuries,
      state.abilities
    ),
    baseValue: character.melee,
    label: Strings.melee,
    attribute: 'melee',
  });

  return attributes;
};

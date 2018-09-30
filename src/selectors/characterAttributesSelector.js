/* @flow */

import Strings from '../language/strings';

const calculateValue = (
  baseValue,
  attribute,
  character,
  items,
  injuries,
  abilities
) => {
  let modifiedValue = 0;

  character.items.forEach(itemId => {
    const item = items.byId[itemId];

    if (item) {
      item.modifiers.forEach(modifier => {
        if (modifier.attribute === attribute) {
          modifiedValue += modifier.modification;
        }
      });
    }
  });

  character.injuries.forEach(injuryId => {
    const injury = injuries.byId[injuryId];

    if (injury) {
      injury.modifiers.forEach(modifier => {
        if (modifier.attribute === attribute) {
          modifiedValue += modifier.modification;
        }
      });
    }
  });

  character.abilities.forEach(abilityId => {
    const ability = abilities.byId[abilityId];

    if (ability) {
      ability.modifiers.forEach(modifier => {
        if (modifier.attribute === attribute) {
          modifiedValue += modifier.modification;
        }
      });
    }
  });

  return baseValue + modifiedValue;
};

export default state => {
  const character = state.character.selectedCharacter;
  const attributes = [];

  attributes.push({
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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
    value: calculateValue(
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

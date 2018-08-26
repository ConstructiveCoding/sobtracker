/* @flow */

import Strings from '../language/strings';

const calculateValue = (baseValue, attribute, character, items) => {
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

  return baseValue + modifiedValue;
};

export default state => {
  const character = state.character.selectedCharacter;
  const attributes = [];

  attributes.push({
    value: calculateValue(character.agility, 'agility', character, state.items),
    baseValue: character.agility,
    label: Strings.agility,
    attribute: 'agility',
  });
  attributes.push({
    value: calculateValue(character.cunning, 'cunning', character, state.items),
    baseValue: character.cunning,
    label: Strings.cunning,
    attribute: 'cunning',
  });
  attributes.push({
    value: calculateValue(
      character.strength,
      'strength',
      character,
      state.items
    ),
    baseValue: character.strength,
    label: Strings.strength,
    attribute: 'strength',
  });
  attributes.push({
    value: calculateValue(character.spirit, 'spirit', character, state.items),
    baseValue: character.spirit,
    label: Strings.spirit,
    attribute: 'spirit',
  });
  attributes.push({
    value: calculateValue(character.luck, 'luck', character, state.items),
    baseValue: character.luck,
    label: Strings.luck,
    attribute: 'luck',
  });
  attributes.push({
    value: calculateValue(character.lore, 'lore', character, state.items),
    baseValue: character.lore,
    label: Strings.lore,
    attribute: 'lore',
  });
  attributes.push({
    value: calculateValue(character.health, 'health', character, state.items),
    baseValue: character.health,
    label: Strings.health,
    attribute: 'health',
  });
  attributes.push({
    value: calculateValue(character.sanity, 'sanity', character, state.items),
    baseValue: character.sanity,
    label: Strings.sanity,
    attribute: 'sanity',
  });
  attributes.push({
    value: calculateValue(character.defense, 'defense', character, state.items),
    baseValue: character.defense,
    label: Strings.defense,
    attribute: 'defense',
  });
  attributes.push({
    value: calculateValue(
      character.willpower,
      'willpower',
      character,
      state.items
    ),
    baseValue: character.willpower,
    label: Strings.willpower,
    attribute: 'willpower',
  });
  attributes.push({
    value: calculateValue(character.maxGrit, 'maxGrit', character, state.items),
    baseValue: character.maxGrit,
    label: Strings.maxGrit,
    attribute: 'maxGrit',
  });
  attributes.push({
    value: calculateValue(character.combat, 'combat', character, state.items),
    baseValue: character.combat,
    label: Strings.combat,
    attribute: 'combat',
  });
  attributes.push({
    value: calculateValue(character.range, 'range', character, state.items),
    baseValue: character.range,
    label: Strings.range,
    attribute: 'range',
  });
  attributes.push({
    value: calculateValue(character.melee, 'melee', character, state.items),
    baseValue: character.melee,
    label: Strings.melee,
    attribute: 'melee',
  });

  return attributes;
};

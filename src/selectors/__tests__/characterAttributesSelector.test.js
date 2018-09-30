import CharacterAttributesSelector from '../characterAttributesSelector';

import Strings from '../../language/strings';

describe('CharacterAttributeSelector', () => {
  const expected = [
    {
      label: Strings.agility,
      attribute: 'agility',
    },
    {
      label: Strings.cunning,
      attribute: 'cunning',
    },
    {
      label: Strings.strength,
      attribute: 'strength',
    },
    {
      label: Strings.spirit,
      attribute: 'spirit',
    },
    {
      label: Strings.luck,
      attribute: 'luck',
    },
    {
      label: Strings.lore,
      attribute: 'lore',
    },
    {
      label: Strings.health,
      attribute: 'health',
    },
    {
      label: Strings.sanity,
      attribute: 'sanity',
    },
    {
      label: Strings.defense,
      attribute: 'defense',
    },
    {
      label: Strings.willpower,
      attribute: 'willpower',
    },
    {
      label: Strings.maxGrit,
      attribute: 'maxGrit',
    },
    {
      label: Strings.combat,
      attribute: 'combat',
    },
    {
      label: Strings.range,
      attribute: 'range',
    },
    {
      label: Strings.melee,
      attribute: 'melee',
    },
  ];

  it('should return all of the attributes of the selected character with no items', () => {
    const characterId = '1';
    const character = {
      id: characterId,
      agility: 1,
      cunning: 2,
      strength: 3,
      spirit: 4,
      luck: 5,
      lore: 6,
      health: 7,
      sanity: 8,
      defense: 9,
      willpower: 10,
      maxGrit: 11,
      combat: 12,
      range: 13,
      melee: 14,
      items: [],
      injuries: [],
    };

    const state = {
      calculator: {},
      items: {},
      character: {
        selectedCharacter: character,
      },
    };

    const attributes = CharacterAttributesSelector(state);
    expect(attributes).toHaveLength(14);

    for (let index = 0; index < attributes.length; index++) {
      const attribute = attributes[index];
      expect(attribute.value).toEqual(attribute.baseValue);
      expect(attribute.value).toEqual(index + 1);
      expect(attribute.label).toEqual(expected[index].label);
      expect(attribute.attribute).toEqual(expected[index].attribute);
    }
  });

  it('should return all of the attributes of the selected character with items', () => {
    const characterId = '1';

    const character = {
      id: characterId,
      agility: 1,
      cunning: 2,
      strength: 3,
      spirit: 4,
      luck: 5,
      lore: 6,
      health: 7,
      sanity: 8,
      defense: 9,
      willpower: 10,
      maxGrit: 11,
      combat: 12,
      range: 13,
      melee: 14,
      items: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
      ],
      injuries: [],
    };

    const state = {
      calculator: {},
      items,
      character: {
        selectedCharacter: character,
      },
    };

    const attributes = CharacterAttributesSelector(state);
    expect(attributes).toHaveLength(14);

    for (let index = 0; index < attributes.length; index++) {
      const attribute = attributes[index];
      expect(attribute.value).toEqual(20);
      expect(attribute.baseValue).toEqual(index + 1);
      expect(attribute.label).toEqual(expected[index].label);
      expect(attribute.attribute).toEqual(expected[index].attribute);
    }
  });

  const items = {
    allIds: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
    ],
    byId: {
      '1': {
        id: '1',
        modifiers: [{ attribute: 'agility', modification: 19 }],
      },
      '2': {
        id: '2',
        modifiers: [{ attribute: 'cunning', modification: 18 }],
      },
      '3': {
        id: '3',
        modifiers: [{ attribute: 'strength', modification: 17 }],
      },
      '4': {
        id: '4',
        modifiers: [{ attribute: 'spirit', modification: 16 }],
      },
      '5': { id: '5', modifiers: [{ attribute: 'luck', modification: 15 }] },
      '6': { id: '6', modifiers: [{ attribute: 'lore', modification: 14 }] },
      '7': {
        id: '7',
        modifiers: [{ attribute: 'health', modification: 13 }],
      },
      '8': {
        id: '8',
        modifiers: [{ attribute: 'sanity', modification: 12 }],
      },
      '9': {
        id: '9',
        modifiers: [{ attribute: 'defense', modification: 11 }],
      },
      '10': {
        id: '10',
        modifiers: [{ attribute: 'willpower', modification: 10 }],
      },
      '11': {
        id: '11',
        modifiers: [{ attribute: 'maxGrit', modification: 9 }],
      },
      '12': {
        id: '12',
        modifiers: [{ attribute: 'combat', modification: 8 }],
      },
      '13': {
        id: '13',
        modifiers: [{ attribute: 'range', modification: 7 }],
      },
      '14': {
        id: '14',
        modifiers: [{ attribute: 'melee', modification: 6 }],
      },
    },
  };

  const injuries = {
    allIds: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
    ],
    byId: {
      '1': {
        id: '1',
        modifiers: [{ attribute: 'agility', modification: 20 }],
      },
      '2': {
        id: '2',
        modifiers: [{ attribute: 'cunning', modification: 19 }],
      },
      '3': {
        id: '3',
        modifiers: [{ attribute: 'strength', modification: 18 }],
      },
      '4': {
        id: '4',
        modifiers: [{ attribute: 'spirit', modification: 17 }],
      },
      '5': { id: '5', modifiers: [{ attribute: 'luck', modification: 16 }] },
      '6': { id: '6', modifiers: [{ attribute: 'lore', modification: 15 }] },
      '7': {
        id: '7',
        modifiers: [{ attribute: 'health', modification: 14 }],
      },
      '8': {
        id: '8',
        modifiers: [{ attribute: 'sanity', modification: 13 }],
      },
      '9': {
        id: '9',
        modifiers: [{ attribute: 'defense', modification: 12 }],
      },
      '10': {
        id: '10',
        modifiers: [{ attribute: 'willpower', modification: 11 }],
      },
      '11': {
        id: '11',
        modifiers: [{ attribute: 'maxGrit', modification: 10 }],
      },
      '12': {
        id: '12',
        modifiers: [{ attribute: 'combat', modification: 9 }],
      },
      '13': {
        id: '13',
        modifiers: [{ attribute: 'range', modification: 8 }],
      },
      '14': {
        id: '14',
        modifiers: [{ attribute: 'melee', modification: 7 }],
      },
    },
  };

  it('should return all of the attributes of the selected character with injuries that have modifications', () => {
    const characterId = '1';

    const character = {
      id: characterId,
      agility: 1,
      cunning: 2,
      strength: 3,
      spirit: 4,
      luck: 5,
      lore: 6,
      health: 7,
      sanity: 8,
      defense: 9,
      willpower: 10,
      maxGrit: 11,
      combat: 12,
      range: 13,
      melee: 14,
      items: [],
      injuries: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
      ],
    };

    const state = {
      calculator: {},
      injuries,
      character: {
        selectedCharacter: character,
      },
    };

    const attributes = CharacterAttributesSelector(state);
    expect(attributes).toHaveLength(14);

    for (let index = 0; index < attributes.length; index++) {
      const attribute = attributes[index];
      expect(attribute.value).toEqual(21);
      expect(attribute.baseValue).toEqual(index + 1);
      expect(attribute.label).toEqual(expected[index].label);
      expect(attribute.attribute).toEqual(expected[index].attribute);
    }
  });

  it('should return all of the attributes of the selected character with injuries and items', () => {
    const characterId = '1';

    const character = {
      id: characterId,
      agility: 1,
      cunning: 2,
      strength: 3,
      spirit: 4,
      luck: 5,
      lore: 6,
      health: 7,
      sanity: 8,
      defense: 9,
      willpower: 10,
      maxGrit: 11,
      combat: 12,
      range: 13,
      melee: 14,
      items: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
      ],
      injuries: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
      ],
    };

    const state = {
      calculator: {},
      injuries,
      items,
      character: {
        selectedCharacter: character,
      },
    };

    const attributes = CharacterAttributesSelector(state);
    expect(attributes).toHaveLength(14);

    for (let index = 0; index < attributes.length; index++) {
      const attribute = attributes[index];
      expect(attribute.value).toEqual(40 - index);
      expect(attribute.baseValue).toEqual(index + 1);
      expect(attribute.label).toEqual(expected[index].label);
      expect(attribute.attribute).toEqual(expected[index].attribute);
    }
  });
});

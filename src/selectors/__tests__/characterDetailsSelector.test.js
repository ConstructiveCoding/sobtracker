import CharacterDetailsSelector from '../characterDetailsSelector';

import Strings from '../../language/strings';

describe('CharacterDetailsSelector', () => {
  const character = {
    id: '1',
    name: 'Test Character',
    gender: 'Female',
    characterClass: 'Super Hero',
    xp: 10,
    level: 11,
    gold: 12,
    corruption: 13,
    grit: 14,
    darkStone: 15,
    initiative: 16,
    wounds: 17,
    sanityDamage: 18,
    move: 19,
    health: 20,
    sanity: 21,
    injuries: [],
    abilities: [],
    items: [],
  };

  it('should return all of the character details', () => {
    const state = {
      character: {
        selectedCharacter: character,
      },
    };

    const characterDetails = CharacterDetailsSelector(state);

    expect(characterDetails.name).toEqual(character.name);
    expect(characterDetails.gender).toEqual(character.gender);
    expect(characterDetails.characterClass).toEqual(character.characterClass);
    expect(characterDetails.xp).toEqual(character.xp);
    expect(characterDetails.level).toEqual(character.level);
    expect(characterDetails.gold).toEqual(character.gold);
    expect(characterDetails.corruption).toEqual(character.corruption);
    expect(characterDetails.grit).toEqual(character.grit);
    expect(characterDetails.darkStone).toEqual(character.darkStone);
    expect(characterDetails.initiative).toEqual(character.initiative);
    expect(characterDetails.wounds).toEqual(character.wounds);
    expect(characterDetails.sanityDamage).toEqual(character.sanityDamage);
    expect(characterDetails.move).toEqual(character.move);
    expect(characterDetails.health).toEqual(character.health);
    expect(characterDetails.sanity).toEqual(character.sanity);
    expect(characterDetails.healthRemaining).toEqual(3);
    expect(characterDetails.sanityRemaining).toEqual(3);
  });

  it('should calculate adjusted move based on items, injuries and mutations', () => {
    character.items = ['1'];
    character.abilities = ['1'];
    character.injuries = ['1'];

    const state = {
      abilities: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'move',
                modification: -1,
              },
            ],
          },
        },
      },
      injuries: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'move',
                modification: -1,
              },
            ],
          },
        },
      },
      items: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'move',
                modification: -1,
              },
            ],
          },
        },
      },
      character: {
        selectedCharacter: character,
      },
    };

    const characterDetails = CharacterDetailsSelector(state);

    expect(characterDetails.move).toEqual(16);
  });

  it('should calculate adjusted initiative based on items, injuries and mutations', () => {
    character.items = ['1'];
    character.abilities = ['1'];
    character.injuries = ['1'];

    const state = {
      abilities: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'initiative',
                modification: -1,
              },
            ],
          },
        },
      },
      injuries: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'initiative',
                modification: -1,
              },
            ],
          },
        },
      },
      items: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'initiative',
                modification: -1,
              },
            ],
          },
        },
      },
      character: {
        selectedCharacter: character,
      },
    };

    const characterDetails = CharacterDetailsSelector(state);

    expect(characterDetails.initiative).toEqual(13);
  });

  it('should calculate adjusted armour based on items, injuries and mutations', () => {
    character.items = ['1'];
    character.abilities = ['1'];
    character.injuries = ['1'];

    const state = {
      abilities: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'armour',
                modification: 1,
              },
            ],
          },
        },
      },
      injuries: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'armour',
                modification: 1,
              },
            ],
          },
        },
      },
      items: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'armour',
                modification: 1,
              },
            ],
          },
        },
      },
      character: {
        selectedCharacter: character,
      },
    };

    const characterDetails = CharacterDetailsSelector(state);

    expect(characterDetails.armour).toEqual(3);
  });

  it('should calculate adjusted spirit armour based on items, injuries and mutations', () => {
    character.items = ['1'];
    character.abilities = ['1'];
    character.injuries = ['1'];

    const state = {
      abilities: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'spiritArmour',
                modification: 1,
              },
            ],
          },
        },
      },
      injuries: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'spiritArmour',
                modification: 1,
              },
            ],
          },
        },
      },
      items: {
        allIds: ['1'],
        byId: {
          '1': {
            modifiers: [
              {
                attribute: 'spiritArmour',
                modification: 1,
              },
            ],
          },
        },
      },
      character: {
        selectedCharacter: character,
      },
    };

    const characterDetails = CharacterDetailsSelector(state);

    expect(characterDetails.spiritArmour).toEqual(3);
  });
});

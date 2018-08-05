import Character from '../character';

describe('Character Model', () => {
  describe('Character Creation', () => {
    it('Should initialise a new character with the supplied properties and good defaults', () => {
      const name = 'Test Name';
      const gender = 'Test Gender';
      const charClass = 'Test class';

      const character = new Character(name, gender, charClass);

      expect(character.name).toEqual(name);
      expect(character.gender).toEqual(gender);
      expect(character.characterClass).toEqual(charClass);

      expect(character.xp).toEqual(0);
      expect(character.level).toEqual(0);
      expect(character.gold).toEqual(0);
      expect(character.corruption).toEqual(0);
      expect(character.grit).toEqual(0);
      expect(character.darkStone).toEqual(0);

      expect(character.agility).toEqual(0);
      expect(character.cunning).toEqual(0);
      expect(character.strength).toEqual(0);
      expect(character.spirit).toEqual(0);
      expect(character.luck).toEqual(0);
      expect(character.lore).toEqual(0);
      expect(character.health).toEqual(0);
      expect(character.sanity).toEqual(0);
      expect(character.defense).toEqual(0);
      expect(character.willpower).toEqual(0);
      expect(character.maxGrit).toEqual(0);
      expect(character.combat).toEqual(0);
      expect(character.range).toEqual(0);
      expect(character.melee).toEqual(0);
    });
  });
});

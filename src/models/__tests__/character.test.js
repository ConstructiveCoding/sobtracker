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
    });
  });
});

import Injury from '../injury';

describe('Injury model', () => {
  describe('Injury Creation', () => {
    it('Should initialise an injury with the provided details', () => {
      const name = 'Chest Wound';
      const flavourText = 'Deep slashes run across your chest...';
      const effects = 'You cannot get Critical Hits';
      const diceRoll = 10;
      const type = 'injury';
      const modifiers = [];

      const newInjury = new Injury(
        name,
        flavourText,
        effects,
        diceRoll,
        type,
        modifiers
      );

      expect(newInjury).toBeDefined();
      expect(newInjury.id).toBeDefined();
      expect(newInjury.name).toEqual(name);
      expect(newInjury.flavourText).toEqual(flavourText);
      expect(newInjury.effects).toEqual(effects);
      expect(newInjury.diceRoll).toEqual(diceRoll);
      expect(newInjury.modifiers).toEqual(modifiers);
      expect(newInjury.type).toEqual(type);
    });
  });
});

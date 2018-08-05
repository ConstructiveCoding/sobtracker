import Item from '../item';

describe('Item Model', () => {
  describe('Item creation', () => {
    it('Should initialise a new Item with the provided details', () => {
      const type = 'gear';
      const name = 'Test Item';
      const weight = 0;
      const keywords = ['Gear', 'Charm'];
      const location = 'mine';
      const cost = 0;

      const modifiers = [];
      const description = 'This is a test';

      const newItem = new Item(
        name,
        type,
        weight,
        keywords,
        location,
        cost,
        modifiers,
        description
      );

      expect(newItem).toBeDefined();
      expect(newItem.id).toBeDefined();
      expect(newItem.type).toEqual(type);
      expect(newItem.name).toEqual(name);
      expect(newItem.weight).toEqual(weight);
      expect(newItem.keywords).toEqual(keywords);
      expect(newItem.location).toEqual(location);
      expect(newItem.cost).toEqual(cost);
      expect(newItem.modifiers).toEqual(modifiers);
      expect(newItem.description).toEqual(description);
    });
  });
});

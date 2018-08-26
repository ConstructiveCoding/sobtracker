import Modifier from '../modifier';

describe('Modifier', () => {
  it('should create a new instance with the provided parameters', () => {
    const mod = new Modifier('test', -100);

    expect(mod.id).toBeDefined();
    expect(mod.attribute).toEqual('test');
    expect(mod.modification).toEqual(-100);
  });
});

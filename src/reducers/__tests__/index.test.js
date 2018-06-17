import * as Reducers from '../';

describe('Root Reducer', () => {
  it('should export all of the reducers', () => {
    expect(Reducers.character).toBeDefined();
  });
});

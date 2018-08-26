import CharacterListSelector from '../characterListSelector';

describe('CharacterListSelector', () => {
  it('should return a array of actual characters', () => {
    const state = {
      allIds: ['character2', 'character3', 'character4'],
      byId: {
        character2: { id: 'character2' },
        character3: { id: 'character3' },
        character4: { id: 'character4' },
      },
    };

    const characterList = CharacterListSelector(state);
    expect(characterList).toHaveLength(3);
    expect(characterList[0].id).toEqual('character2');
    expect(characterList[1].id).toEqual('character3');
    expect(characterList[2].id).toEqual('character4');
  });
});

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import CharacterListScreen from '../characterListScreen';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Character List Screen', () => {
  it('should render all of the characters', () => {
    const initialState = {
      characters: [{}],
    };
    const store = mockStore(initialState);

    const tree = renderer.create(
      <CharacterListScreen
        store={store}
        provider={{}}
        navigation={{ setParams: () => {} }}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});

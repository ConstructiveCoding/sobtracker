import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CharacterCreation from '../characterCreation';

describe('CharacterCreation', () => {
  it('should render the character creation screen with no props', () => {
    const styles = {};
    const tree = renderer.create(<CharacterCreation style={styles} />);

    expect(tree).toMatchSnapshot();
  });

  it('should render the character creation screen with props', () => {
    const styles = {};
    const tree = renderer.create(
      <CharacterCreation
        characterName="Test Character"
        characterClass="TestClass"
        characterGender="Female"
        style={styles}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});

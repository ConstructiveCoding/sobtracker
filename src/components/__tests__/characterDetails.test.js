import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CharacterDetails from '../character/characterDetails';
import CharacterDetailsStyles from '../../theme/standard/components/characterDetails.styles';

describe('CharacterDetails', () => {
  it('should render the character details screen with the supplied props', () => {
    const styles = CharacterDetailsStyles.standard;

    const tree = renderer.create(
      <CharacterDetails
        name="Test Character"
        characterClass="Test Character Class"
        gender="Androgynous"
        level={0}
        gold={0}
        darkStone={0}
        initiative={0}
        corruption={0}
        git={0}
        style={styles}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});

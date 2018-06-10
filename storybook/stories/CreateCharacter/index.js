import React from 'react';
import CreateCharacter from '../../../src/components/characterCreation';

import { storiesOf } from '@storybook/react-native';
import Styles from '../../../src/theme/standard/components/createCharacter.styles';

storiesOf('Create Character', module)
  .add('empty form', () => (
    <CreateCharacter
      style={Styles.standard}
    />
  ))
  .add('completed form', () => (
    <CreateCharacter
      style={Styles.standard}
      characterClass="Preacher"
      characterName="Bilbo Baggins"
    />
  ));

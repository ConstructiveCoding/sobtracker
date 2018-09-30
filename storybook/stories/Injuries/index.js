import React from 'react';
import Immutable from 'seamless-immutable';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import CreateInjury from '../../../src/components/injuries/injuryCreation';
import CreateInjuryStyles from '../../../src/theme/standard/components/createInjury.style';

storiesOf('Injuries', module)
  .add('Injury Creation', () => (
    <CreateInjury onCancel={action('CANCEL!')} onSave={action('Save!')} />
  ))
  .add('Edit Injury', () => (
    <CreateInjury
      onCancel={action('CANCEL!')}
      onSave={action('Save!')}
      injuryDetails={Immutable({
        name: 'Injury to edit',
        flavourText: 'This is my flavour',
        effects: 'These are my effects',
        diceRoll: 234,
        modifiers: [{ id: '1', attribute: 'agility', modification: -23 }],
      })}
    />
  ));

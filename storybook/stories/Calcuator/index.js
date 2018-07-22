import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Calculator from '../../../src/components/calculator';
import CalculatorStyles from '../../../src/theme/standard/components/calculator.styles.js';

storiesOf('Calculator', module).add('calculator', () => (
  <Calculator
    original={123}
    style={CalculatorStyles.standard}
    onCancel={() => {
      console.log('Closed');
    }}
    onSave={newValue => {
      console.log('Something was pressed', newValue);
    }}
  />
));

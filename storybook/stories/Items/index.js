import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CreateItem from '../../../src/components/items/itemCreation';
import CreateItemStyles from '../../../src/theme/standard/components/createItem.style';

storiesOf('Create Item', module).add('Item Creation', () => <CreateItem />);

/* @flow */

import uuid from 'uuid';

class Modifier {
  id: string;
  attribute: string;
  modification: number;

  constructor(attribute: string, modification: number) {
    this.id = uuid.v4();

    this.attribute = attribute;
    this.modification = modification;
  }
}

export default Modifier;

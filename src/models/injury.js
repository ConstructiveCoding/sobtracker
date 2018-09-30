/* @flow */

import uuid from 'uuid';
import Modifier from './modifier';

class Injury {
  id: string;
  name: string;
  type: string;
  flavourText: string;
  effects: string;
  diceRoll: number;
  modifiers: Array<Modifier>;

  constructor(
    name: string,
    flavourText: string,
    effects: string,
    diceRoll: number,
    type: string,
    modifiers: Array<Modifier>
  ) {
    this.id = uuid.v4();

    this.name = name;
    this.type = type;
    this.flavourText = flavourText;
    this.effects = effects;
    this.diceRoll = diceRoll;
    this.modifiers = modifiers;
  }
}

export default Injury;

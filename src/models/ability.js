/* @flow */

import uuid from 'uuid';
import Modifier from './modifier';

class Ability {
  id: string;

  name: string;
  skillTrack: string;
  description: string;

  modifiers: Array<Modifier>;

  constructor(
    name: string,
    skillTrack: string,
    description: string,
    modifiers: Array<Modifier>
  ) {
    this.id = uuid.v4();

    this.name = name;
    this.skillTrack = skillTrack;
    this.modifiers = modifiers;
    this.description = description;
  }
}

export default Ability;

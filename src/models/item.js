/* @flow */

import uuid from 'uuid';

class Item {
  id: string;
  type: 'item' | 'gear' | 'artefact';

  name: string;
  weight: number;
  keywords: Array<string>;
  location: string;
  cost: number;

  modifiers: Array;
  description: string;

  constructor(
    name: string,
    type: string,
    weight: number,
    keywords: Array<string>,
    location: string,
    cost: number,
    modifiers: Array,
    description: string
  ) {
    this.id = uuid.v4();

    this.name = name;
    this.type = type;
    this.weight = weight;
    this.keywords = keywords;
    this.location = location;
    this.cost = cost;
    this.modifiers = modifiers;
    this.description = description;
  }
}

export default Item;

/* @flow */

export default state => {
  return state.allIds.map(id => state.byId[id]);
};

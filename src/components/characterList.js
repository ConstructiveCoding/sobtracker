import React from 'react';

import { FlatList, Text, View } from 'react-native';

const CharacterList = ({ characters }) => {
  console.log(characters);

  return (
    <FlatList
      data={characters}
      renderItem={({ item, index }) => {
        console.log(`rendering`, item);

        return (
          <View key={`${item.id}-key`} style={{ backgroundColor: 'red' }}>
            <Text>{item.name}</Text>{' '}
          </View>
        );
      }}
    />
  );
};

export default CharacterList;

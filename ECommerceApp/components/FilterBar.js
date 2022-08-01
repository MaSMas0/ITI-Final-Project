import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';


const FilterBar = props => {
  return (
    <View>
      <FlatList
        nestedScrollEnabled
        horizontal
        data={[1, 2, 3, 45, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8]}
        renderItem={(item, index) => {
          return (
            <TouchableHighlight>
              <View style={styles.container}>
                <Text>Karim and Hoda</Text>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default FilterBar;

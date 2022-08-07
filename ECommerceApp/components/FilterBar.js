import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../config/colors';

const FilterBar = ({categories}) => {
  return (
    <View>
      <FlatList
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View style={styles.container}>
                <Text style={styles.nameOfCategory}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginVertical: 20,
    marginHorizontal: 8,
    paddingHorizontal: 10,
  },
  nameOfCategory: {
    color: colors.lightGrey,
  },
});

export default FilterBar;

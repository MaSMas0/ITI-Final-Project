import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../config/colors';

const FilterBar = ({categories, onPress, changeColor}) => {
  return (
    <View>
      <FlatList
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[...categories]}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item, 'check');
                onPress(item);
                changeColor(item);
              }}>
              <View
                style={[
                  styles.container,
                  {
                    backgroundColor: item.isChecked
                      ? colors.lightBlue
                      : colors.white,
                  },
                ]}>
                <Text
                  style={{
                    color: item.isChecked == true ? colors.white : colors.black,
                  }}>
                  {item.title}
                </Text>
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

    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginVertical: 20,
    marginHorizontal: 8,
    paddingHorizontal: 10,
  },
});

export default FilterBar;

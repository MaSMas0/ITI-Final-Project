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


const FilterBar = props => {
  return (
    <View>
      <FlatList
        nestedScrollEnabled
        horizontal
        data={[1, 2, 3, 45, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8]}
        renderItem={(item, index) => {
          return (
            <TouchableOpacity>
              <View style={styles.container}>
                <Text style={styles.nameOfCategory}>Karim and Hoda</Text>
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
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius:8,
    borderBottomRightRadius:8,
    marginVertical: 20,
    marginHorizontal: 8,
    paddingHorizontal: 10,
  },
  nameOfCategory:{
    color:colors.lightGrey,

  }
});

export default FilterBar;

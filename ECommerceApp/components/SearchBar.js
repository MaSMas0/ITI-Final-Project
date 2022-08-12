import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
const SearchBar = ({title, onPress, title1}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.searchContainer}>
      <Animatable.View
        animation="zoomIn"
        duration={500}
        style={styles.iconContainer}>
        <FontAwesome5
          color={colors.lightBlue}
          name="search"
          size={22}
          onPress={onPress}
        />

        <Text style={styles.title}>{title}</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
  search: {
    paddingEnd: '20%',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: colors.blue,
    fontWeight: 'bold',
  },
  title1: {
    color: colors.lightBlue,
  },
});
export default SearchBar;

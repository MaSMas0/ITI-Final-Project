import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../config/colors';
import {Searchbar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const SearchBar = ({title, onPress, title1}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [icon, setIcon] = useState(false);
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.searchContainer}>
      <Animatable.View
        // animation="zoomIn"
        // duration={500}
        style={styles.iconContainer}>
        <FontAwesome5
          color={colors.lightBlue}
          name="search"
          size={22}
          onPress={onPress}
        />

        <Text style={styles.title}>
          {title} <Text style={styles.title1}>{title1}</Text>
        </Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
  search: {
    paddingEnd: '25%',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '54%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    color: '#f811aa',
    fontWeight: 'bold',
  },
  title1: {
    color: colors.lightBlue,
  },
});
export default SearchBar;

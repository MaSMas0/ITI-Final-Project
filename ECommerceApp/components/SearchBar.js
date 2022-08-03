import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {Searchbar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const SearchBar = ({title}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [icon, setIcon] = useState(false);
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.searchContainer}>
      {!icon && (
        <Animatable.View
          animation="zoomIn"
          duration={500}
          style={styles.iconContainer}>
          <AntDesign name="search1" size={22} onPress={() => setIcon(!icon)} />
          <Text style={styles.title}>{title}</Text>
        </Animatable.View>
      )}
      {icon && (
        <Animatable.View
          animation="zoomIn"
          duration={500}
          style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            underlineColorAndroid={colors.grey}
            style={{backgroundColor: 'white', elevation: 0.5}}
            onIconPress={() => setIcon(!icon)}
          />
        </Animatable.View>
      )}
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
    fontSize: 20,
    color: colors.black,
  },
});
export default SearchBar;

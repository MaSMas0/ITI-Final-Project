import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {Searchbar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const Search = ({title, onPress, searchFilter}) => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [icon, setIcon] = useState(false);
  // const onChangeSearch = query => setSearchQuery(query);

  return (
    // <>
    //   <TextInput
    //     placeholder=" Search here"
    //     onChangeText={text => searchFilter(text)}
    //     style={styles.inputStyle}
    //   />
    // </>
    <View style={styles.searchContainer}>
      <Animatable.View animation="zoomIn" duration={500} style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={text => searchFilter(text)}
          underlineColorAndroid={colors.grey}
          style={{backgroundColor: 'white', elevation: 0.5}}
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
  search: {},
  inputStyle: {
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});
export default Search;

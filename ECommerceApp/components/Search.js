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
    <>
      <TextInput
        placeholder="Search"
        onChangeText={text => searchFilter(text)}
        style={{
          borderWidth: 1,
          borderRadius: 30,
          height: 40,
          paddingHorizontal: 20,
          borderColor: 'grey',
          backgroundColor: '#fff',
        }}
      />
    </>
    // <View style={styles.searchContainer}>
    //   <Animatable.View animation="zoomIn" duration={500} style={styles.search}>
    //     <Searchbar
    //       placeholder="Search"
    //       onChangeText={onChangeSearch}
    //       value={searchQuery}
    //       underlineColorAndroid={colors.grey}
    //       style={{backgroundColor: 'white', elevation: 0.5}}
    //       onIconPress={() => setIcon(!icon)}
    //     />
    //   </Animatable.View>
    // </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
  search: {
    paddingEnd: '18%',
  },
});
export default Search;

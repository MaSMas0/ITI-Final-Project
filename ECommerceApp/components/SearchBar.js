import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {Searchbar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [icon, setIcon] = useState(false);
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.serachContainer}>
      {!icon && (
        <Animatable.View
          animation="zoomIn"
          duration={500}
          style={styles.serachContainer}>
          <AntDesign name="search1" size={22} onPress={() => setIcon(!icon)} />
        </Animatable.View>
      )}
      {icon && (
        <Animatable.View
          animation="zoomIn"
          duration={500}
          style={styles.serachContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{backgroundColor: 'white', elevation: 1}}
            onIconPress={() => setIcon(!icon)}
          />
        </Animatable.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  serachContainer: {
    flex: 3,
  },
});
export default SearchBar;

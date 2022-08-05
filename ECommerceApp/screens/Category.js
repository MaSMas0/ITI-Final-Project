import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ProductiteminCategory from '../components/ProductiteminCategory';
import FilterBar from '../components/FilterBar';
import * as Animatable from 'react-native-animatable';
function Category(props) {
  return (
    <View style={styles.container}>
    <FilterBar />
    <View style={styles.procductCategory}>

      <FlatList
        showsVerticalScrollIndicator={false}

        nestedScrollEnabled
        numColumns={3}
        data={[1, 2, 3, 45, 5, 6, 7, 8, 8, 8, 8, 8,8,8,9,8,8]}
        renderItem={(item, index) => {
          return <ProductiteminCategory />;
        }}
      />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',

 
    
  },
  procductCategory:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center'

  }
});

export default Category;

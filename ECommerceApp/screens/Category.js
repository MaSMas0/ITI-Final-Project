import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ProductiteminCategory from '../components/ProductiteminCategory';
import FilterBar from '../components/FilterBar';
import * as Animatable from 'react-native-animatable';
import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {useSelector, useDispatch} from 'react-redux';
function Category(props) {
  const dispatch = useDispatch();
  const {products, isLoading, isError, categoryList} = useSelector(
    state => state.products,
  );

  console.log(categoryList, 'ss');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FilterBar categories={categoryList} />
      <View style={styles.procductCategory}>
        <FlatList
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          numColumns={3}
          data={[1, 2, 3, 45, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 9, 8, 8]}
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
    flex: 1,
    justifyContent: 'center',
  },
  procductCategory: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Category;

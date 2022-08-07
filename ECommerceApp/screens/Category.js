import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ProductiteminCategory from '../components/ProductiteminCategory';
import FilterBar from '../components/FilterBar';
import * as Animatable from 'react-native-animatable';
import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {useSelector, useDispatch} from 'react-redux';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
function Category(props) {
  const dispatch = useDispatch();
  const {products, isLoading, isError, categoryList} = useSelector(
    state => state.products,
  );

  const [filterProductss, setFilterProducts] = useState([]);

  const handleFilterItems = item => {
    let filterProducts = [];
    if (item != 'All') {
      filterProducts = products.filter(p => {
        return p.category.toUpperCase() === item;
      });
      return setFilterProducts(filterProducts);
    }

    return setFilterProducts([...products].sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    dispatch(getProducts());
    handleFilterItems('All');
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FilterBar categories={categoryList} onPress={handleFilterItems} />
      <View style={styles.procductCategory}>
        <FlatList
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          numColumns={3}
          data={filterProductss}
          renderItem={({item, index}) => {
            return <ProductiteminCategory price={item.price} />;
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

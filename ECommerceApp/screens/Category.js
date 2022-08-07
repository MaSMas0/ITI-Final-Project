import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ProductiteminCategory from '../components/ProductiteminCategory';
import FilterBar from '../components/FilterBar';
import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {useSelector, useDispatch} from 'react-redux';
function Category({navigation}) {
  const dispatch = useDispatch();
  const {products, isLoading, isError, categoryList} = useSelector(
    state => state.products,
  );
  const [filterProductss, setFilterProducts] = useState([]);

  const handleCategories = categoryList.map(p => {
    return {title: p, isChecked: false};
  });
  const [categories, setCategories] = useState([
    {title: 'All', isChecked: true},
    ...handleCategories,
  ]);

  const changeColor = item => {
    const newCategoris = [...categories];
    const index = newCategoris.findIndex(e => e.title == item.title);
    newCategoris.map(p => (p.isChecked = false));
    newCategoris[index].isChecked = true;
    setCategories(newCategoris);
  };

  const handleFilterItems = item => {
    let filterProducts = [];
    if (item.title != 'All') {
      filterProducts = products.filter(p => {
        return p.category.toUpperCase() === item.title;
      });

      return setFilterProducts(filterProducts);
    }
    console.log('flooooooooooooooooooooooooooooooooos');
    return setFilterProducts([...products].sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    dispatch(getProducts());
    handleFilterItems({title: 'All'});
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FilterBar
        categories={categories}
        onPress={handleFilterItems}
        changeColor={changeColor}
      />
      <View style={styles.procductCategory}>
        <FlatList
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          numColumns={3}
          data={filterProductss}
          renderItem={({item, index}) => {
            return (
              <ProductiteminCategory
                price={item.price}
                onPress={() => {
                  navigation.navigate('ProductDetails', {item});
                }}
              />
            );
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

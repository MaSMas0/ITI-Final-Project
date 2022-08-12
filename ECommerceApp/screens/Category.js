import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ProductiteminCategory from '../components/ProductiteminCategory';
import FilterBar from '../components/FilterBar';
import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../components/Loader';
import colors from '../config/colors';
import CatogeryCard from '../components/CategoryCard ';

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
      {isLoading && <Loader size={Platform.OS == 'android' ? 60 : 'large'} />}
      {!isLoading && (
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          numColumns={3}
          data={filterProductss}
          keyExtractor={item => item._id}
          renderItem={({item, index}) => {
            return (
              <CatogeryCard
                product={item}
                navigation={navigation}
                onPress={() => {
                  navigation.navigate('ProductDetails', {item});
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ashrafgray,
  },
});

export default Category;

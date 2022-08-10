import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ProductiteminCategory from '../components/ProductiteminCategory';
import FilterBar from '../components/FilterBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Card from '../components/ProductCard';
import colors from '../config/colors';
function SearchScreen({navigation}) {
  const dispatch = useDispatch();
  const {products, isLoading, isError, categoryList} = useSelector(
    state => state.products,
  );
  const [product, setProduct] = useState(products);
  const [product1, setProduct1] = useState(products);

  const handleCategories = categoryList.map(p => {
    return {title: p, isChecked: false};
  });

  function searchFilter(value) {
    const filterProduct = product1.filter(p => {
      let itemLowerCase = p.name.toLowerCase();
      let searchTermLowerCase = value.toLowerCase();
      return itemLowerCase.indexOf(searchTermLowerCase) > -1;
    });
    setProduct(filterProduct);
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.white,
          alignItems: 'center',
          paddingStart: 10,
        }}>
        <AntDesign
          name="back"
          size={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Search searchFilter={searchFilter} />
      </View>
      {isLoading && <Loader size={Platform.OS == 'android' ? 60 : 'large'} />}
      {!isLoading && (
        <View style={styles.procductCategory}>
          <FlatList
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            numColumns={2}
            data={product}
            renderItem={({item, index}) => {
              return (
                <Card
                  product={item}
                  onPress={() => {
                    navigation.navigate('ProductDetails', {item});
                  }}
                />
              );
            }}
          />
        </View>
      )}
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

export default SearchScreen;

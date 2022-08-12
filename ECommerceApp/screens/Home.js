import React, {useEffect} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SlideShow from '../components/SlideShow';
import BrandCard from '../components/BrandCard';

import colors from '../config/colors';

import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {getTopProducts} from '../store/reducers/Products/topProductsSlice';
import {useSelector, useDispatch} from 'react-redux';

import Loader from '../components/Loader';
import routes from '../navigation/routes';
import HomeProduct from '../components/HomeProduct';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, isLoading, isError, brands} = useSelector(
    state => state.products,
  );
  const {topProducts} = useSelector(state => state.topProducts);

  const brandProducts = item => {
    const filterProducts = products.filter(p => {
      return p.brand === item.title;
    });
    return filterProducts;
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getTopProducts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader size={Platform.OS == 'android' ? 60 : 'large'} />}
      {!isLoading && (
        <ScrollView style={{backgroundColor: colors.white}}>
          <View style={styles.container}>
            <SlideShow />
            <View
              style={{
                margin: 10,
              }}>
              <Text style={styles.h1}>BRANDS</Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={brands}
              keyExtractor={item => item.title}
              renderItem={({item, index}) => {
                return (
                  <BrandCard
                    title={item.title}
                    image={item.image}
                    onpress={() => {
                      console.log(item);
                      navigation.navigate(routes.Products, brandProducts(item));
                    }}
                  />
                );
              }}
            />
            <View
              style={{
                margin: 10,
              }}>
              <Text style={styles.h1}>TOP RATING</Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={topProducts}
              keyExtractor={item => item.title}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(routes.ProductDetails, {item});
                    }}>
                    <HomeProduct topProduct={item} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  h1: {
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: colors.blue,
  },
  h2: {
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: colors.blue,
  },
});

export default Home;

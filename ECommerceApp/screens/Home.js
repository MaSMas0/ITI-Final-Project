import React, {useEffect} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SlideShow from '../components/SlideShow';
import BrandCard from '../components/BrandCard';

import colors from '../config/colors';

import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../components/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';

import HomeProduct from '../components/HomeProduct';
import {color} from 'react-native-reanimated';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, isLoading, isError, brands} = useSelector(
    state => state.products,
  );

  console.log(brands);
  // products.forEach(p => {
  //   if (!brands.includes(p.brand)) {
  //     brands.push(p.brand);
  //   }
  // });

  const brandProducts = item => {
    const filterProducts = products.filter(p => {
      return p.brand === item;
    });
    return filterProducts;
  };

  useEffect(() => {
    dispatch(getProducts());
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
              renderItem={({item, index}) => {
                return (
                  <BrandCard
                    title={item}
                    onpress={() => {
                      console.log(item);
                      navigation.navigate('Products', brandProducts(item));
                    }}
                  />
                );
              }}
            />
            <View
              style={{
                margin: 10,
              }}>
              <Text style={styles.h1}>TOP SALE</Text>
            </View>
            <HomeProduct />
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

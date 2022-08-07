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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

import {getProducts} from '../store/reducers/Products/ProductsSlice';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../components/Loader';

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
        <View style={styles.container}>
          <SlideShow />
          <Text style={styles.line}></Text>
          <Text style={styles.h1}>Brands</Text>
          <Text style={styles.line}></Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            style={{margin: 0}}
            nestedScrollEnabled
            numColumns={2}
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
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 5,
    backgroundColor: colors.lightGrey,
    // backgroundColor:"#F6F6F6",
    margin: 5,
  },
  h1: {
    fontSize: 24,
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default Home;

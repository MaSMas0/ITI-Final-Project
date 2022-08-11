import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Slider, Image} from 'react-native';
import ProductiteminCategory from '../components/ProductiteminCategory';
import FilterBar from '../components/FilterBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  const [value, setValue] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

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
  function priceFilter(value) {
    console.log(value);
    const filterProduct = product1.filter(p => {
      return p.price >= value;
    });
    setProduct(filterProduct);
    setValue(value);
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
        <Ionicons
          style={{paddingEnd: 15}}
          name="filter"
          size={30}
          onPress={() => {
            setShowFilter(!showFilter);
          }}
        />
      </View>
      {showFilter && (
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '77%',
            }}>
            <Slider
              style={{transform: [{scaleY: 3}]}}
              minimumTrackTintColor={colors.lightBlue}
              maximumTrackTintColor={colors.medium}
              thumbTintColor="transparent"
              maximumValue={1000}
              minimumValue={0}
              step={10}
              value={value}
              onSlidingComplete={value => {
                priceFilter(value);
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            Price:{' '}
            <Text
              style={{
                color: colors.danger,
              }}>
              {value}$
            </Text>
          </Text>
        </View>
      )}
      {isLoading && <Loader size={Platform.OS == 'android' ? 60 : 'large'} />}
      {!isLoading && (
        <View style={styles.procductCategory}>
          {product.length === 0 ? (
            <View style={styles.notFoundContainer}>
              <Image
                source={require('../assets/Not_Found.png')}
                style={{
                  width: 300,
                  height: 300,
                }}
              />
              {/* <Text style={styles.Textnotfound2}>We're sorry</Text> */}
              {/* <Text style={styles.Textnotfound2}>
                We've searched more 100+ products ,{'\n'}but didn't match any
                product.
              </Text> */}
            </View>
          ) : (
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
          )}
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
  notFoundContainer: {
    marginVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textnotfound1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    paddingVertical: 5,
  },
  Textnotfound2: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'grey',
    paddingVertical: 5,

    textAlign: 'center',
  },
});

export default SearchScreen;

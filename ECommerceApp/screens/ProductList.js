// import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Slider,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import Card from '../components/ProductCard';
import Search from '../components/Search';

const Product = ({navigation, route}) => {
  const products = route.params;
  const [product, setProduct] = useState(products);
  const [product1, setProduct1] = useState(products);
  const [value, setValue] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

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

  return (
    <SafeAreaView>
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
        <AntDesign
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

      {product.length === 0 ? (
        <View style={styles.notFoundContainer}>
          <Image
            source={require('../assets/notfound.png')}
            style={{
              width: 200,
              height: 200,
            }}
          />
          <Text style={styles.Textnotfound1}>We're sorry</Text>
          <Text style={styles.Textnotfound2}>
            We've searched more 100+ products ,{'\n'}but didn't match any
            product.
          </Text>
        </View>
      ) : (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          // showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={product}
          renderItem={({item}) => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
export default Product;

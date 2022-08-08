// import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';
import Card from '../components/ProductCard';
import Search from '../components/Search';

const Product = ({navigation, route}) => {
  const products = route.params;
  const [product, setProduct] = useState(products);
  const [product1, setProduct1] = useState(products);

  function searchFilter(value) {
    const filterProduct = product1.filter(p => {
      let itemLowerCase = p.name.toLowerCase();
      let searchTermLowerCase = value.toLowerCase();
      return itemLowerCase.indexOf(searchTermLowerCase) > -1;
    });
    setProduct(filterProduct);
  }

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 5,
        paddingTop: 20,
      }}>
      <Search searchFilter={searchFilter} />
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

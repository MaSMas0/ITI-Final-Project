// import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import colors from '../config/colors';
import Card from '../components/ProductCard';
import Search from '../components/Search';

const Product = ({navigation, route}) => {
  const products = route.params;
  const [product, setProduct] = useState(products);
  const [search, setSearch] = useState('');

  // function searchFilter(text) {
  //   setSearch(text);
  //   products.filter(valueSearch => {
  //     if (search === '') {
  //       return setProduct(valueSearch);
  //     } else if (
  //       valueSearch.name.toLowerCase().includes(search.toLowerCase())
  //     ) {
  //       return setProduct(valueSearch);
  //     } else {
  //       return setProduct([]);
  //     }
  //   });
  // }

  // function searchFilter(text) {
  //   if (text) {
  //     const newProduct = products.filter(valueSearch => {
  //       if (valueSearch.name.toLowerCase().includes(text.toLowerCase())) {
  //         return valueSearch;
  //       } else {
  //         return [];
  //       }
  //     });
  //     setProduct(newProduct);
  //     setSearch(text);
  //   } else {
  //     setProduct(products);
  //     setSearch(text);
  //   }
  // }

  function searchFilter(text) {
    if (text) {
      const newProduct = products.filter(item => {
        const itemProduct = item.name ? item.name.toLowerCase() : '';
        const check = () => {
          if (itemProduct.indexOf(text.toLowerCase())) {
            return itemProduct.indexOf(text.toLowerCase()) > -1;
          } else {
            return [];
          }
        };
        return check();
      });
      setProduct(newProduct);
      setSearch(text);
    } else {
      setProduct(products);
      setSearch(text);
    }
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.grey,
        paddingHorizontal: 5,
        paddingTop: 20,
      }}>
      <Search searchFilter={searchFilter} search={search} />
      {product.length === 0 ? (
        <View
          style={{
            marginVertical: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://t3.ftcdn.net/jpg/01/97/13/54/240_F_197135414_Hiy7mFFJQUBDoNm33L7i9sNUUtJNllXs.jpg',
            }}
            style={{
              width: 400,
              height: 250,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'grey',
            }}>
            Not Found
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
export default Product;

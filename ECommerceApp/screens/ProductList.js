// import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
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
        backgroundColor: colors.grey,
        paddingHorizontal: 5,
        paddingTop: 20,
      }}>
      <Search searchFilter={searchFilter} />
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

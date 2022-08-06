// import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import colors from '../config/colors';
import Card from '../components/ProductCard';

const Product = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.grey, paddingHorizontal: 5}}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        // showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={[1]}
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
    </SafeAreaView>
  );
};
export default Product;

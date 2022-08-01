// import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../config/colors';
import Card from '../components/ProductCard';
const width = Dimensions.get('window').width / 2 - 30;

const Product = ({navigation}) => {
  const [products, setProduct] = useState([]);

  function getEvents() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => response.data)
      .then(data => {
        setProduct(data);
      });
  }
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={products}
        renderItem={({item}) => {
          return <Card product={item} />;
        }}
      />
    </SafeAreaView>

    // <SafeAreaView>
    //   <View style={{marginTop: 30, flexDirection: 'row'}}>
    //     <View style={style.search}>
    //       <Icon name="search" size={25} style={{marginLeft: 20}} />
    //       <TextInput placeholder="Search" />
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};
export default Product;

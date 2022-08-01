import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

function BrandCard(props) {
  return (
    <TouchableOpacity>

    <View
    style={styles.container}>
      <View style={styles.subcontainer}>
       
        {/* <Image source={require('../assets/rr.png')} style={styles.image} /> */}
        <Image
        style={styles.image}
        source={{
          uri: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/000000/external-adidas-a-multinational-corporation-that-designs-and-manufactures-shoes-clothing-and-accessories-fashion-bold-tal-revivo.png',
        }}/>
        <Text style={styles.title}>adidas</Text>
      </View>
      <View
        style={styles.shadow}></View>
    </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container :{
    justifyContent: 'center',
    margin: 10,
    // alignItems: 'center',
    
    
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 110,
    backgroundColor:colors.grey,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
    
    
  },

  image: {
    width: 80,
    height: 60,
    marginStart: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    alignItems:'flex-start',
    color:colors.black
 },
 price:{
fontSize:12
 },
  shadow:{
    // borderRadius: 100,
    borderBottomLeftRadius:100,
    width: 170,
    
    height: 0.5,
    elevation: 2.5,
    shadowColor: Colors.lightGrey,
  }
});

export default BrandCard;

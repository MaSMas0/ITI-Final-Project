import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';
import SecondryButton from './SecondryButton';
import Like from './Like';

const width = Dimensions.get('window').width / 2 - 15;

const Card = ({product,navigation}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('SingleDetails', product)}>
      <View style={styles.card}>
        <Text style={styles.shipping}>Free Shipping*</Text>
          <Image
            source={{uri: product.image}}
            style={styles.image}
          />
          <Text style={styles.like}>

          <Like />
          </Text>

          <Text style={styles.name}> Name of Product</Text>
        <View 
          style={styles.info}>
          <Text style={styles.price}>
            ${product.price}
          </Text>
        </View>      
        <Text style={{
          fontWeight:'bold',
          letterSpacing:2,
          fontSize:12,
          color:colors.black,
          
        }}>
          Nile <Text style={{
            color:colors.gold
          }}>EXPRESS </Text>
        </Text>
        <Text style={{          fontSize:12,
}}>
          Eligable for <Text style={{
            fontWeight:'bold',
            color:colors.black
          }}>Free Delivery</Text>
        </Text>
   
        {/* <Like /> */}



        <SecondryButton  title="ADD TO CART"  />

        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  search: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    flex:1,
    height: 350,
    backgroundColor: colors.white,
    width,
    margin: 5,
    borderRadius: 15,
    justifyContent:'space-between',
    paddingVertical:10,
    
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
    color:colors.black
  },

  image:{
    width,
    height: 100,
    resizeMode: 'contain',
    alignItems:'center'
  },
  info:{
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',  
  },
  shipping:{
    backgroundColor:colors.gold,
    color:colors.grey,
    width:'45%',
    height:20,
    textAlignVertical:'center',
    textAlign:'center',
    fontSize:10,
    fontWeight:'bold',
    borderRadius:5,
    marginLeft:3,
    
    
  },
  like:{
    marginLeft:15
  },
  name:{
    marginHorizontal:5
  }
});

export default Card;

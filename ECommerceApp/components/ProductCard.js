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

const width = Dimensions.get('window').width / 2 - 15;

const Card = ({product,navigation}) => {
  const [like, setLike] = useState(false);
  function handelLike() {
    setLike(!like);
  }

  return (
    // <TouchableOpacity
      // activeOpacity={0.8}
      // onPress={() => navigation.navigate('SingleDetails', product)}>
      <View style={styles.card}>
          <Image
            source={{uri: product.image}}
            style={styles.image}
          />
          <Text> name of Product</Text>
        <View 
          style={styles.info}>
          <Text style={styles.price}>
            ${product.price}
          </Text>

              <AntDesign 
              onPress={() => handelLike()}
                name="heart"
                size={20}
                color={like ? colors.black : 'grey'}></AntDesign>
        </View>
       
        {/* <AntDesign onPress={() => handelLike()}
                name="staro"
                size={40}
                color={like ? 'red' : 'grey'}>

            </AntDesign> */}
        
        <SecondryButton title="Add to Cart" />
      </View>
  );
    {/* </TouchableOpacity> */}
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
    // flex:1,
    height: 300,
    backgroundColor: colors.white,
    width,
    margin: 5,
    borderRadius: 15,
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingVertical:10,
    
  },
  price:{
    color:'red'
  },

  image:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  info:{
    flex:1,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',  
  }
});

export default Card;

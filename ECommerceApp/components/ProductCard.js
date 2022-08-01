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

const width = Dimensions.get('window').width / 2 - 15;

const Card = ({product}) => {
  const [like, setLike] = useState(false);
  function handelLike() {
    setLike(!like);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('SingleDetails', product)}>
      <View style={style.card}>
        <View
          style={{
            height: 170,
            width: 300,
            // alignItems: 'center',
            // justifyContent: 'center',
            // flex: 1,
          }}>
          <Image
            source={{uri: product.image}}
            style={{
              flex: 1,
              resizeMode: 'contain',
              width: 200,
              height: 100,
            }}
          />
        </View>

        {/* <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
          {product.title}
        </Text> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            paddingHorizontal: 20,
            paddingTop: 15,
            paddingBottom: 20,
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            ${product.price}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: colors.green,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text onPress={() => handelLike()}>
              <AntDesign
                name="heart"
                size={25}
                color={like ? 'red' : 'grey'}></AntDesign>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  search: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    height: 225,
    backgroundColor: colors.grey,
    width,
    marginHorizontal: 2,
    borderRadius: 15,
    marginBottom: 20,
    // padding: 15,
    // borderWidth: 1,
    // borderColor:""
  },
});

export default Card;

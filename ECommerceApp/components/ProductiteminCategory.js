import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import Like from './Like';
import colors from '../config/colors';

const ProductiteminCategory = ({price, onPress, image, name}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animatable.View animation="flipInY" duration={1000} style={{margin: 8}}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <Text numberOfLines={2} style={styles.name}>
            {name}
          </Text>
          <View style={styles.details}>
            <Text style={styles.fav}> {price} $</Text>
            <Like />
          </View>
        </View>
        <Like />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 8,
    marginVertical: 5,
    width: 103,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  name: {
    width: 70,
    textAlign: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  fav: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 5,
  },
  iconStyle: {
    fontSize: 16,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ProductiteminCategory;

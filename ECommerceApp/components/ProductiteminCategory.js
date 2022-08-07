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

const ProductiteminCategory = ({price}) => {
  console.log(price, 'price');
  return (
    <TouchableOpacity>
      <ScrollView>
        <Animatable.View
          animation="flipInY"
          duration={1000}
          style={{margin: 8}}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/000000/external-adidas-a-multinational-corporation-that-designs-and-manufactures-shoes-clothing-and-accessories-fashion-bold-tal-revivo.png',
              }}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.fav}>{price} EG</Text>

            <Like />
          </View>
        </Animatable.View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    padding: 8,
    marginVertical: 5,
    width: 103,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    height: 90,
  },
  fav: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  iconStyle: {
    fontSize: 16,
    marginStart: 5,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    marginStart: 10,
    justifyContent: 'space-evenly',
  },
});

export default ProductiteminCategory;

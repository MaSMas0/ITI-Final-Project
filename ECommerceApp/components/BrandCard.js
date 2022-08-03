import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

function BrandCard({onpress}) {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          {/* <Image source={require('../assets/rr.png')} style={styles.image} /> */}
          <Image
            style={styles.image}
            source={{
              uri: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/000000/external-adidas-a-multinational-corporation-that-designs-and-manufactures-shoes-clothing-and-accessories-fashion-bold-tal-revivo.png',
            }}
          />
          <Text style={styles.title}>adidas</Text>
        </View>
        <View style={styles.shadow}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 8,
    marginHorizontal: 10,

    // alignItems: 'center',
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 160,
    backgroundColor: colors.grey,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  image: {
    width: 80,
    height: 60,
    marginStart: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
  },

  shadow: {
    borderRadius: 100,
    width: 135,

    height: 0.5,
    elevation: 2.5,
    shadowColor: Colors.lightGrey,
  },
});

export default BrandCard;

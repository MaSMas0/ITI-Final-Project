import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
const ProductiteminCategory = () => {
  return (
    <Animatable.View animation="flipInY" duration={1000}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/000000/external-adidas-a-multinational-corporation-that-designs-and-manufactures-shoes-clothing-and-accessories-fashion-bold-tal-revivo.png',
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.fav}>250.00 EGP</Text>
        <AntDesign style={styles.iconStyle} name="heart" size={25}></AntDesign>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // flex : 1
    backgroundColor: 'red',
    // margin: 10,
    padding: 8,
    margin: 8,
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
  },
  iconStyle: {
    fontSize: 19,
    marginStart: 8,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    marginStart: 10,
  },
});

export default ProductiteminCategory;

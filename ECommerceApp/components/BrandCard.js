import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function BrandCard(props) {
  return (
    <View
      style={{
        marginTop: 20,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <Image source={require('../assets/rr.png')} style={styles.image} />
        <Text style={styles.title}>Adidas</Text>
      </View>
      <View
        style={{
          borderRadius: 20,
          width: 140,
          height: 5,
          elevation: 1,
          shadowColor: 'gray',
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    width: 150,
    height: 150,
    borderWidth: 1.5,
    borderRadius: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginStart: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default BrandCard;

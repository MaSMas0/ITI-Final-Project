import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';

function BrandCard({onpress, title}) {
  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/000000/external-adidas-a-multinational-corporation-that-designs-and-manufactures-shoes-clothing-and-accessories-fashion-bold-tal-revivo.png',
              }}
            />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    marginVertical: 20,

    paddingHorizontal: 17,
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: colors.grey,
    borderRadius: 40,
  },

  image: {
    width: 50,
    height: 50,
    marginStart: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black,
    marginBottom: 10,
  },
});

export default BrandCard;

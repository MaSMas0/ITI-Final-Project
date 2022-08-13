import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';

function BrandCard({onpress, title, image}) {
  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{
                uri: image,
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

    borderRadius: 40,
  },

  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black,
    marginBottom: 10,
  },
});

export default BrandCard;

import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import colors from '../config/colors';

import Like from './Like';

const HomeProduct = ({topProduct}) => {
  return (
    <View>
      <View style={styles.cont}>
        <Image source={{uri: topProduct.image}} style={styles.image} />
        <Text numberOfLines={2} style={styles.name}>
          {topProduct.name}
        </Text>
        <Rating
          readonly
          startingValue={topProduct.rating}
          imageSize={10}
          style={{paddingVertical: 5}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 6,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    width: 80,
    textAlign: 'center',
  },
});

export default HomeProduct;

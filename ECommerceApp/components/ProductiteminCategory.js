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

const ProductiteminCategory = ({price, onPress, image}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ScrollView>
        <Animatable.View
          animation="flipInY"
          duration={1000}
          style={{margin: 8}}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.fav}> {price} $</Text>

            <Like />
          </View>
        </Animatable.View>
      </ScrollView>
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
  },
  image: {
    width: '100%',
    height: 90,
  },
  fav: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 5,
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

import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
const WishlistComponent = () => {
  const [like, setLike] = useState(true);
  function handelLike() {
    setLike(!like);
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg?w=2000',
        }}
        style={styles.imgStyle}
      />
      <View style={{flexShrink: 1}}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Product Nike</Text>
          <AntDesign
            onPress={() => handelLike()}
            style={styles.iconStyle}
            color={like ? colors.mediumBlue : 'grey'}
            name="heart"
            size={25}></AntDesign>
        </View>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    marginTop: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyle: {
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 13,
    margin: 10,
  },
  iconStyle: {
    marginEnd: 20,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
  },
});

export default WishlistComponent;

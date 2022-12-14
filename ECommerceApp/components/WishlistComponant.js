import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {useDispatch} from 'react-redux';
import {removeWishList} from '../store/reducers/WishList/WishlistSlice';

const WishlistComponent = ({wishList}) => {
  const dispatch = useDispatch();

  // const [like, setLike] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: wishList.image,
        }}
        style={styles.imgStyle}
      />
      <View style={styles.subContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {wishList.name}
        </Text>
        <AntDesign
          onPress={() => dispatch(removeWishList(wishList))}
          style={styles.iconStyle}
          color={colors.mediumBlue}
          name="heart"
          size={25}></AntDesign>
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
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
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
    width: 200,
  },
});

export default WishlistComponent;

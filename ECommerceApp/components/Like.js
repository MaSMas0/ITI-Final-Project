import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addToWishList,
  removeWishList,
} from '../store/reducers/WishList/WishlistSlice';

export default function Like({product, size = 18}) {
  const dispatch = useDispatch();

  const [like, setLike] = useState(false);

  function handelLike() {
    setLike(!like);
    if (!like) {
      dispatch(addToWishList(product));
    } else {
      dispatch(removeWishList(product));
    }
  }

  useEffect(() => {}, [product, handelLike]);
  return (
    <View>
      <AntDesign
        onPress={() => handelLike()}
        name="heart"
        size={22}
        color={like ? colors.mediumBlue : colors.medium}></AntDesign>
    </View>
  );
}

import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {useDispatch} from 'react-redux';
import {removeWishList} from '../store/reducers/WishList/WishlistSlice';

const WishlistComponent = ({wishLists}) => {
  const dispatch = useDispatch();

  // const [like, setLike] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: wishLists.image,
          }}
          style={styles.imgStyle}
        />
        <View style={{flexShrink: 1}}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>{wishLists.name}</Text>
            <AntDesign
              onPress={() => dispatch(removeWishList(wishLists))}
              style={styles.iconStyle}
              // color={like ? colors.mediumBlue : 'grey'}
              color={colors.mediumBlue}
              name="heart"
              size={25}></AntDesign>
          </View>
          <Text>{wishLists.description}</Text>
        </View>
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

import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import CartCard from '../components/CartCard';

const Cart = ({navigation}) => {
  const cartLists = useSelector(state => state.cart.cartItems);

  return (
    <View
      style={{
        backgroundColor: colors.white,
      }}>
      {cartLists.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/5435/5435052.png',
              }}
              style={styles.imgStyle}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text1Style}>Oops!</Text>
              <Text style={styles.text2Style}>
                Your Cart is
                <Text style={{color: colors.blue}}> Empty</Text>
              </Text>
              <Text style={styles.addItemStyle}>Add item to get started</Text>
              <TouchableOpacity
                style={styles.emptyCartBtn}
                onPress={() => navigation.navigate('SearchScreen')}>
                <Text style={styles.cartBtnStyle}>GO TO STORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 0,
            }}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            data={cartLists}
            renderItem={({item, index}) => {
              return <CartCard item={item} />;
            }}
          />
          <View style={styles.secondContainer}>
            <View>
              <Text style={styles.summeryStyle}>Order summary</Text>

              <View style={styles.subSecContainer}>
                <Text style={styles.greyText}>SubTotal :</Text>
                <Text style={styles.blueText}>
                  ({cartLists.reduce((acc, item) => acc + item.qty, 0)}) items
                </Text>
              </View>

              <View style={styles.subSecContainer}>
                <Text style={styles.greyText}>Total Price :</Text>
                <Text style={styles.blueText}>
                  $
                  {cartLists
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </Text>
              </View>
              {/* <View style={styles.delivCont}>
                <Text style={styles.greyText}>Delivery Service:</Text>
                <Text style={styles.blueText}>0$ (Free Delivery)</Text>
              </View> */}
              {/* <View style={styles.totalPriceCont}>
                <Text style={styles.greyText}>Total Price :</Text>
                <Text style={styles.blueText}>250$</Text>
              </View> */}
            </View>
          </View>
          <View style={styles.checkBtnCont}>
            <TouchableOpacity onPress={()=>navigation.navigate('Payment')}>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                colors={['#030A4E', '#22336a']}
                style={styles.checkOutContainer}>
                <Text style={styles.checkOut}> CHECK OUT</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 600,
    flexDirection: 'column',
    position: 'absolute',
    top: 50,
    left: 75,
    color: colors.white,
  },
  imgStyle: {
    width: 250,
    height: 250,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: -168,
    top: 17,
  },
  text1Style: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text2Style: {
    color: colors.medium,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  addItemStyle: {
    color: colors.medium,
    fontSize: 16,

    marginBottom: 25,
  },
  emptyCartBtn: {
    backgroundColor: colors.blue,
    width: 200,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  cartBtnStyle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  increSubContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
  increBtn: {fontWeight: 'bold', color: colors.white, fontSize: 22},
  decreSubContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    backgroundColor: colors.white,
  },
  decreBtn: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.black,
  },
  checkOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 320,
    height: 47,
  },
  checkOut: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  prodTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.lightBlue,
  },
  cartContainer: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartImgContainer: {
    flexDirection: 'row',
    padding: 8,
    width: 370,
  },
  CartImgStyle: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  CartText1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  qtStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.medium,
  },
  incDeCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 120,
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.medium,
  },
  priceStyle: {fontSize: 18, fontWeight: 'bold', color: colors.lightBlue},
  secondContainer: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 270,
  },
  summeryStyle: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 10,
  },
  subSecContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  greyText: {
    fontSize: 18,
    color: colors.medium,
    fontWeight: 'bold',
  },
  blueText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
  delivCont: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  totalPriceCont: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBtnCont: {
    alignItems: 'center',

    backgroundColor: colors.white,
  },
});

export default Cart;

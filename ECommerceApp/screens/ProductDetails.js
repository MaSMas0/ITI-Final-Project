import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
const ProductDetails = () => {
  return (
    <SafeAreaView style={style.saveAreaStyle}>
      <View style={style.header}></View>
      <View style={style.imageContainer}>
        <Image
          style={style.imgStyle}
          source={{
            uri: 'https://www.slazzer.com/static/images/home-page/individual-image-design-maker.jpg',
          }}
        />
      </View>
      <View style={style.Container}>
        <View style={style.subCont}>
          <Text style={style.title}>Product Name</Text>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            colors={['#030A4E', '#22336a']}
            style={style.priceContainer}>
            <Text style={style.priceText}>$200</Text>
          </LinearGradient>
        </View>
        <View style={style.descriptionContainer}>
          <Text style={style.description}>
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness.
          </Text>
          <View style={style.downContainer}>
            <View style={style.subDownContainer}>
              <View style={style.decreContainer}>
                <Text style={style.decreBtn}>-</Text>
              </View>
              <Text style={style.prodNo}>1</Text>

              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                colors={['#030A4E', '#22336a']}
                style={style.increContainer}>
                <Text style={style.increBtn}>+</Text>
              </LinearGradient>
            </View>

            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              colors={['#030A4E', '#22336a']}
              style={style.buyBtn}>
              <Text style={style.buyText}>Buy</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  saveAreaStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imgStyle: {
    resizeMode: 'contain',
    flex: 1,
    width: 350,
    height: 300,
    borderRadius: 20,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },

  Container: {
    flex: 0.55,
    backgroundColor: 'colors.lightGrey',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 25,
    marginTop: 10,
    paddingTop: 10,
  },
  subCont: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  description: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4,
    marginBottom: 15,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  increContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
  increBtn: {fontWeight: 'bold', color: colors.white, fontSize: 22},
  decreContainer: {
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
  prodNo: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 30},
  buyBtn: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buyText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  priceContainer: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    marginTop: 10,
  },
  priceText: {
    marginLeft: 20,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  downContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subDownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProductDetails;

import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../config/colors';

const SingleDetails = () => {
  // const product = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View style={style.header}>
        {/* <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} /> */}
        <Text onPress={() => navigation.goBack()}>Back</Text>
      </View>
      <View style={style.imageContainer}>
        <Image
          source={{
            uri: 'https://www.slazzer.com/static/images/home-page/individual-image-design-maker.jpg',
          }}
          style={{resizeMode: 'contain', flex: 1, width: 150, height: 200}}
        />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}></View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: colors.black}}>
            image product
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'red',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              $200
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 4,
            }}>
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness.
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 20,
    paddingTop: 10,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: '#4fc3f7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: '#4fc3f7',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    position: 'absolute',
    left: '78.5%',
    top: '90%',
  },
});

export default SingleDetails;

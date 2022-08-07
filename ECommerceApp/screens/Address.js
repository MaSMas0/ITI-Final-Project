import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AddressComp from '../components/SavedAddressesComponent';
import SecondryButton from '../components/SecondryButton';
const Address = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <AddressComp
          countryName="Cairo"
          phoneNumber="01276567619"
          location="Ain Shams"
        />
        <AddressComp
          countryName="Gharbia"
          phoneNumber="01001239584 "
          location="Tanta"
        />
        <AddressComp />

        <View style={styles.btnContainer}>
          <SecondryButton
            title="ADD NEW ADDRESS"
            style={styles.addAddress}
            onPress={() => {
              navigation.navigate('NewAddress');
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  addAddress: {
    marginVertical: 70,
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {justifyContent: 'center', alignItems: 'center'},
});

export default Address;

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SecondryButton from '../components/SecondryButton';
import colors from '../config/colors';

const NewAddress = () => {
  const countries = [
    'Alexandria',
    'Aswan',
    'Asyut',
    'Beheira',
    'Beni Suef',
    'Cairo',
    'Dakahlia',
    'Damietta',
    'Faiyum',
    'Gharbia',
    'Giza',
    'Ismailia',
    'Kafr El Sheikh',
    'Luxor',
    'Matruh',
    'Minya',
    'Monufia',
    'New Valley',
    'North Sinai',
    'Port Said',
    'Qalyubia',
    'Qena',
    'Red Sea',
    'Sharqia',
    'Sohag',
    'South Sinai',
    'Suez',
  ];

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          marginBottom: 26,
        }}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://icons-for-free.com/download-icon-google+map+map+pin+pointer+icon-1320184070259452120_512.png',
          }}
        />
      </View>

      <SelectDropdown
        defaultValue="Cairo"
        buttonTextStyle={{
          color: 'grey',
        }}
        renderDropdownIcon={() => <AntDesign name="earth" size={22} />}
        buttonStyle={{
          width: 350,
          borderRadius: 15,
          borderWidth: 1,
          backgroundColor: 'transparent',
          borderColor: 'grey',
        }}
        dropdownIconPosition="right"
        searchPlaceHolder="Country"
        search={true}
        dropdownStyle={{
          backgroundColor: colors.grey,
        }}
        renderSearchInputLeftIcon={() => <AntDesign name="search1" size={22} />}
        renderCustomizedRowChild={(item, index) => <Text>{item}</Text>}
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle} placeholder="City" />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput style={styles.inputStyle} placeholder="Address" />
      </View>
      <View style={styles.phoneContainer}>
        <TextInput style={styles.inputStyle} placeholder="Phone" />
      </View>

      <SecondryButton style={styles.addAddress} title="ADD ADDRESS" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 250,
    height: 250,
  },
  inputStyle: {
    paddingStart: 15,
    borderWidth: 1,
    width: 350,
    borderColor: 'grey',
    borderRadius: 15,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 26,
  },
  phoneContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 20,
  },
  addAddress: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewAddress;

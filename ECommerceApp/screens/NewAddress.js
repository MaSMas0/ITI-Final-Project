import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SecondryButton from '../components/SecondryButton';

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
          style={{
            width: 411,
            height: 250,
          }}
          source={{
            uri: 'https://cdn.images.express.co.uk/img/dynamic/59/590x/Google-Maps-Offline-Viewing-Save-microSD-Card-Google-Maps-MicroSD-Card-Save-Memory-Google-Maps-Save-Battery-Life-With-Offline-Vi-698455.jpg',
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
          backgroundColor: 'red',
        }}
        renderSearchInputLeftIcon={() => <AntDesign name="search1" size={22} />}
        renderCustomizedRowChild={(item, index) => <Text>{item}</Text>}
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        // buttonTextAfterSelection={(selectedItem, index) => {
        //   return selectedItem;
        // }}
        // rowTextForSelection={(item, index) => {
        //   return item;
        // }}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 26,
        }}>
        <TextInput
          style={{
            paddingStart: 15,
            borderWidth: 1,
            width: 350,
            borderColor: 'grey',
            borderRadius: 15,
          }}
          placeholder="City"
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            paddingStart: 15,
            borderWidth: 1,
            width: 350,
            borderColor: 'grey',
            borderRadius: 15,
          }}
          placeholder="Address"
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 26,
          marginBottom: 20,
        }}>
        <TextInput
          style={{
            paddingStart: 15,
            borderWidth: 1,
            width: 350,
            borderColor: 'grey',
            borderRadius: 15,
          }}
          placeholder="Phone"
        />
      </View>

      <SecondryButton
        style={{
          width: 260,
        }}
        title="ADD ADDRESS"
      />
    </SafeAreaView>
  );
};

export default NewAddress;

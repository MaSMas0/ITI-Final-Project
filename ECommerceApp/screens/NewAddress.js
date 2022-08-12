import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, {useEffect} from 'react';
import SecondryButton from '../components/SecondryButton';
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {saveShippingAddress} from '../actions/CartActions';
import routes from '../navigation/routes';

const NewAddress = ({navigation}) => {
  const {loading, error, userInfo} = useSelector(state => state.userLogin);
  const countriesWithFlags = [
    {title: 'Alexandria', image: require('../assets/AddressLogo/Alex.png')},
    {title: 'Aswan', image: require('../assets/AddressLogo/Aswan.png')},
    {title: 'Asyut', image: require('../assets/AddressLogo/Assiut.png')},
    {title: 'Beheira', image: require('../assets/AddressLogo/Behira.png')},
    {
      title: 'Beni Suef',
      image: require('../assets/AddressLogo/Benisuef.png'),
    },
    {title: 'Cairo', image: require('../assets/AddressLogo/Cairo.png')},
    {
      title: 'Dakahlia',
      image: require('../assets/AddressLogo/Dakhlia.png'),
    },
    {title: 'Damietta', image: require('../assets/AddressLogo/Domyat.png')},
    {title: 'Faiyum', image: require('../assets/AddressLogo/Fayom.png')},
    {title: 'Gharbia', image: require('../assets/AddressLogo/Gharbia.png')},
    {title: 'Giza', image: require('../assets/AddressLogo/Giza.png')},
    {
      title: 'Ismailia',
      image: require('../assets/AddressLogo/Ismaila.png'),
    },
    {
      title: 'Kafr El Sheikh',
      image: require('../assets/AddressLogo/Kafrelshiekh.png'),
    },
    {title: 'Luxor', image: require('../assets/AddressLogo/Loxor.png')},
    {title: 'Matruh', image: require('../assets/AddressLogo/Matroh.png')},
    {title: 'Minya', image: require('../assets/AddressLogo/Minya.png')},
    {title: 'Monufia', image: require('../assets/AddressLogo/Monofia.png')},
    {
      title: 'New Valley',
      image: require('../assets/AddressLogo/Newvally.png'),
    },
    {
      title: 'North Sinai',
      image: require('../assets/AddressLogo/northSinai.png'),
    },
    {
      title: 'Port Said',
      image: require('../assets/AddressLogo/PortSaid.png'),
    },
    {
      title: 'Qalyubia',
      image: require('../assets/AddressLogo/Qalyobia.png'),
    },
    {title: 'Qena', image: require('../assets/AddressLogo/Qena.png')},
    {title: 'Red Sea', image: require('../assets/AddressLogo/RedSea.png')},
    {title: 'Sharqia', image: require('../assets/AddressLogo/Sharqia.png')},
    {title: 'Sohag', image: require('../assets/AddressLogo/Sohag.png')},
    {
      title: 'South Sinai',
      image: require('../assets/AddressLogo/southSinai.png'),
    },
    {title: 'Suez', image: require('../assets/AddressLogo/Suez.png')},
  ];
  const cart = useSelector(state => state.cart);
  const {shippingAddress} = cart;
  const [city, onChangeCity] = React.useState(
    shippingAddress ? shippingAddress.city : '',
  );
  const [address, onChangeAddress] = React.useState(
    shippingAddress ? shippingAddress.address : '',
  );
  const [postalCode, onChangePostalCode] = React.useState(
    shippingAddress ? shippingAddress.postalCode : '',
  );
  const [country, onChangeCountry] = React.useState(
    shippingAddress ? shippingAddress.country : '',
  );
  const dispatch = useDispatch();
  const handleAddAddress = () => {
    dispatch(saveShippingAddress({address, city, postalCode, country}));
    navigation.navigate('Payment');
    console.log(country);
  };
  // console.log(shippingAddress.address);
  useEffect(() => {
    if (!userInfo) {
      navigation.navigate(routes.WelcomeScreen);
    }
  }, [userInfo]);
  return (
    <ScrollView>
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
          data={countriesWithFlags}
          onSelect={(selectedItem, index) => {
            onChangeCountry(selectedItem.title);
          }}
          buttonStyle={styles.dropdown3BtnStyle}
          renderCustomizedButtonChild={(selectedItem, index) => {
            return (
              <View style={styles.dropdown3BtnChildStyle}>
                {selectedItem ? (
                  <Image
                    source={selectedItem.image}
                    style={styles.dropdown3BtnImage}
                  />
                ) : (
                  <Ionicons
                    name="md-earth-sharp"
                    color={colors.lightBlue}
                    size={25}
                  />
                )}
                <Text style={styles.dropdown3BtnTxt}>
                  {selectedItem ? selectedItem.title : 'Select country'}
                </Text>
                <FontAwesome
                  name="chevron-down"
                  color={colors.lightBlue}
                  size={18}
                />
              </View>
            );
          }}
          dropdownStyle={styles.dropdown3DropdownStyle}
          rowStyle={styles.dropdown3RowStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
          renderCustomizedRowChild={(item, index) => {
            return (
              <View style={styles.dropdown3RowChildStyle}>
                <Image source={item.image} style={styles.dropdownRowImage} />
                <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
              </View>
            );
          }}
          search
          searchInputStyle={styles.dropdown3searchInputStyleStyle}
          searchPlaceHolder={'Search for your governate'}
          renderSearchInputLeftIcon={() => {
            return <FontAwesome name={'search'} color={'grey'} size={18} />;
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder="City"
            onChangeText={onChangeCity}
            value={city}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Address"
            onChangeText={onChangeAddress}
            value={address || ''}
          />
        </View>
        <View style={styles.phoneContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Phone"
            onChangeText={onChangePostalCode}
            value={postalCode || ''}
          />
        </View>

        <SecondryButton
          style={styles.addAddress}
          title="ADD ADDRESS"
          onPress={handleAddAddress}
        />
      </SafeAreaView>
    </ScrollView>
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
  dropdown3BtnStyle: {
    width: '84.8%',
    height: 50,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'grey',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {
    width: 25,
    height: 25,
    borderRadius: 30,
  },
  dropdown3BtnTxt: {
    color: colors.lightBlue,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: colors.white},
  dropdown3RowStyle: {
    backgroundColor: colors.lightGrey,
    borderBottomColor: '#444',
    height: 50,
    // borderColor: 'grey',
    // borderRadius: 12,
    // borderWidth: 1,
    marginVertical: 3,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  dropdown3RowTxt: {
    color: colors.lightBlue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: colors.grey,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    borderRadius: 12,
  },
});

export default NewAddress;

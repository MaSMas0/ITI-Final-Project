import React from 'react';
import InputApp from '../components/InputApp';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PrimaryButton from '../components/PrimaryButton';
import colors from '../config/colors';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ContactUs = () => {
  return (
    <ScrollView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
        padding: 10,
        // marginBottom: 20,
      }}>
      <View style={styles.container}>
        <View style={styles.para}>
          <Text
            style={{
              color: colors.blue,
              fontSize: 35,
              fontWeight: 'bold',
              color: colors.blue,
            }}>
            Get in touch!
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: colors.blue,
            }}>
            Feel Free to message us and we will get back to you as soon as we
            can.{' '}
          </Text>
        </View>
        <View style={styles.viewIcon}>
          <Text style={styles.icon}>
            <Entypo
              name="location-pin"
              size={14}
              color={colors.lightBlue}></Entypo>{' '}
            102 Street 27 Don{' '}
          </Text>

          <Text style={styles.icon}>
            <Ionicons name="call" size={14} color={colors.lightBlue}>
              {' '}
            </Ionicons>
            +02 1234 567
          </Text>
        </View>
        <Text style={styles.icon}>
          <Entypo name="mail" color={colors.lightBlue} size={14}></Entypo>{' '}
          hello@flowbase.com
        </Text>
        <View style={styles.form}>
          <InputApp placeholder="Name" placeholderTextColor={colors.blue} />
          <InputApp placeholder="Email" placeholderTextColor={colors.blue} />
          <TextInput
            style={styles.textarea}
            multiline={true}
            placeholder="Message.."
            placeholderTextColor={colors.blue}
          />
        </View>

        <TouchableOpacity style={styles.submit}>
          <Text style={styles.title}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  para: {
    marginBottom: 30,
    width: '90%',
  },
  form: {
    marginTop: 5,
    width: '90%',
    marginBottom: 5,
  },
  textarea: {
    backgroundColor: 'white',
    height: 250,
    alignItems: 'flex-start',
    flexDirection: 'row',
    color: colors.blue,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.blue,
    margin: 5,
    borderRadius: 10,
  },
  submit: {
    backgroundColor: colors.blue,
    width: '50%',
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 25,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 14,
    // marginLeft:10,
    color: colors.black,

    flexDirection: 'row',
  },
  viewIcon: {
    flexDirection: 'row',
    fontSize: 10,
    width: '90%',
    marginBottom: 10,
    justifyContent: 'space-evenly',
  },
});

export default ContactUs;

// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   Dimensions,
//   Pressable,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// export default class ContactUs extends Component {
//   static defaultProps = {
//     title: '',
//     //slide fade  none
//     animationType: 'slide',
//     haveOutsideTouch: false,
//     data: [],
//   };

//   renderItem = ({item, inde}) => {
//     return (
//       <TouchableOpacity
//         style={{
//           height: 50,
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'flex-start',
//           borderBottomColor: 'grey',
//           borderBottomWidth: 0.5,
//         }}>
//         <Text
//           style={{
//             fontSize: 18,
//             marginLeft: 18,
//             fontWeight: 'normal',
//             color: '#182E44',
//           }}>
//           mahmoud
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   renderContent = () => {
//     const {data} = this.props;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.item}>Email : NileBuySite.gmail.com</Text>
//         <Text style={styles.item}>Phone : 01145773245</Text>
//       </View>
//     );
//   };

//   render() {
//     const {show, title, animationType, closePopup, haveOutsideTouch} =
//       this.props;

//     return (
//       <Modal
//         animationType={animationType}
//         transparent={true}
//         visible={show}
//         onRequestClose={() => {}}>
//         <View style={{flex: 1, backgroundColor: '#000000AA'}}>
//           <Pressable
//             onPress={() => {
//               if (!haveOutsideTouch) return;
//               closePopup();
//             }}
//             style={{flex: 1}}></Pressable>

//           <View
//             style={{
//               bottom: 0,
//               position: 'absolute',
//               width: '100%',
//               backgroundColor: 'white',
//               borderTopLeftRadius: 15,
//               borderTopRightRadius: 15,
//               // height: Dimensions.get('window').height * 0.4,
//               //   maxHeight: Dimensions.get('window').height * 0.4,
//               height: 300,
//             }}>
//             <Text
//               style={{
//                 alignSelf: 'center',
//                 color: '#182E44',
//                 fontSize: 20,
//                 fontWeight: '500',
//                 margin: 15,
//               }}>
//               {title}
//             </Text>
//             {this.renderContent()}
//           </View>
//         </View>
//       </Modal>
//     );
//   }
// }

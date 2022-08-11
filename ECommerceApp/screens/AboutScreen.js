import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../config/colors';
const AboutScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bgImg}>
          <Image style={styles.img} source={require('../assets/cc.png')} />
        </View>
        <Text style={styles.paragraph}>
          This Application is Our Graduation Project, Try use this application
          and if you found any problem , please Contact us to solve it and
          improve our application.
        </Text>
        <View style={styles.subContainer}>
          <Text style={styles.head}>
            {' '}
            Team <AntDesign name="team" size={18}></AntDesign>
          </Text>
          <Animatable.Text
            animation="fadeInLeftBig"
            duration={4000}
            iterationCount="infinite"
            style={styles.item}>
            Mahmoud Mahmoud Abdallah
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInRightBig"
            duration={4000}
            iterationCount="infinite"
            style={styles.item}>
            Ahmed Mahmoud Ragheb
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInLeftBig"
            duration={4000}
            iterationCount="infinite"
            style={styles.item}>
            Amr El Sokary
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInRightBig"
            duration={4000}
            iterationCount="infinite"
            style={styles.item}>
            Kareem El Ansary
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInLeftBig"
            duration={4000}
            iterationCount="infinite"
            style={styles.item}>
            Mohamed Ashraf
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInRightBig"
            duration={4000}
            iterationCount="infinite"
            style={styles.item}>
            Mohamed AbdelSamee
          </Animatable.Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default AboutScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
  },
  subContainer: {
    backgroundColor: colors.grey,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    // margin: 15,
  },
  img: {
    marginTop: 5,
    width: 250,
    height: 250,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  item: {
    fontSize: 18,
    padding: 5,
    color: colors.lightBlue,
    overflow: 'hidden',
    width: '98%',
  },
  head: {
    color: colors.lightBlue,

    fontWeight: 'bold',
    fontSize: 26,
    marginStart: 5,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
    color: colors.black,
  },
  bgImg: {},
});
// export default AboutScreen;

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

// export default class AboutScreen extends Component {
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
//         <Text style={styles.paragraph}>
//           This Application is Our Graduation Project, Try use this application
//           and if you fount any problem , please Contact Us to solve it and
//           improve our application.
//         </Text>
//         <Text style={styles.our}>Our Team :</Text>
//         <Text style={styles.item}>Mahmoud Mahmoud Abdallah</Text>
//         <Text style={styles.item}>Ahmed Mahmoud Raghb</Text>
//         <Text style={styles.item}>Amr El Sokary</Text>
//         <Text style={styles.item}>Kareem El Ansary</Text>
//         <Text style={styles.item}>Mohamed Ashraf</Text>
//         <Text style={styles.item}>Mohamed AbdelSamee</Text>
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
//               height: 400,
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

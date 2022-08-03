// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// const AboutScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>
//         This Application is Our Graduation Project, Try use this application and
//         if you fount any problem , please Contact Us to solve it and improve our
//         application.
//       </Text>
//       <Text style={styles.our}>Our Team :</Text>
//       <Text style={styles.item}>Mahmoud Mahmoud Abdallah</Text>
//       <Text style={styles.item}>Ahmed Mahmoud Raghb</Text>
//       <Text style={styles.item}>Amr El Sokary</Text>
//       <Text style={styles.item}>Kareem El Ansary</Text>
//       <Text style={styles.item}>Mohamed Ashraf</Text>
//       <Text style={styles.item}>Mohamed AbdelSamee</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    padding: 5,
  },
  our: {
    fontWeight: 'bold',
    fontSize: 26,
    marginStart: 5,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
});
// export default AboutScreen;

import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Dimensions,
  Pressable,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class AboutScreen extends Component {
  static defaultProps = {
    title: '',
    //slide fade  none
    animationType: 'slide',
    haveOutsideTouch: false,
    data: [],
  };

  renderItem = ({item, inde}) => {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
        }}>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 18,
            fontWeight: 'normal',
            color: '#182E44',
          }}>
          mahmoud
        </Text>
      </TouchableOpacity>
    );
  };

  renderContent = () => {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          This Application is Our Graduation Project, Try use this application
          and if you fount any problem , please Contact Us to solve it and
          improve our application.
        </Text>
        <Text style={styles.our}>Our Team :</Text>
        <Text style={styles.item}>Mahmoud Mahmoud Abdallah</Text>
        <Text style={styles.item}>Ahmed Mahmoud Raghb</Text>
        <Text style={styles.item}>Amr El Sokary</Text>
        <Text style={styles.item}>Kareem El Ansary</Text>
        <Text style={styles.item}>Mohamed Ashraf</Text>
        <Text style={styles.item}>Mohamed AbdelSamee</Text>
      </View>
    );
  };

  render() {
    const {show, title, animationType, closePopup, haveOutsideTouch} =
      this.props;

    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={show}
        onRequestClose={() => {}}>
        <View style={{flex: 1, backgroundColor: '#000000AA'}}>
          <Pressable
            onPress={() => {
              if (!haveOutsideTouch) return;
              closePopup();
            }}
            style={{flex: 1}}></Pressable>

          <View
            style={{
              bottom: 0,
              position: 'absolute',
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              // height: Dimensions.get('window').height * 0.4,
              //   maxHeight: Dimensions.get('window').height * 0.4,
              height: 620,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#182E44',
                fontSize: 20,
                fontWeight: '500',
                margin: 15,
              }}>
              {title}
            </Text>
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}

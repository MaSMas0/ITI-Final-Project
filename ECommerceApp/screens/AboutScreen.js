import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../config/colors';
const AboutScreen = () => {
  return (
    // <ScrollView style={{backgroundColor:colors.white}}>
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
    // </ScrollView>
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

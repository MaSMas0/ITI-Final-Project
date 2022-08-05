import React from 'react';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';


import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import colors from '../config/colors';
const AboutScreen = () => {
  return (
      <View style={styles.container}>
        <View style={{backgroundColor:colors.grey,borderTopLeftRadius:12,
    borderBottomRightRadius:12,}}>

        <Animatable.Image  style={styles.img} source={require('../assets/cc.png')} />
        </View>
        <Text style={styles.paragraph}>
          This Application is Our Graduation Project, Try use this application
          and if you fount any problem , please Contact Us to solve it and
          improve our application.
        </Text>
        <View style={styles.sub}> 
        <Text style={styles.our}>Team <AntDesign
        name="team"
        size={18}
        ></AntDesign></Text>
        <Animatable.Text animation="fadeInLeftBig" duration={5000} iterationCount={'infinite'} style={styles.item}>Mahmoud Mahmoud Abdallah</Animatable.Text>
        <Animatable.Text animation="fadeInRightBig" duration={5000} iterationCount={'infinite'} style={styles.item}>Ahmed Mahmoud Ragheb</Animatable.Text>
        <Animatable.Text animation="fadeInLeftBig" duration={5000} iterationCount={'infinite'} style={styles.item}>Amr El Sokary</Animatable.Text>
        <Animatable.Text animation="fadeInRightBig" duration={5000} iterationCount={'infinite'} style={styles.item}>Kareem El Ansary</Animatable.Text>
        <Animatable.Text animation="fadeInLeftBig" duration={5000} iterationCount={'infinite'} style={styles.item}>Mohamed Ashraf</Animatable.Text>
        <Animatable.Text animation="fadeInRightBig" duration={5000} iterationCount={'infinite'} style={styles.item}>Mohamed AbdelSamee</Animatable.Text>
        </View>
      </View>
  );
};
export default AboutScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.white,
    height:'100%'
  },
  img: {
    width: 300,
    height: 250,
    resizeMode:'contain',
    
    
  },
  item: {
    fontSize: 14,
    padding: 5,
    color:colors.blue,
    fontWeight:'bold',
 

  },
  our: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform:'uppercase',
    margin:5,
 
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color:colors.black,
    
  },
  sub:{
    width:300,
    alignItems:'center',
    backgroundColor:colors.grey,
    marginBottom:5,
    overflow:'hidden',
    borderBottomRightRadius:12,
    borderTopLeftRadius:12
    // height:300
    
    
  }
});


import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import SlideShow from '../components/SlideShow';
import BrandCard from '../components/BrandCard';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

const Home = props => {
  return (

      
    <View style={styles.container}>
      
      <SlideShow />
      <Text style={styles.line}></Text>
      <Text style={styles.h1}>Brands</Text>
      <Text style={styles.line}></Text>

  

      <FlatList style={{ margin:5,}}
        nestedScrollEnabled
         numColumns={2}
        data={[1, 2, 3, 45, 5, 6, 7, 8, 8, 8, 8, 8, 9,9,10,10,1,1,1]}
        renderItem={(item, index) => {
          return <BrandCard />;
        }}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line:{
    width:"100%",
    height:5,
    backgroundColor:colors.lightGrey,
    // backgroundColor:"#F6F6F6",
    margin:5
  },
  h1:{
    fontSize:24,
    textTransform:'uppercase',
    letterSpacing:3,
    fontWeight:"bold",
    color:colors.black,

  }

});

export default Home;
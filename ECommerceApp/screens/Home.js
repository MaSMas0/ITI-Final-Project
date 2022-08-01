import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import SlideShow from '../components/SlideShow';
import BrandCard from '../components/BrandCard';
const Home = props => {
  return (
    <View style={styles.container}>
      <SlideShow />
      <Text>Brands</Text>

      <FlatList
        nestedScrollEnabled
        numColumns={2}
        data={[1, 2, 3, 45, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8]}
        renderItem={(item, index) => {
          return <BrandCard />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

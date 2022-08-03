import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
const SlideShow = props => {
  const carouselRef = useRef(null);
  const {width: windowWidth} = Dimensions.get('window');

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.item]}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <Image
          source={require('../assets/cover.jpg')}
          style={{width: '99.2%', height: '98.5%'}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{padding: 0}}>
      <Carousel
        ref={carouselRef}
        data={Array(6).fill(0)}
        renderItem={renderItem}
        style={styles.carousel}
        itemWidth={windowWidth * 0.92}
        containerWidth={windowWidth}
        separatorWidth={5}
        inActiveOpacity={0.2}
        initialIndex={2}
        onScrollEnd={() => {
          console.log('Ending');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  item: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});
export default SlideShow;

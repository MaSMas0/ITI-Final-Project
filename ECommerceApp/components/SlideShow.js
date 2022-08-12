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
  const images = [
    {
      id: 0,
      image: require('../assets/SlideShow/Jeans.png'),
    },
    {
      id: 1,
      image: require('../assets/SlideShow/Electronics.png'),
    },
    {
      id: 2,
      image: require('../assets/SlideShow/Shirts.png'),
    },
    {
      id: 3,
      image: require('../assets/SlideShow/Shoes.png'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.item]}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
            margin: 5,
            resizeMode: 'stretch',
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{padding: 0}}>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={renderItem}
        style={styles.carousel}
        itemWidth={windowWidth * 0.85}
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
    margin: 5,
    // marginEnd: 5,
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});
export default SlideShow;

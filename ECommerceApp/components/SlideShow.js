import React, {useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
const SlideShow = props => {
  const carouselRef = useRef(null);
  const {width: windowWidth} = Dimensions.get('window');
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const renderItem = ({item, index}) => {
    const backgroundColor = getRandomHexColor();
    return (
      <TouchableOpacity
        style={[styles.item, {backgroundColor}]}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <Text style={styles.text}>{(index + 1).toString()}</Text>
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
    borderRadius:10,
    marginLeft:20,
    marginRight:20,
 
  },
  item: {
  
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});
export default SlideShow;

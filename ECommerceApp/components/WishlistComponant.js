import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WishlistComponent = () => {
  const [like, setLike] = useState(true);
  function handelLike() {
    setLike(!like);
  }
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          padding: 10,
          borderWidth: 1,
          borderColor: '#81d4fa',
          marginBottom: 20,
          borderRadius: 40,
        }}>
        <View>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg?w=2000',
            }}
            style={{
              width: 140,
              height: 150,
              marginHorizontal: 8,
              borderRadius: 13,
            }}
          />
        </View>
        <View style={{flexShrink: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 21}}>Product Nike</Text>
            <AntDesign
              onPress={() => handelLike()}
              style={{
                marginEnd: 20,
                marginTop: 5,
              }}
              color={like ? 'red' : 'grey'}
              name="heart"
              size={25}></AntDesign>
          </View>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WishlistComponent;

import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';


export default function Like() {
    const [like, setLike] = useState(false);
    function handelLike() {
      setLike(!like);
    }
  return (
    <View>

          <AntDesign 
              onPress={() => handelLike()}
                name="heart"
                size={20}
                color={like ? colors.gold : colors.medium}
                ></AntDesign>
    </View>
  )
}

const styles = StyleSheet.create({})
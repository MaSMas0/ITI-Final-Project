import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../config/colors';

let c1;
function ThirdButton({onPress, title, style, colors}) {
  // c1 = color1;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        colors={['#FEFBF6', '#22336a']}
        style={[styles.submit, style]}>
        <Text
          style={{
            backgroundColor: colors,
            height: 35,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 14,
            borderRadius: 15,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {/* <FontAwesome name="cart-plus" size={20}></FontAwesome>  */}
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit: {
    // color: colors.lightBlue,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    borderRadius: 15,
    fontWeight: 'bold',
    color: colors.lightGrey,
    // backgroundColor: ,
  },
});

export default ThirdButton;

// import React from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
// import colors from '../config/colors';

// let c1;
// function ThirdButton({onPress, title, style, colors}) {
//   // c1 = color1;
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <LinearGradient
//         start={{x: 1, y: 0}}
//         end={{x: 0, y: 0}}
//         colors={['#FEFBF6', '#22336a']}
//         style={[styles.submit, style]}>
//         <Text
//           style={{
//             backgroundColor: colors,
//             height: 35,
//             textAlign: 'center',
//             textAlignVertical: 'center',
//             fontSize: 14,
//             borderRadius: 15,
//             fontWeight: 'bold',
//             color: 'white',
//           }}>
//           {/* <FontAwesome name="cart-plus" size={20}></FontAwesome>  */}
//           {title}
//         </Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   submit: {
//     // color: colors.lightBlue,
//     height: 35,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontSize: 14,
//     borderRadius: 15,
//     fontWeight: 'bold',
//     color: colors.lightGrey,
//     // backgroundColor: ,
//   },
// });

// export default ThirdButton;

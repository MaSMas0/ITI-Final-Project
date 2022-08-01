import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductCard() {
  return (
    <TouchableOpacity>

    <View
    style={styles.container}>
      <View style={styles.subcontainer}>
      <Text style={styles.discount}>
          10 %
        </Text>
        <Image source={require('../assets/rr.png')} style={styles.image} />
  
      </View>
        <Text style={styles.title}>name of product</Text>
        <Text style={styles.price}>Price $</Text>
      {/* <View
        style={styles.shadow}></View> */}
    </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container :{
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        
        
      },
      subcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 120,
        backgroundColor:colors.grey,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10
        
        
      },
      discount:{
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:"green",
        width:35,
        textAlign:'center',
        color:colors.white,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        fontSize:12,
        
    
      },
      image: {
        width: 80,
        height: 60,
        marginStart: 12,
      },
      title: {
        fontWeight: 'bold',
        fontSize: 14,
        alignItems:'flex-start',
        color:colors.black
     },
     price:{
    fontSize:12
     },
      shadow:{
        borderRadius: 20,
        width: 140,
        height: 5,
        elevation: 1,
        shadowColor: Colors.grey,
      }
})
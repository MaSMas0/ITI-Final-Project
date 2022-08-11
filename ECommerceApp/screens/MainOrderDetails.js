import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../config/colors'

const MainOrderDetails =() =>{
  return (
    <ScrollView style={{
        backgroundColor:colors.grey,
    }}>
    <View style={styles.container}>
            <View>

            <Text style={styles.head}>ITEMS IN YOUR ORDER </Text>
            </View>

        
        <View style={styles.item}>
            <View>
                <Image style={styles.img} source={require('../assets/cc.png')} /> 
            </View>
            <View style={styles.orderDetials}>
                <Text>Product Name</Text>
                <Text>QTY</Text>
                <Text>1000</Text>                
            </View>
        </View>
            <Text style={styles.head}>PAYMENT</Text>
        <View style={styles.paymentCard}>
            <Text style={styles.head2}>Payment Method</Text>
            <Text style={{marginHorizontal:8}}>Cash on Delivery</Text>
            <Text style={styles.line}></Text>
            <Text style={styles.head2}>Payment Detials</Text>
            <Text style={styles.head3}>Items Totals : <Text>
                135.00</Text></Text>
            <Text style={styles.head3}>Shipping Fes: <Text>
                10.00</Text></Text>
            <Text style={styles.head3}>Total : <Text>
                145.00</Text></Text>    
        </View>
            <Text style={styles.head}>DELIVERY</Text>
        <View style={styles.DeliveryOpt}>
            <Text style={styles.head2}>Delivery Option</Text> 
            <Text style={styles.head3}>Standard Door Delivery </Text>
            <Text style={styles.line}></Text>

            <Text style={styles.head2}>Shipping Address</Text>
            <Text style={styles.head3}>egypt , cairo</Text>  
        <Text style={styles.deliverd}>DELIVERD</Text>
          

        </View>
    

    </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({

    container:{
        width:'100%',
        marginVertical:8,
        // height:'100%',
        justifyContent:'space-between'
        // margin:10
    },
    item:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:colors.white,
        marginHorizontal:10,
        height:120,
        borderRadius:10
        



    },
    img:{
        width:150,
        height:100
    },
    DeliveryOpt:{
        backgroundColor:colors.white,
        height:120,
        justifyContent:'space-evenly',
        margin:10,
        borderRadius:10,

        // margin:5


    },
    paymentCard:{
        backgroundColor:colors.white,
        height:200,
        justifyContent:'space-evenly',
        margin:10,
        borderRadius:10,

        

        // padding:5


    },
    head:{
        margin:10

    },
    head2:{
        color:colors.black,
        marginHorizontal:8

    },
    head3:{
        marginHorizontal:8
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'grey',
      
    },
    deliverd:{
        backgroundColor:'#3CCF4E',
        height:25,
        width:80,
        // justifyContent:'center',
        // alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        color:colors.white,
        borderRadius:5,
        marginHorizontal:8,
        fontSize:12
      }

})

export default MainOrderDetails;

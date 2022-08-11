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

        <View style={{
            backgroundColor:colors.white,
            marginHorizontal:10,
            borderRadius:8,
            marginVertical:2

        }}>

            <Text style={styles.deliverd}>DELIVERD</Text>
            <Text style={{
                color:'black',
                margin:5,
                fontWeight:'bold'


            }}>On 7/7/2022</Text>
        </View>

        <View style={styles.item}>
            
            <View>
                <Image style={styles.img} source={require('../assets/cc.png')} /> 
            </View>
            <View style={styles.orderDetials}>
                <Text style={{
                    color:'black'
                }}>Product Name</Text>
                <Text>QTY : 1</Text>
                <Text style={{
                    color:'black'
                }}>1000</Text>                
            </View>
        </View>
        <View style={styles.item}>
            
            <View>
                <Image style={styles.img} source={require('../assets/cc.png')} /> 
            </View>
            <View style={styles.orderDetials}>
                <Text style={{
                    color:'black'
                }}>Product Name</Text>
                <Text>QTY : 1</Text>
                <Text style={{
                    color:'black'
                }}>1000</Text>                
            </View>
        </View>
            <Text style={{marginTop:20,
            marginBottom:10 ,
            marginHorizontal:10,
            fontWeight:'bold'
                }}>PAYMENT</Text>
        <View style={styles.paymentCard}>
            <Text style={styles.head2}>Payment Method</Text>
            <Text style={{marginHorizontal:8}}>Cash on Delivery</Text>
            <Text style={styles.line}></Text>
            <Text style={styles.head2}>Payment Detials</Text>
            <Text style={styles.head3}>Items Totals : <Text style={styles.head4}>
                135.00</Text></Text>
            <Text style={styles.head3}>Shipping Fees : <Text style={styles.head4}>
                10.00</Text></Text>
            <Text style={styles.head3}>Total : <Text style={styles.head4}>
                145.00</Text></Text>    
        </View>
            <Text style={styles.head}>DELIVERY</Text>
        <View style={styles.DeliveryOpt}>
            <Text style={styles.head2}>Delivery Option</Text> 
            <Text style={styles.head3}>Standard Door Delivery </Text>
            <Text style={styles.line}></Text>

            <Text style={styles.head2}>Shipping Address</Text>
            <Text style={styles.head3}>egypt , cairo</Text>  
        
          

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
        marginBottom:10,
        height:150,
        borderRadius:10
        



    },
    orderDetials:{
        marginHorizontal:5,
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        height:'100%'
    },
    img:{
        width:150,
        height:100
    },
    DeliveryOpt:{
        backgroundColor:colors.white,
        height:180,
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

    },
    head:{
        margin:10,
        fontWeight:'bold'


    },
    head2:{
        color:colors.black,
        marginHorizontal:8,
        fontWeight:'bold'

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
        margin:5,
        fontSize:12,
        fontWeight:'bold'

      },
      head4 :{
        color:colors.black
      }

})

export default MainOrderDetails;

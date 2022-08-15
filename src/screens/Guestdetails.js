import { StyleSheet, Text, View ,} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Formbutton from '../components/Formbutton'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../global/styles'
import { Divider } from "@rneui/themed";


const Guestdetails = ({navigation,route}) => {


const [userdetails,setUserdetails]=useState(route.params.data)
const [isSelected,setIsSelected]=useState(false)

const user=JSON.parse(localStorage.getItem('user'))

useEffect(()=>{
  //  console.log('details data',route.params.data)
   setUserdetails(route.params.data)
},[])

useEffect(()=>{
 
// console.log('dataaaaaaaa',userdetails)
},[setUserdetails])



  return (
    <>
    <View>
   <Header  type='chevron-left'  title='Details' navigation={navigation} />
   </View>
  
    <ScrollView style={{backgroundColor:'white',paddingTop:10,backgroundColor:'white'}}>
    <View style={{padding:10,marginHorizontal:10,paddingVertical:10}}>
    <Text style={{fontSize:20,color:colors.lightBlue}}>GuestDetails</Text>
    </View>
    <View style={{padding:10,marginHorizontal:5,paddingVertical:10}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
    <Text style={{color:colors.grey3,fontSize:16}}>Guest Name</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.guestname}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:colors.grey3,fontSize:16}}>Contact No</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.guestcontactno}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:colors.grey3,fontSize:16}}>R.M</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.rm}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:colors.grey3,fontSize:16}}>Payment Status</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.payment_status}</Text>
    </View>
    <Divider width={2} style={{marginTop:10}}/>


    </View>
    <View style={{padding:10,marginHorizontal:10}}>
    <Text style={{fontSize:20,color:colors.lightBlue}}>BookingDetails</Text>
    </View>


<View style={{padding:10,marginHorizontal:5}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
<Text style={{color:colors.grey3,fontSize:16}}>Starting Time</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.startingtime}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Pick up Time</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.pickuptime}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Pick up Point</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.pickuppoint}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Service Type</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.servicetype}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Tour Program</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.tourprogram}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Flight Code</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.flightcode}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Drop off Point</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.dropoffpoint}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Flight Time</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.flighttime}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Flight Arrival At</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.flightarrivalat}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Note</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.note}</Text>
</View>
<Divider width={2} style={{marginTop:10}}/>


<View style={{marginTop:20}}>
<Text style={{fontSize:20,color:colors.lightBlue}}>Booking Reference</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Bill to</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{userdetails.billto}</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate('GarageReading',{datas:userdetails})} style={{marginTop:50,marginBottom:100}}>
    <Formbutton buttonTitle='Start'/>
    </TouchableOpacity>
    </View>
</ScrollView>
   </>

   
  )
}

export default Guestdetails

const styles = StyleSheet.create({})

//<Text>{userdetails.guestname}</Text>
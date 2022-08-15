import { StyleSheet, Text, View ,FlatList,ActivityIndicator} from 'react-native'
import React , {useState,useEffect} from  'react'
import Header from '../components/Header'
import Formbutton from '../components/Formbutton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'
import axios from 'axios'
import { Divider } from "@rneui/themed";
import {  Card, Title, Paragraph } from 'react-native-paper';

const ExpenseReport = ({navigation}) => {

  const BadgeIcon = withBadge()(Icon)

  const items=JSON.parse(localStorage.getItem('items'))


  const [data,setData]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [disabled,setDisabled]=useState(false)

useEffect((
  getUser
),[])

async function getUser() {
  try {
    const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/expenses?driverid=${items.driverid}`)
    // console.log('eseseseseseses',response.data);
    setData({data:response.data.expenses})
    setIsLoading(false)
  } catch (error) {
    console.error(error);
  }
}



if(isLoading){
  return(
    <View style={styles.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E"/>
    </View>
  )
}    


  return (
    <>
    <View style ={styles.header}>

    <View style ={{alignItems:"center",justifyContent:'center', marginLeft:15}}>
        <Icon 
            type = "material-community"
            name = "chevron-left"
            color = {colors.cardbackground}
            size = {32}
            onPress ={()=>{
                navigation.goBack()
            }}

        />
    </View>

     <View style ={{}}>
        <Text style ={{color:colors.cardbackground, fontSize:20,fontWeight:'bold', }}>Expenses</Text>
    </View> 

    <View style ={{marginRight:15}}>
        <BadgeIcon 
            type ="material-community"
            name ="plus"
            size = {32}
            color ={colors.cardbackground}
            onPress={()=>{navigation.navigate('AddExpenses')}}
        />
</View>


</View>
<FlatList
    data={data.data}
    keyExtractor={item => item.id}
  
    renderItem={({item})=>(
     <>
     <Card style={{elevation:2,marginHorizontal:10,marginTop:10,height:200}}>
     <Card.Content>
      <View style={{padding:5,}}>
      <Text style={{fontSize:16,padding:5}}> {item.reservationid}</Text>
      <Text style={{fontSize:16,padding:5}}> {item.expensetype}</Text>
      <Text style={{fontSize:16,padding:5}}> {item.expensedate}</Text>
      <Text style={{fontSize:16,padding:5}}> {item.amount}</Text>
      <Text style={{fontSize:16,padding:5}}> {item.expensetime}</Text>
      <Text style={{fontSize:16,padding:5}}> {item.meterreading}</Text>
      </View>
      </Card.Content>
      </Card>
     
      </>
    )}
    
    />
   
</>
  )
}

export default ExpenseReport

const styles = StyleSheet.create({

  header:{
      flexDirection:'row',
      backgroundColor:'#24ada2',
     height:60,
      justifyContent:'space-between',
      marginTop:20,
      alignItems:'center'
  }, 
   preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


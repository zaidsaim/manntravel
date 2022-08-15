import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import RestaurantMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import ForgotPassword from '../screens/ForgotPassword'
import MyBooking from '../screens/MyBooking';
import Guestdetails from '../screens/Guestdetails';
import JobUpdated from '../screens/JobUpdated';
import PickupReading from '../screens/PickupReading';
import HomeScreen from '../screens/HomeScreen';
import ClientTabs from '../navigation/ClientTabs'
import PickupConfirm from '../screens/PickupConfirm';
import BookingUpdated from '../screens/BookingUpdated';
import DropPoint from '../screens/DropPoint';
import CompleteRide from '../screens/CompleteRide';
import ExpenseReports from '../screens/ExpenseReports';
import Support from '../screens/Support';
import ChangePassword from '../screens/ChangePassword';
import AddExpenses from '../screens/AddExpenses';
import AddExpensesScreen from '../screens/AddEspensesScreen'
import RequestPending from '../screens/RequestPending';
import SignInScreen from '../screens/authScreens/SignInScreen';
import DriwerDetails from '../screens/DriwerDetails';
import GarageReading from '../screens/GarageReading';
import Feedback from '../screens/Feedback';
import MyRides from '../screens/MyRides';
import OnBoarding from '../screens/OnBoarding';
import RatingScreen from '../screens/RatingScreen'
import MyBookingScreen from '../screens/MyBookingScreen';
const App = createStackNavigator();

export function AppStack(){
//DrawerNavigator
return(
<App.Navigator>
{/*<App.Screen 
name ="OnBoarding"
component ={OnBoarding}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/> 
<App.Screen 
name ="SignInScreen"
component ={SignInScreen}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/> */}
 <App.Screen 
 name ="App"
 component ={DrawerNavigator}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
name ="SignInScreen"
component ={SignInScreen}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/> 
<App.Screen 
 name ="ForgotPassword"
 component = {ForgotPassword}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="MyBookingScreen"
 component = {MyBookingScreen}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="MyBooking"
 component = {MyBooking}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="Guestdetails"
 component = {Guestdetails}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="GarageReading"
 component = {GarageReading}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="RatingScreen"
 component = {RatingScreen}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="JobUpdated"
 component = {JobUpdated}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="PickupReading"
 component = {PickupReading}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="PickupConfirm"
 component = {PickupConfirm}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="BookingUpdated"
 component = {BookingUpdated}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="DropPoint"
 component = {DropPoint}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="CompleteRide"
 component = {CompleteRide}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="ExpenseReports"
 component = {ExpenseReports}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="Support"
 component = {Support}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="ChangePassword"
 component = {ChangePassword}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="AddExpenses"
 component = {AddExpenses}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/>
<App.Screen 
 name ="AddExpensesScreen"
 component = {AddExpensesScreen}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="RequestPending"
 component = {RequestPending}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="HomeScreen"
 component = {HomeScreen}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="DriwerDetails"
 component = {DriwerDetails}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 

<App.Screen 
 name ="Feedback"
 component = {Feedback}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<App.Screen 
 name ="MyRides"
 component = {MyRides}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
</App.Navigator>
)
}

import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { AuthStack } from './authStack';
import { AppStack } from './appStack';
import { SignInContext } from '../contexts/authContext';
import 'localstorage-polyfill'


export default function RootNavigator(){

const {signedIn} = useContext(SignInContext)

const items=JSON.parse(localStorage.getItem('items'))

    return(
    <NavigationContainer>
   
        {items?.driverid === null  ?  <AuthStack />: <AppStack />}

    </NavigationContainer>
    )
}

//  {signedIn.response === null  ?  <AuthStack />: <AppStack />}
{/*  {items?.driverid === null  ?  <AuthStack />: <AppStack />}*/}
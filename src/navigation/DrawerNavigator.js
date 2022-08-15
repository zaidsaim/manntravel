import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';

import {Icon} from 'react-native-elements';
import {colors} from "../global/styles";
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';
import MyBooking from '../screens/MyBooking';
import ExpenseReports from '../screens/ExpenseReports'
import MyBookingScreen from '../screens/MyBookingScreen';
import { AppStack } from './appStack';
const Drawer = createDrawerNavigator()


export default function DrawerNavigator(){

    return(
        <Drawer.Navigator
        useLegacyImplementation
                drawerContent  = {props =><DrawerContent {...props} /> }
            >

            <Drawer.Screen 
                name = "MyBookingScreen"
                component ={MyBookingScreen}

                options = {{
                    title:'Client',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material-community"
                            name = "home"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />


       


           

        </Drawer.Navigator>
    )

}






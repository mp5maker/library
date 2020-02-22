import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

/* Screens */
import { EmployeeStack } from './EmployeeStack'
import { CompanyStack } from './CompanyStack'


interface RoutesPropsInterface {}
interface RoutesStateInterface {}

const Drawer = createDrawerNavigator()

export class Routes extends React.Component<RoutesPropsInterface, RoutesStateInterface> {
    constructor(props: RoutesPropsInterface) {
        super(props)
    }

    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName={`Employee`}>
                    <Drawer.Screen
                        name="Employee"
                        component={EmployeeStack} />
                    <Drawer.Screen
                        name="Company"
                        component={CompanyStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

/* Screens */
import { EmployeeStack } from './EmployeeStack'
import { CompanyStack } from './CompanyStack'


/* Component */
import { Drawer as CustomDrawer } from '../components/Drawer'

/* Styles */
import { Colors } from '../styles/Colors';

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
                <Drawer.Navigator
                    drawerContent={(props) => {
                        return (
                            <CustomDrawer {...props} />
                        )
                    }}
                    drawerStyle={styles.drawer}
                    initialRouteName={`Employee`}>
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

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: Colors.khaki
    }
})
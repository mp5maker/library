import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from  '@react-navigation/stack'

import { Employee, EmployeeDetails } from '../../screens'

const Stack = createStackNavigator()

interface EmployeeStackPropsInterface {}
interface EmployeeStackStateInterface {}

export class EmployeeStack extends React.Component<EmployeeStackPropsInterface, EmployeeStackStateInterface> {
    constructor(props: EmployeeStackPropsInterface) {
        super(props)
    }

    render() {

        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode={`none`}
                    initialRouteName={`Employee`}>
                    <Stack.Screen
                        name="Employee"
                        component={Employee} />
                    <Stack.Screen
                        name="EmployeeDetails"
                        component={EmployeeDetails}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
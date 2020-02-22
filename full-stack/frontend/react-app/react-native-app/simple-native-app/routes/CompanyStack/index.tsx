import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Company, CompanyDetails } from '../../screens'

const Stack = createStackNavigator()

interface CompanyStackPropsInterface {}
interface CompanyStackStateInterface {}

export class CompanyStack extends React.Component<CompanyStackPropsInterface, CompanyStackStateInterface> {
    constructor(props: CompanyStackPropsInterface) {
        super(props)
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={`none`}>
                    <Stack.Screen
                        name="Company"
                        component={Company} />
                    <Stack.Screen
                        name="CompanyDetails"
                        component={CompanyDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
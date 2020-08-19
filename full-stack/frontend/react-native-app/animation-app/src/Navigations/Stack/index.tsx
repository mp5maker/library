import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'

import { HomeScreen } from 'Native/Screens/Home'
import { HomeDetailsScreen } from 'Native/Screens/Home/Details'

const Stack = createStackNavigator()

export const HomeStackNavigator = () => {
    const { t } = useTranslation()

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ title: t(`HOME`) }}
                name="Home"
                component={HomeScreen} />
            <Stack.Screen
                options={{ title: t(`HOME_DETAILS`) }}
                name="HomeDetails"
                component={HomeDetailsScreen} />
        </Stack.Navigator>
    )
}
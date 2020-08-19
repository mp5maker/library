import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'

import * as Routes from 'Native/Constants/Routes'
import { HomeScreen } from 'Native/Screens/Home'
import { HeartOfTheMatterScreen } from 'Native/Screens/Home/HeartOfTheMatter'
import { TransitionScreen } from 'Native/Screens/Home/Transition'

const Stack = createStackNavigator()

export const HomeStackNavigator = () => {
    const { t } = useTranslation()

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ title: t(`HOME`) }}
                name={Routes.Home.state}
                component={HomeScreen} />
            <Stack.Screen
                options={{ title: t(`HEART_OF_THE_MATTER`) }}
                name={Routes.HeartOfTheMatter.state}
                component={HeartOfTheMatterScreen} />
            <Stack.Screen
                options={{ title: t(`TRANSITION`) }}
                name={Routes.Transition.state}
                component={TransitionScreen} />
        </Stack.Navigator>
    )
}
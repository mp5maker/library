import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'

import * as Routes from 'Native/Constants/Routes'
import { HomeScreen } from 'Native/Screens/Home'
import { ComeToMeScreen } from 'Native/Screens/Home/ComeToMe'
import { WalletScreen } from 'Native/Screens/Home/Wallet'
import { CarouselScreen } from 'Native/Screens/Home/Carousel'

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
                options={{ title: t(`COME_TO_ME`) }}
                name={Routes.ComeToMe.state}
                component={ComeToMeScreen} />
            <Stack.Screen
                options={{ title: t(`WALLET`) }}
                name={Routes.Wallet.state}
                component={WalletScreen} />
            <Stack.Screen
                options={{ title: t(`CAROUSEL`) }}
                name={Routes.Carousel.state}
                component={CarouselScreen} />
        </Stack.Navigator>
    )
}
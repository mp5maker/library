import * as React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import * as Routes from 'Native/Constants/Routes'

export const HomeScreen = ({ navigation }: any) => {
    const { t } = useTranslation()

    return (
        <View style={styles.mainContainer}>
            <View style={styles.list}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Routes.ComeToMe.state)}
                    style={styles.item}>
                    <Text>
                        { t(`COME_TO_ME`) }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Routes.Wallet.state)}
                    style={styles.item}>
                    <Text>
                        { t(`WALLET`) }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Routes.Carousel.state)}
                    style={styles.item}>
                    <Text>
                        { t(`CAROUSEL`) }
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: `center`,
        justifyContent: `center`
    },
    list: {
        display: `flex`,
        justifyContent: `flex-start`,
        alignItems: `flex-start`
    },
    item: {
        width: `90%`,
        height: 25,
        padding: 2,
        margin: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});

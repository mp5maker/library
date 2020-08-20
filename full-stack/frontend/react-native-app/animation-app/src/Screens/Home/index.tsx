import * as React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'
import { useTranslation } from 'react-i18next'

import * as Routes from 'Native/Constants/Routes'
import { Colors } from 'Native/Constants/Colors'

const width = Dimensions.get('screen').width
const WIDTH = width * 0.94
const HEIGHT = WIDTH * 0.2

export const HomeScreen = ({ navigation }: any) => {
    const { t } = useTranslation()

    return (
        <View style={styles.mainContainer}>
            <View style={styles.list}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate(Routes.ComeToMe.state)}>
                    <Text style={styles.itemText}>
                        { t(`COME_TO_ME`) }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate(Routes.Wallet.state)}>
                    <Text style={styles.itemText}>
                        { t(`WALLET`) }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate(Routes.Carousel.state)}>
                    <Text style={styles.itemText}>
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
        alignItems: `flex-start`,
        justifyContent: `flex-start`
    },
    list: {
        display: `flex`,
        justifyContent: `flex-start`,
        alignItems: `flex-start`,
    },
    item: {
        width: WIDTH,
        height: HEIGHT,
        padding: 12,
        margin: 12,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: Colors.light.backgroundColor,
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: Colors.light.boxShadowSmallColor,
        shadowOpacity: 1,
        elevation: 3,
    },
    itemText: {
        color: Colors.light.primaryColor
    }
});

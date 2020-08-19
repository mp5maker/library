import * as React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import { HeartOfTheMatter } from 'Native/Constants/Routes'

export const HomeScreen = ({ navigation }: any) => {
    const { t } = useTranslation()

    return (
        <View style={styles.mainContainer}>
            <View style={styles.list}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(HeartOfTheMatter.state)}
                    style={styles.item}>
                    <Text>
                        { t(`HEART_OF_THE_MATTER`) }
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
        width: 90,
        height: 25
    }
});

import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { HeartOfTheMatter } from 'Native/Layouts/HeartOfTheMatter'

export const HeartOfTheMatterScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <HeartOfTheMatter />
        </View>
    )
}

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: `center`,
        justifyContent: `center`
    },
});

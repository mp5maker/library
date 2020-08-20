import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { ComeToMe } from 'Native/Layouts/ComeToMe'

export const ComeToMeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <ComeToMe />
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

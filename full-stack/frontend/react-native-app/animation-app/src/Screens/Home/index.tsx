import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>
                Home Screen
            </Text>
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

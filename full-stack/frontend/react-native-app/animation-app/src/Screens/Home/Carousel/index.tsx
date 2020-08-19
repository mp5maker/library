import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { Carousel } from 'Native/Layouts/Carousel'

export const CarouselScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Carousel />
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

import * as React from 'react'
import { Animated, Text, View, Easing, StyleSheet } from 'react-native'

export const Carousel = ({ list = [], display }: any) => {
    return (
        <View
            style={styles.container}>
            <Animated.View
                style={styles.list}>
                {
                    list.map((item: any, index: number) => {
                        return (
                            <View
                                style={styles.item}
                                key={index}>
                                { display({ item }) }
                            </View>
                        )
                    })
                }
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: `flex`,
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`
    },
    list: {

    },
    item: {

    }
})
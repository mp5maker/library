import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { usePanGestureHandler, withOffset } from 'react-native-redash'
import { PanGestureHandler } from 'react-native-gesture-handler'

import { Colors } from 'Native/Constants/Colors'

export const ComeToMe = () => {
    const { gestureHandler, translation, state } = usePanGestureHandler()
    const translateX  = withOffset(translation.x, state)
    const translateY = withOffset(translation.y, state)

    return (
        <View style={styles.container}>
            <PanGestureHandler {...gestureHandler}>
                <Animated.View
                    style={[
                        styles.ball,
                        {
                            transform: [
                                { translateX }, { translateY }
                            ]
                        }
                    ]}>
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`
    },
    ball: {
        backgroundColor: Colors.light.primaryColor,
        height: 100,
        width: 100,
        borderRadius: 50
    }
})
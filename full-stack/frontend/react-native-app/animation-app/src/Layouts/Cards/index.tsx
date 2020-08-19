import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { useTransition, mix } from 'react-native-redash'

const alpha = Math.PI / 6

const randomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const CARD_WIDTH = 299

export const Cards = ({ list = [], allowRotation = false, pivotCenter = false }: any) => {
    const transition = useTransition(allowRotation, { duration: 400 })

    return (
        <>
            <View
                style={[
                    styles.container,
                ]}>
                {
                    list.map((item: any, index: number) => {
                        // const rotate = Animated.interpolate(transition, {
                        //     inputRange: [0, 1],
                            // outputRange: [0, (index - 1) * alpha]
                        // })
                        const rotate = mix(transition, 0, (index - 1) * alpha)
                        const zIndex = 2 - index

                        return (
                            <Animated.View
                                style={[
                                    styles.item,
                                    {
                                        transform: [
                                            { rotate }
                                        ]
                                    },
                                    { ...(pivotCenter ? {
                                        borderColor: randomColor(),
                                        backgroundColor: randomColor(),
                                        position: `absolute`,
                                        top: 0,
                                        left: 0,
                                        zIndex
                                    } : {} )}
                                ]}
                                key={index}>
                                <Text>
                                    { item }
                                </Text>
                            </Animated.View>
                        )
                    })
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: `flex`,
        justifyContent: `flex-start`,
        alignItems: `flex-start`
    },
    item: {
        padding: 12,
        width: CARD_WIDTH,
        height: 200,
        borderWidth: 1,
        borderColor: `lightgrey`,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 12,
        borderRadius: 5,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
    }
})
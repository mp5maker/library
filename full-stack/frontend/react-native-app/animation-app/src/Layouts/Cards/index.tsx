import * as React from 'react'
import { View, StyleSheet, Animated } from 'react-native'

const alpha = Math.PI / 6

export const Cards = ({
    list = [],
    allowRotation = false,
    pivotCenter = false,
    display
}: any) => {
    const animationValue = React.useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        Animated.timing(animationValue, {
            toValue: allowRotation ? 1 : 0,
            useNativeDriver: true
        }).start()
    }, [allowRotation])

    return (
        <>
            <View
                style={[
                    styles.container,
                ]}>
                {
                    list.map((item: any, index: number) => {
                        const rotate = animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, (index - 1) * alpha]
                        })
                        const zIndex = list.length - index

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
                                        position: `absolute`,
                                        top: 0,
                                        left: 0,
                                        zIndex
                                    } : {} )}
                                ]}
                                key={index}>
                                { display({ item, index }) }
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
        height: 200,
        borderRadius: 5,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
    }
})
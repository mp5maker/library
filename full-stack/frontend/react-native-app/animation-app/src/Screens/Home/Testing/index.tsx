import * as React from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native'
import { useTranslation } from 'react-i18next'

export const TestingScreen = () => {
    const { t } = useTranslation()
    const value = React.useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
    const translate = React.useRef(new Animated.Value(0)).current
    const [nativeDriver, setNativeDriver] = React.useState(false)

    const moveTimingBall = () => {
        /* Linear */
        setNativeDriver(false)
        Animated.timing(value, {
            toValue: { x: 100, y: 100 },
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    const moveSpringBall = () => {
        /* Spring */
        setNativeDriver(false)
        Animated.spring(value, {
            toValue: { x: 100, y: 100 },
            useNativeDriver: false
        }).start()
    }

    const moveEaseBall = () => {
        /* Ease */
        setNativeDriver(true)
        Animated.timing(translate, {
            toValue: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.elastic(1)),
            useNativeDriver: true
        }).start()
    }

    const translated = translate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    });

    return (
        <View style={styles.mainContainer}>
            <Animated.View
                style={[
                    { ...(!nativeDriver ? value.getLayout() : {} )},
                    { ...(nativeDriver ? {
                        transform: [
                            { translateX: translated },
                            { translateY: translated }
                        ]

                    } : {})}
                ]}>
                <View style={[
                    styles.ball,
                ]} />
            </Animated.View>
            <TouchableOpacity
                style={styles.button}
                onPress={moveTimingBall}>
                <Text>
                    { t(`TIMING_ANIMATION`) }
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={moveSpringBall}>
                <Text>
                    { t(`SPRING_ANIMATION`) }
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={moveEaseBall}>
                <Text>
                    { t(`EASE_IN_OUT`) }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: `flex-start`,
        justifyContent: `flex-start`
    },
    ball: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: `red`
    },
    button: {
        borderWidth: 1,
        borderColor: `lightgrey`,
        padding: 12,
        margin: 12
    }
});

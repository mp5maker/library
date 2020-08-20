import * as React from 'react'
import { Animated, View, Text, FlatList, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { FlingGestureHandler, State, Directions } from 'react-native-gesture-handler'

const width = Dimensions.get('screen').width
const WIDTH = width * 0.8
const HEIGHT = WIDTH * 1.2

export const FlatListAnimation = ({
    list = [],
    display,
    defaultCurrentIndex = 0,
    horizontal = true
}: any) => {
    const [currentIndex, setCurrentIndex] = React.useState(defaultCurrentIndex)
    const animationValue = React.useRef(new Animated.Value(0)).current

    const setActiveIndex = React.useCallback((activeIndex) => {
        setCurrentIndex(activeIndex)
    }, [currentIndex])

    const onFlingRight = (event: any) => {
        if (event.nativeEvent.state === State.END) {
            if (currentIndex !== 0) setActiveIndex(currentIndex - 1)
        }
    }

    const onFlingLeft = (event: any) => {
        if (event.nativeEvent.state === State.END) {
            if (currentIndex !== list.length - 1) setActiveIndex(currentIndex + 1)
        }
    }

    React.useEffect(() => {
        Animated.spring(animationValue, {
            toValue: currentIndex,
            useNativeDriver: true
        }).start()
    }, [currentIndex])

    return (
        <FlingGestureHandler
            key={`left`}
            onHandlerStateChange={onFlingLeft}
            direction={Directions.LEFT}>
            <FlingGestureHandler
                key={`right`}
                onHandlerStateChange={onFlingRight}
                direction={Directions.RIGHT}>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={list}
                        keyExtractor={(_, index) => String(index)}
                        contentContainerStyle={styles.list}
                        removeClippedSubviews={true}
                        scrollEnabled={false}
                        CellRendererComponent={({
                            item,
                            index,
                            children,
                            style,
                            ...props
                        }) => {
                            const newStyle = [style, { zIndex: list.length - index }]
                            return (
                                <View style={newStyle} index={index} {...props}>
                                    {children}
                                </View>
                            )
                        }}
                        horizontal={horizontal}
                        renderItem={({ item, index }) => {
                            const inputRange = [index - 1, index, index + 1]

                            const translateX = animationValue.interpolate({
                                inputRange,
                                outputRange: [50, 0, -100]
                            })

                            const opacity = animationValue.interpolate({
                                inputRange,
                                outputRange: [1 - (1 / list.length), 1, 0]
                            })

                            const scale = animationValue.interpolate({
                                inputRange,
                                outputRange: [0.8, 1, 1.3]
                            })

                            return (
                                <Animated.View
                                    style={[
                                        styles.item,
                                        {
                                            opacity,
                                            transform: [ { translateX }, { scale }]
                                        },
                                    ]}>
                                    { display({ item, index }) }
                                </Animated.View>
                            )
                        }} />
                </SafeAreaView>
            </FlingGestureHandler>
        </FlingGestureHandler>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: `center`
    },
    list: {
        flex: 1,
        justifyContent: `center`
    },
    item: {
        position: 'absolute',
        left: -WIDTH / 2,
        width: WIDTH,
        height: HEIGHT
    }
})
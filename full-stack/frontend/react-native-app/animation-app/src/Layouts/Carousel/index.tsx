import * as React from 'react'
import { Animated, Text, View, Easing, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native'
import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler'

const { width } = Dimensions.get('screen')
const OVERFLOW_HEIGHT = 70
const SPACING = 10
const ITEM_WIDTH = width * 0.7
const ITEM_HEIGHT = ITEM_WIDTH * 1.7
const VISIBLE_ITEMS = 3

export const Carousel = ({ list = [], display }: any) => {
    const scrollXAnimated = React.useRef(new Animated.Value(0)).current
    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
        Animated.spring(scrollXAnimated, {
            toValue: currentIndex,
            useNativeDriver: true
        }).start()
    }, [currentIndex])

    return (
        <FlingGestureHandler
            key={`left`}
            direction={Directions.LEFT}
            onHandlerStateChange={(event) => {
                if (event.nativeEvent.state == State.END) {
                    if (currentIndex !== list.length - 1) setCurrentIndex(currentIndex + 1)
                }
            }}>
            <FlingGestureHandler
                key='right'
                direction={Directions.RIGHT}
                onHandlerStateChange={(ev) => {
                    if (ev.nativeEvent.state === State.END) {
                        if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
                    }
                }}>
                <SafeAreaView
                    style={styles.container}>
                    <FlatList
                        horizontal
                        inverted
                        data={list}
                        scrollEnabled={false}
                        removeClippedSubviews={false}
                        contentContainerStyle={styles.list}
                        keyExtractor={(_, index) => String(index)}
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
                                    { children }
                                </View>
                            )
                        }}
                        renderItem={({ item, index }) => {
                            const inputRange = [index - 1, index, index + 1];
                            const translateX = scrollXAnimated.interpolate({
                                inputRange,
                                outputRange: [50, 0, -100],
                            });
                            const scale = scrollXAnimated.interpolate({
                                inputRange,
                                outputRange: [0.8, 1, 1.3],
                            });
                            const opacity = scrollXAnimated.interpolate({
                                inputRange,
                                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
                            });

                            return (
                                <Animated.View
                                    style={[
                                        styles.item,
                                        {
                                            opacity,
                                            transform: [
                                                { translateX },
                                                { scale }
                                            ]
                                        }
                                    ]}>
                                    { display({ item }) }
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
        flex: 1,
        justifyContent: 'center',
        padding: SPACING * 2,
        marginTop: 50,
    },
    list: {
        flex: 1,
        justifyContent: `center`,
        padding: SPACING * 2,
    },
    item: {
        position: 'absolute',
        left: -ITEM_WIDTH / 2,
    }
})
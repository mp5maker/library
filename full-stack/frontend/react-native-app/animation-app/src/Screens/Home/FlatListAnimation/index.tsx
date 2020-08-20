import * as React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import get from 'lodash/get'

import { Posters } from 'Native/Data/Posters'
import { FlatListAnimation } from 'Native/Layouts/FlatListAnimation'

const width = Dimensions.get('screen').width
const IMAGE_WIDTH = width * 0.7
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.2

export const FlatListAnimationScreen = () => {
    return (
        <>
            <FlatListAnimation
                display={({ item, index }: any) => {
                    const poster = get(item, 'poster', '')
                    const title = get(item, 'title', '')
                    const location = get(item, 'location', '')
                    const date = get(item, 'date', '')

                    return (
                        <View>
                            <View>
                                <Image
                                    style={{
                                        width: IMAGE_WIDTH,
                                        height: IMAGE_HEIGHT
                                    }}
                                    source={{ uri: poster }} />
                            </View>
                            <View>
                                <Text>
                                    { title }
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    { location }
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    { date }
                                </Text>
                            </View>
                        </View>
                    )
                }}
                list={Posters} />
        </>
    )
}

export const styles = StyleSheet.create({});

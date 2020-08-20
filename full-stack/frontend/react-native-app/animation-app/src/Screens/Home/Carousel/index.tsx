import * as React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import get from 'lodash/get'
import { EvilIcons } from '@expo/vector-icons';

import { Posters } from 'Native/Data/Posters'
import { Carousel } from 'Native/Layouts/Carousel'

const width = Dimensions.get('screen').width
const IMAGE_WIDTH = width * 0.7
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.2

export const CarouselScreen = () => {
    return (
        <>
            <Carousel
                display={({ item, index }: any) => {
                    const poster = get(item, 'poster', '')
                    return (
                        <Image
                            style={{
                                width: IMAGE_WIDTH,
                                height: IMAGE_HEIGHT
                            }}
                            source={{ uri: poster }} />
                    )
                }}
                overflowDisplay={({ item, index }: any) => {
                    const title = get(item, 'title', '')
                    const location = get(item, 'location', '')
                    const date = get(item, 'date', '')

                    return (
                        <View>
                            <Text style={[styles.title]} numberOfLines={1}>
                                {title}
                            </Text>
                            <View style={styles.itemContainerRow}>
                                <Text style={[styles.location]}>
                                    <EvilIcons
                                        name='location'
                                        size={16}
                                        color='black'
                                        style={{ marginRight: 5 }}
                                    />
                                    {location}
                                </Text>
                                <Text style={[styles.date]}>
                                    {date}
                                </Text>
                            </View>
                        </View>
                    )
                }}
                list={Posters} />
        </>
    )
}

export const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -1,
    },
    location: {
        fontSize: 16,
    },
    date: {
        fontSize: 12,
    },
    itemContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

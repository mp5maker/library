import * as React from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import get from 'lodash/get'

import { Carousel } from 'Native/Layouts/Carousel'
import { Posters } from 'Native/Data/Posters'

const { width } = Dimensions.get('screen')
const OVERFLOW_HEIGHT = 70
const SPACING = 10
const ITEM_WIDTH = width * 0.7
const ITEM_HEIGHT = ITEM_WIDTH * 1.7


export const CarouselScreen = () => {
    return (
        <Carousel
            list={Posters}
            display={({ item }: any) => {
                const poster = get(item, 'poster', '')

                return (
                    <>
                        <Image
                            style={{
                                width: ITEM_WIDTH,
                                height: ITEM_HEIGHT,
                                borderRadius: 14
                            }}
                            source={{ uri: poster }} />
                    </>
                )
            }} />
    )
}

export const styles = StyleSheet.create({});

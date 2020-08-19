import * as React from 'react'
import { Animated, Text, View, Easing, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native'

const { width } = Dimensions.get('screen')
const OVERFLOW_HEIGHT = 70
const SPACING = 10
const ITEM_WIDTH = width * 0.8
const ITEM_HEIGHT = ITEM_WIDTH * 1.7

const defaultList = [
    {
        title: 'Afro vibes',
        location: 'Mumbai, India',
        date: 'Nov 17th, 2020',
        poster:
            'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
    },
    {
        title: 'Jungle Party',
        location: 'Unknown',
        date: 'Sept 3rd, 2020',
        poster:
            'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
    },
    {
        title: '4th Of July',
        location: 'New York, USA',
        date: 'Oct 11th, 2020',
        poster:
            'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
    },
    {
        title: 'Summer festival',
        location: 'Bucharest, Romania',
        date: 'Aug 17th, 2020',
        poster:
            'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
    },
    {
        title: 'BBQ with friends',
        location: 'Prague, Czech Republic',
        date: 'Sept 11th, 2020',
        poster:
            'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
    },
    {
        title: 'Festival music',
        location: 'Berlin, Germany',
        date: 'Apr 21th, 2021',
        poster:
            'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
    },
    {
        title: 'Beach House',
        location: 'Liboa, Portugal',
        date: 'Aug 12th, 2020',
        poster:
            'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
    },
];

export const Carousel = ({ list = defaultList, display }: any) => {
    return (
        <SafeAreaView
            style={styles.container}>
            <FlatList
                horizontal
                inverted
                data={list}
                contentContainerStyle={styles.list}
                keyExtractor={(_, index) => String(index)}
                CellRendererComponent={({
                    item,
                    index,
                    children,
                    style,
                    ...props
                }) => {
                    const newStyle = [
                        style,
                        { zIndex: list.length - index }
                    ]

                    return (
                        <View style={newStyle} index={index} {...props}>
                            { children }
                        </View>
                    )
                }}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={styles.item}>
                            { display({ item }) }
                        </View>
                    )
                }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: `center`,
        backgroundColor: '#fff',
    },
    list: {
        flex: 1,
        justifyContent: `center`,
        padding: SPACING * 2,
    },
    item: {
        position: `absolute`,
        left: -ITEM_WIDTH / 2,
        margin: 12,
        padding: 12,
    }
})
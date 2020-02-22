import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

/* Styles */
import { Colors } from '../../styles/Colors'

interface CardCollectionPropsInterface {
    list: Array<any>,
    onDelete: (params: any) => any,
    onEdit: (params: any) => any,
    itemLayout: (params: any) => any,
}

interface CardCollectionStateInterface {}

export class CardCollection extends React.Component<CardCollectionPropsInterface, CardCollectionStateInterface> {
    static defaultProps: any

    constructor(props: CardCollectionPropsInterface) {
        super(props)
    }

    render() {
        const {
            list,
            itemLayout
        } = this.props

        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item: any) => item.alias}
                    renderItem={itemLayout ? itemLayout : ({ item }) => {
                        <Text>
                            { item.name }
                        </Text>
                    }}
                    data={list} />
            </View>
        )
    }
}

CardCollection.defaultProps = {
    list: []
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.khaki,
        paddingLeft: 8,
        paddingRight: 8,
    },
})
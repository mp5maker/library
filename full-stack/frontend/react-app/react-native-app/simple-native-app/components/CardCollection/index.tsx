import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import get from 'lodash/get'

/* Styles */
import { Colors } from '../../styles/Colors'

interface CardCollectionPropsInterface {
    list: Array<any>,
    onDelete?: (params: any) => any,
    onEdit?: (params: any) => any,
    itemLayout?: (params: any) => any,
    path?: string,
    numColumns?: number
}

interface CardCollectionStateInterface {}

export class CardCollection extends React.Component<CardCollectionPropsInterface, CardCollectionStateInterface> {
    static defaultProps: any
    static propTypes: any

    constructor(props: CardCollectionPropsInterface) {
        super(props)
    }

    render() {
        const {
            list,
            itemLayout,
            path,
            numColumns
        } = this.props

        const otherProps = {
            ...(numColumns ? { numColumns } : {})
        }

        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item: any) => item.alias}
                    renderItem={itemLayout ? itemLayout : ({ item }) => {
                        <Text>
                            { get(item, path, '') }
                        </Text>
                    }}
                    data={list}
                    { ...otherProps }/>
            </View>
        )
    }
}

CardCollection.defaultProps = {
    list: []
}

CardCollection.propTypes = {
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    itemLayout: PropTypes.func,
    path: PropTypes.string,
    numColumns: PropTypes.number
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.khaki,
        paddingLeft: 8,
        paddingRight: 8,
    },
})
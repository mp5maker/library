import React from 'react'

import { StyleSheet } from 'react-native'

/* Styles */
import { Colors } from '../../styles/Colors'

interface BasePropsInterface {}
interface BaseStateInterface {
    list: Array<any>
}

export default class Base extends React.Component<BasePropsInterface, BaseStateInterface> {
    constructor(props: BasePropsInterface) {
        super(props)
        this.state = {
            list: []
        }
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.khaki
    },
    commonHeader: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        backgroundColor: Colors.khaki,
        alignItems: `center`
    },
    commonHeaderLeft: {
        marginLeft: 8,
        marginTop: 12,
    },
    commonHeaderRight: {
        marginRight: 18,
    },
    heading: {
        color: Colors.green,
        fontSize: 16,
        height: 40,
    },
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.khaki
    },
    cardItemContainer: {
        flex: 1,
        backgroundColor: Colors.khaki,
        borderWidth: 1,
        borderColor: Colors.darkGrey,
        borderStyle: `dashed`,
        borderRadius: 5,
        marginBottom: 12,
        marginRight: 12,
        padding: 5
    },
    textHeading: {
        color: Colors.darkGreen,
        fontSize: 18
    },
    textDescription: {
        color: Colors.green,
        fontSize: 14,
    }
})



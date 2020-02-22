import React from 'react'

import { StyleSheet } from 'react-native'

/* Styles */
import { Colors } from '../../styles/Colors'

interface BasePropsInterface {}
interface BaseStateInterface {
    list: Array<any>,
    displayMode: string
}

export default class Base extends React.Component<BasePropsInterface, BaseStateInterface> {
    constructor(props: BasePropsInterface) {
        super(props)
        this.state = {
            list: [],
            displayMode: `row`
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView({ displayMode }: any) {
        this.setState({ displayMode })
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
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
    },
    commonHeaderButton: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: Colors.darkGreen,
        marginLeft: 8,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
    },
    commonHeaderButtonText: {
        color: Colors.khaki
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



import React from 'react'

import { StyleSheet } from 'react-native'

/* Styles */
import { Colors } from '../../styles/Colors'

interface BasePropsInterface {}
interface BaseStateInterface {
    list: Array<any>,
    displayMode: string,
    showForm: boolean
}

export default class Base extends React.Component<BasePropsInterface, BaseStateInterface> {
    constructor(props: BasePropsInterface) {
        super(props)
        this.state = {
            list: [],
            displayMode: `row`,
            showForm: false
        }
        this.changeView = this.changeView.bind(this)
        this.add = this.add.bind(this)
        this.toggleHideShowForm = this.toggleHideShowForm.bind(this)
    }

    toggleHideShowForm() {
        this.setState({ showForm: !this.state.showForm })
    }

    add({ item }: any) {
        this.setState({
            list: [
                item,
                ...this.state.list
            ]
        })
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



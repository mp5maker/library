import React from 'react'
import { StyleSheet } from 'react-native'
import  get from 'lodash/get'

/* Styles */
import { Colors } from '../../styles/Colors'
import { Fonts } from '../../styles/Fonts'

interface BasePropsInterface {
    navigation?: any,
}

interface BaseStateInterface {
    list?: Array<any>,
    displayMode?: string,
    showForm?: boolean,
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
        this.goToDetails = this.goToDetails.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
    }

    openDrawer() {
        console.log(`drawer`)
    }

    goToDetails({ item, path }) {
        this.props.navigation.navigate(path, {
            ...item
        })
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
        fontSize: 18,
        fontFamily: Fonts.fontFamily,
    },
    textDescription: {
        color: Colors.green,
        fontSize: 14,
        fontFamily: Fonts.fontFamily,
    }
})



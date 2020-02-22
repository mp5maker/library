import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

/* Styles */
import { Colors } from '../../../styles/Colors';
import { Fonts } from '../../../styles/Fonts';

interface BaseDetailsPropsInterface {
    navigation: any,
    route: any
}

interface BaseDetailsStateInterface { }

export default class Base extends React.Component<BaseDetailsPropsInterface, BaseDetailsStateInterface> {
    constructor(props: any) {
        super(props)
        this.goBack = this.goBack.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
    }

    openDrawer() {
        this.props.navigation.openDrawer();
    }

    goBack() {
        this.props.navigation.goBack();
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.khaki,
    },
    detailsContent: {
        backgroundColor: Colors.khaki,
        flex: 1,
        marginLeft: 8,
        display: `flex`,
        alignItems: `flex-start`,
        justifyContent: `flex-start`
    },
    detailsText: {
        fontSize: 16,
        fontFamily: Fonts.fontFamily,
    }
})
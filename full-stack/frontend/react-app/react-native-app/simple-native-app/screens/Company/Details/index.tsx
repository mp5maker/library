import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import get from 'lodash/get'

/* Component */
import { CommonHeader } from '../../../components/CommonHeader'

/* Styles */
import { Colors } from '../../../styles/Colors';
import { Fonts } from '../../../styles/Fonts';

interface CompanyDetailsPropsInterface {
    navigation: any,
    route: any
}

interface CompanyDetailsStateInterface {}

export default class EmployeeDetails extends React.Component<CompanyDetailsPropsInterface, CompanyDetailsStateInterface> {
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

    render() {
        const {
            navigation,
            route
        } = this.props

        const name = get(route, 'params.name', '')

        return (
            <View style={styles.container}>
                <CommonHeader
                    title={`Company Details`}
                    onBackPress={this.goBack}
                    onDrawerPress={this.openDrawer}
                    list={[
                        'back',
                        'drawer'
                    ]} />
                <View style={styles.detailsContent}>
                    {
                        name ? (
                            <Text style={styles.detailsText}>
                                Name: { name }
                            </Text>
                        ) : <React.Fragment></React.Fragment>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
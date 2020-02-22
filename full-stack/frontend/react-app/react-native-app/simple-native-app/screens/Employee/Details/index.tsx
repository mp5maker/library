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

interface EmployeeDetailsPropsInterface {
    navigation: any,
    route: any
}

interface EmployeeDetailsStateInterface {}

export default class EmployeeDetails extends React.Component<EmployeeDetailsPropsInterface, EmployeeDetailsStateInterface> {
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
        const email = get(route, 'params.email', '')
        const age = get(route, 'params.age', '')

        return (
            <View style={styles.container}>
                <CommonHeader
                    title={`Employee Details`}
                    onBackPress={this.goBack}
                    onDrawerPress={this.openDrawer}
                    list={[
                        'back',
                        'drawer',
                    ]} />
                <View style={styles.detailsContent}>
                    {
                        name ? (
                            <Text style={styles.detailsText}>
                                Name: { name }
                            </Text>
                        ) : <React.Fragment></React.Fragment>
                    }
                    {
                        email ? (
                            <Text style={styles.detailsText}>
                                Email: { email }
                            </Text>
                        ) : <React.Fragment></React.Fragment>
                    }
                    {
                        age ? (
                            <Text style={styles.detailsText}>
                                Age: { age }
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
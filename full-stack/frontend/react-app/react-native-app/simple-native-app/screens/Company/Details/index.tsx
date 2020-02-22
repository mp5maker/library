import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../../Base/Details'

/* Component */
import { CommonHeader } from '../../../components/CommonHeader'

export default class EmployeeDetails extends Base {
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
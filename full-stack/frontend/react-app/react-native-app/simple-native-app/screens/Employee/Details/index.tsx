import React from 'react';
import {
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
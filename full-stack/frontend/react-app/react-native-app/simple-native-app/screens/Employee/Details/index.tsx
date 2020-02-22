import React from 'react';
import {
    Text,
    View,
    Modal
} from 'react-native'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../../Base/Details'

/* Component */
import { CommonHeader } from '../../../components/CommonHeader'

/* Forms  */
import { EmployeeForm } from '../../../forms/Employee'

export default class EmployeeDetails extends Base {
    render() {
        const {
            navigation,
            route
        } = this.props

        const {
            showEditForm
        } = this.state

        const name = get(route, 'params.name', '')
        const email = get(route, 'params.email', '')
        const age = Number(get(route, 'params.age', 0.00)).toFixed(2)

        return (
            <View style={styles.container}>
                <Modal
                    animationType={`slide`}
                    visible={showEditForm}>
                    <EmployeeForm
                        title={`Edit Employee`}
                        submitValue={`Edit`}
                        onChange={this.showEdit}
                        defaultValue={{ name, email, age }}
                        setValue={{ name, email, age }} />
                </Modal>
                <CommonHeader
                    title={`Employee Details`}
                    onBackPress={this.goBack}
                    onDrawerPress={this.openDrawer}
                    onEditPress={this.showEdit}
                    list={[
                        'back',
                        'drawer',
                        'edit'
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
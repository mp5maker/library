import React from 'react';
import {
    Modal,
    Text,
    View,
} from 'react-native'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../../Base/Details'

/* Component */
import { CommonHeader } from '../../../components/CommonHeader'

/* Forms  */
import { CompanyForm } from '../../../forms/Company'

export default class CompanyDetails extends Base {
    render() {
        const {
            navigation,
            route
        } = this.props

        const {
            showEditForm
        } = this.state

        const name = get(route, 'params.name', '')

        return (
            <View style={styles.container}>
                <Modal
                    animationType={`slide`}
                    visible={showEditForm}>
                    <CompanyForm
                        title={`Edit Company`}
                        submitValue={`Edit`}
                        onChange={this.showEdit}
                        defaultValue={{ name }}
                        setValue={{ name }} />
                </Modal>
                <CommonHeader
                    title={`Company Details`}
                    onEditPress={this.showEdit}
                    onBackPress={this.goBack}
                    onDrawerPress={this.openDrawer}
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
                </View>
            </View>
        )
    }
}
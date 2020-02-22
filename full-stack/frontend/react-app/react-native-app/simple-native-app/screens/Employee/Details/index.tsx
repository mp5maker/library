import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import get from 'lodash/get'

/* Component */
import { CommonHeader } from '../../../components/CommonHeader'

interface EmployeeDetailsPropsInterface {
    navigation: any
}
interface EmployeeDetailsStateInterface {}

export default class EmployeeDetails extends React.Component<EmployeeDetailsPropsInterface, EmployeeDetailsStateInterface> {
    constructor(props: any) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <CommonHeader
                        title={`Employee Details`}
                        onBackPress={this.goBack}
                        list={['back']} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
import React from 'react';
import {
    Text,
    View,
} from 'react-native'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../../Base'

/* Component */
import { CommonHeader } from '../../../components/CommonHeader'

interface EmployeeDetailsPropsInterface {}
interface EmployeeDetailsStateInterface {}

export default class EmployeeDetails extends React.Component<EmployeeDetailsPropsInterface, EmployeeDetailsStateInterface> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>
                    Details
                </Text>
            </View>
        )
    }
}


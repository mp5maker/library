import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import Faker from 'faker'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../Base/List'

/* Component */
import { CommonHeader } from '../../components/CommonHeader'
import { CardCollection } from '../../components/CardCollection'

/* Forms */
import { EmployeeForm } from '../../forms/Employee'

export const employees = [...new Array(20)].map(() => {
    const maxAge = Math.floor(90) ;
    const minAge = Math.ceil(18)

    return {
        alias: Faker.random.uuid(),
        name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
        email: Faker.internet.email(),
        age: Math.floor(Math.random() * (maxAge - maxAge) + minAge),
    }
})

export default class Employee extends Base {
    constructor(props: any) {
        super(props)
        this.state = {
            list: employees,
            displayMode: `row`,
            showForm: false
        }
    }

    render() {
        const {
            list,
            displayMode,
            showForm
        } = this.state

        const cardCollectionProps = {
            ...(displayMode == 'column' ? { numColumns: 2 } : {})
        }

        return (
            <View style={styles.container}>
                {
                    showForm ? (
                        <EmployeeForm
                            title={`Add Employee`}
                            submitValue={`Add`}
                            onChange={this.add} />
                    ) : <React.Fragment></React.Fragment>
                }
                <CommonHeader
                    title={`Employee List`}
                    onRowPress={() => this.changeView({ displayMode: `row` })}
                    onColumnPress={() => this.changeView({ displayMode: `column` })}
                    onFormHideShowPress={this.toggleHideShowForm}
                    onDrawerPress={this.openDrawer}
                    list={[
                        'row',
                        'column',
                        'drawer',
                        ...(showForm ? ['subtract'] :  ['add'])
                    ]} />
                <View style={styles.cardContainer}>
                    <CardCollection
                        list={list}
                        itemLayout={({ item }) => {
                            const name = get(item, 'name', '')
                            const email = get(item, 'email', '')
                            const age = get(item, 'age', '')

                            return (
                                <TouchableOpacity
                                    onPress={() => this.goToDetails({ item, path: `EmployeeDetails` })}
                                    style={styles.cardItemContainer}>
                                    {
                                        name && (
                                            <Text style={styles.textHeading}>
                                                { name }
                                            </Text>
                                        )
                                    }
                                    {
                                        email && (
                                            <Text style={styles.textDescription}>
                                                { email }
                                            </Text>
                                        )
                                    }
                                    {
                                        age && (
                                            <Text style={styles.textDescription}>
                                                Age: { age }
                                            </Text>
                                        )
                                    }
                                </TouchableOpacity>
                            )
                        }}
                        {...cardCollectionProps} />
                </View>
            </View>
        )
    }
}


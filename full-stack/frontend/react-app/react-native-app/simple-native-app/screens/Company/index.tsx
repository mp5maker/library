import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import Faker from 'faker'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../Base'

/* Component */
import { CommonHeader } from '../../components/CommonHeader'
import { CardCollection } from '../../components/CardCollection'

/* Forms */
import { CompanyForm } from '../../forms/Company'

export const employees = [...new Array(20)].map(() => {
    return {
        alias: Faker.random.uuid(),
        name: Faker.company.companyName()
    }
})

export default class Company extends Base {
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
                        <CompanyForm
                            onChange={this.add} />
                    ) : <React.Fragment></React.Fragment>
                }
                <CommonHeader
                    title={`Company List`}
                    onRowPress={() => this.changeView({ displayMode: `row` })}
                    onColumnPress={() => this.changeView({ displayMode: `column` })}
                    onFormHideShowPress={this.toggleHideShowForm}
                    list={[
                        'row',
                        'column',
                        ...(showForm ? ['subtract'] : ['add'])
                    ]} />
                <View style={styles.cardContainer}>
                    <CardCollection
                        list={list}
                        itemLayout={({ item }) => {
                            const name = get(item, 'name', '')

                            return (
                                <TouchableOpacity
                                    onPress={() => this.goToDetails({ item, path: `CompanyDetails` })}
                                    style={styles.cardItemContainer}>
                                    {
                                        name && (
                                            <Text style={styles.textHeading}>
                                                {name}
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


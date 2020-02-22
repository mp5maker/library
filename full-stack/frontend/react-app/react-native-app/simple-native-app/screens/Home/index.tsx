import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import Faker from 'faker'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../Base'

/* Component */
import { CommonHeader } from '../../components/CommonHeader'
import { CardCollection } from '../../components/CardCollection'

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

export default class Home extends Base {
    constructor(props: any) {
        super(props)
        this.state = {
            list: employees,
            displayMode: `row`
        }
    }

    render() {
        const {
            list,
            displayMode
        } = this.state

        const cardCollectionProps = {
            ...(displayMode == 'column' ? { numColumns: 2 } : {})
        }

        return (
            <View style={styles.container}>
                <CommonHeader
                    title={`Home`}
                    onRowPress={() => this.changeView({ displayMode: `row` })}
                    onColumnPress={() => this.changeView({ displayMode: `column` })}
                    list={['row', 'column']} />
                <View style={styles.cardContainer}>
                    <CardCollection
                        list={list}
                        itemLayout={({ item }) => {
                            const name = get(item, 'name', '')
                            const email = get(item, 'email', '')
                            const age = get(item, 'age', '')

                            return (
                                <View style={styles.cardItemContainer}>
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
                                </View>
                            )
                        }}
                        {...cardCollectionProps} />
                </View>
            </View>
        )
    }
}


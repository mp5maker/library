import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'
import Faker from 'faker'
import get from 'lodash/get'

/* Screens */
import Base, { styles } from '../Base'

/* Component */
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
            list: employees
        }
    }

    render() {
        const {
            list
        } = this.state

        return (
            <View style={styles.container}>
                <View style={styles.commonHeader}>
                    <Text style={styles.heading}>
                        Home
                    </Text>
                </View>
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
                    />
                </View>
            </View>
        )
    }
}


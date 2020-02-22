import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

/* Styles */
import { Colors } from '../../styles/Colors'

interface NavigationPropsInterface {}
interface NavigationStateInterface {}

export class Navigation extends React.Component<NavigationPropsInterface, NavigationStateInterface> {
    constructor(props: NavigationPropsInterface) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Employee Management
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        height: 50,
        backgroundColor: Colors.darkGreen,
    },
    heading: {
        textAlign: `center`,
        color: Colors.khaki
    }
})
import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'

/* Styles */
import { Colors } from '../../styles/Colors'
import { Fonts } from '../../styles/Fonts'

/* Image */
const Logo = require('../../assets/img/icon.png')

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
                    <Image
                        style={styles.image}
                        source={Logo} />
                        <Text>  </Text>
                        <Text style={styles.appName}>
                            Employee Management
                        </Text>
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
    image: {
        width: 15,
        height: 15,
    },
    heading: {
        textAlign: `center`,
        color: Colors.khaki,
        fontFamily: Fonts.fontFamily,
    },
    appName: {
        marginLeft: 5
    }
})
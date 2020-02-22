import React from 'react'
import { StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'

import { Colors } from '../../styles/Colors'
import { Fonts } from '../../styles/Fonts'

interface DrawerPropsInterface {
    navigation: any
}

interface DrawerStateInterface {}

export class Drawer extends React.Component<DrawerPropsInterface, DrawerStateInterface> {
    constructor(props: DrawerPropsInterface) {
        super(props)
    }

    render() {
        const { props }: any = this

        return (
            <DrawerContentScrollView
                {...props}>
                <DrawerItem
                    style={styles.drawerItem}
                    label={`Close`}
                    onPress={() => this.props.navigation.closeDrawer()} />
                <DrawerItemList
                    inactiveTintColor={Colors.darkGreen}
                    activeTintColor={Colors.khaki}
                    activeBackgroundColor={Colors.darkGreen}
                    inactiveBackgroundColor={Colors.khaki}
                    { ...props} />
            </DrawerContentScrollView>
        )
    }
}

const styles = StyleSheet.create({
    drawerItem: {
        borderColor: Colors.danger,
        borderWidth: 1,
        borderStyle: `solid`,
    }
})
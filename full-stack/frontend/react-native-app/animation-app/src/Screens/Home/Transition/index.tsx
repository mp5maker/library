import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Cards } from 'Native/Layouts/Cards'

export const TransitionScreen = () => {
    const { t } = useTranslation()
    const [toggle, setToggle] = React.useState(false)

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setToggle(!toggle)}>
                <Text>
                    { t(`ALLOW_ROTATION`) }
                </Text>
            </TouchableOpacity>
            <View style={styles.cardSection}>
                <Cards
                    pivotCenter={true}
                    allowRotation={toggle}
                    list={['Hi', 'Hello', 'Bye']} />
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: `flex-start`,
        justifyContent: `flex-start`
    },
    button: {
        padding: 12,
        margin: 12
    },
    cardSection: {
        position: `relative`,
        margin: 12,
        padding: 12,
        marginTop: 40
    }
});

import * as React from "react"
import { View } from 'react-native'
import { CardView } from "react-native-input-credit-card";

export const CreditCard = (props: any) => {
    return (
        <View>
            <CardView {...props} />
        </View>
    )
}
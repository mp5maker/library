import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

/* Styles */
import { Colors } from '../../styles/Colors'


interface CommonHeaderPropsInterface {
    list: Array<string>,
    title: string,
    onColumnPress: (params: any) => any,
    onRowPress: (params: any) => any
}

interface CommonHeaderStateInterface {}

export const ROW = 'row'
export const COLUMN = 'column'

export class CommonHeader extends React.Component<CommonHeaderPropsInterface, CommonHeaderStateInterface> {
    static propTypes: any
    static defaultProps: any

    constructor(props: CommonHeaderPropsInterface) {
        super(props)
    }

    render() {
        const {
            list,
            onColumnPress,
            onRowPress,
            title,
        } = this.props

        return (
            <View style={styles.commonHeader}>
                <View style={styles.commonHeaderLeft}>
                    <Text style={styles.heading}>
                        { title }
                    </Text>
                </View>
                {
                    list.length > 0 && (
                        <View style={styles.commonHeaderRight}>
                            {
                                list.includes('row') && (
                                    <TouchableOpacity
                                        style={styles.commonHeaderButton}
                                        onPress={onColumnPress}>
                                        <Text style={styles.commonHeaderButtonText}>
                                            C
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                            {
                                list.includes('column') && (
                                    <TouchableOpacity
                                        style={styles.commonHeaderButton}
                                        onPress={onRowPress}>
                                        <Text style={styles.commonHeaderButtonText}>
                                            R
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    )
                }
            </View>
        )
    }
}

CommonHeader.defaultProps = {
    list: [],
    onColumnPress: () => {},
    onRowPress: () => {}
}

CommonHeader.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    onColumnPress: PropTypes.func,
    onRowPress: PropTypes.func
}


const styles = StyleSheet.create({
    commonHeader: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        backgroundColor: Colors.khaki,
        alignItems: `center`,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.darkGrey,
    },
    commonHeaderLeft: {
        marginLeft: 8,
        marginTop: 12,
    },
    heading: {
        color: Colors.green,
        fontSize: 24,
        height: 40,
        fontWeight: "700"
    },
    commonHeaderRight: {
        marginRight: 18,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
    },
    commonHeaderButton: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: Colors.darkGreen,
        marginLeft: 8,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
    },
    commonHeaderButtonText: {
        color: Colors.khaki
    },
})
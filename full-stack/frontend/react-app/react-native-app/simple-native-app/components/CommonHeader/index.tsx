import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons, AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';

/* Styles */
import { Colors } from '../../styles/Colors'
import { Fonts } from '../../styles/Fonts'


interface CommonHeaderPropsInterface {
    list: Array<string>,
    title: string,
    onColumnPress?: (params: any) => any,
    onRowPress?: (params: any) => any,
    onFormHideShowPress?: (params: any) => any,
    onBackPress?: (params: any) => any,
    onDrawerPress?: (params: any) => any,
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
            onFormHideShowPress,
            onBackPress,
            onDrawerPress,
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
                                        <MaterialCommunityIcons
                                            name="table-row"
                                            size={16}
                                            color={Colors.khaki} />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                list.includes('column') && (
                                    <TouchableOpacity
                                        style={styles.commonHeaderButton}
                                        onPress={onRowPress}>
                                        <MaterialCommunityIcons
                                            name="table-column"
                                            size={16}
                                            color={Colors.khaki} />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                (list.includes('add') || list.includes('subtract')) && (
                                    <TouchableOpacity
                                    style={styles.commonHeaderButton}
                                    onPress={onFormHideShowPress}>
                                        <AntDesign
                                            key={list.includes('add') ? `add` : `subtract`}
                                            name={list.includes('add') ? `pluscircleo` : `minuscircleo`}
                                            size={16}
                                            color={Colors.khaki} />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                list.includes('back') && (
                                    <TouchableOpacity
                                        style={styles.commonHeaderButton}
                                        onPress={onBackPress}>
                                        <Feather
                                            name="arrow-left-circle"
                                            size={16}
                                            color={Colors.khaki} />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                list.includes('drawer') && (
                                    <TouchableOpacity
                                        style={styles.commonHeaderButton}
                                        onPress={onDrawerPress}>
                                        <SimpleLineIcons
                                            name="drawer"
                                            size={16}
                                            color={Colors.khaki} />
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
    onRowPress: () => {},
    onFormHideShowPress: () => {}
}

CommonHeader.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    onColumnPress: PropTypes.func,
    onRowPress: PropTypes.func,
    onFormHideShowPress: PropTypes.func
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
        fontWeight: "700",
        fontFamily: Fonts.fontFamily,
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
})
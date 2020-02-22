import * as React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import get from 'lodash/get'
import v4 from 'uuid'

/* Styles */
import { Colors } from '../../styles/Colors'
import { Fonts } from '../../styles/Fonts'

interface CompanyFormPropsInterface {
    onChange: (params: any) => any,
    defaultValue?: any,
    setValue?: any,
    clear?: boolean,
    title?: string,
    submitValue?: string
}

interface CompanyFormStateInterface {
    form: {
        name: string,
    },
    error: {
        name: string,
    },
}

const defaultState = {
    form: {
        name: ``,
    },
    error: {
        name: ``,
    }
}

export class CompanyForm extends React.Component<CompanyFormPropsInterface, CompanyFormStateInterface> {
    constructor(props: CompanyFormPropsInterface) {
        super(props)
        this.setDefault = this.setDefault.bind(this)
        this.clear = this.clear.bind(this)
        this.submit = this.submit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = { ...defaultState }
    }

    onChange({ event }: any) {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            },
            error: {
                ...this.state.error,
                [event.target.name]: ``
            }
        } as Pick<CompanyFormStateInterface, keyof CompanyFormStateInterface>)
    }

    submit() {
        const name = get(this.state, 'form.name', '').trim()

        if (name) {
            if (this.props.onChange) this.props.onChange({
                item: {
                    alias: v4(),
                    ...this.state.form
                }
            })
            this.clear()
        } else {
            this.setState({
                error: {
                    ...this.state.error,
                    ...(name ? {} : { name: `Field is required` }),
                }
            })
            Alert.alert('OOPS!', 'Something seems to be wrong', [
                {
                    text: `Understood`,
                    onPress: () => console.log(`Alert Closed`)
                }
            ])
        }

    }

    clear() {
        this.setState({ ...defaultState })
    }

    setDefault(form: any) {
        this.setState({ form })
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.clear !== prevProps.clear) this.clear()
        if (this.props.setValue !== prevProps.setValue) this.setDefault(this.props.setValue)
    }

    componentDidMount() {
        if (this.props.defaultValue) this.setDefault(this.props.defaultValue)
    }

    render() {
        const {
            error
        } = this.state

        const {
            title,
            submitValue
        } = this.props

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>
                        { title }
                    </Text>
                </View>
                <View>
                    <TextInput
                        value={this.state.form.name}
                        style={styles.textInput}
                        placeholderTextColor={Colors.darkGreen}
                        placeholder={`Name`}
                        autoCompleteType={`off`}
                        onChangeText={(value) => this.onChange({
                            event: {
                                target: {
                                    name: `name`,
                                    value
                                }
                            }
                        })} />
                        {
                            error.name ?  (
                                <Text style={styles.errorMessage}>
                                    { error.name }
                                </Text>
                            ) : <React.Fragment></React.Fragment>
                        }
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.submit}>
                        <Text style={styles.submitButtonText}>
                            { submitValue }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: Colors.darkGrey,
        marginBottom: 8,
    },
    heading: {
        color: Colors.green,
        fontSize: 24,
        height: 40,
        fontWeight: "700",
        fontFamily: Fonts.fontFamily,
    },
    textInput: {
        borderWidth: 1,
        borderColor: Colors.darkGrey,
        borderRadius: 3,
        marginTop: 6,
        marginBottom: 6,
        padding: 5,
        color: Colors.darkGreen,
        fontFamily: Fonts.fontFamily,
    },
    errorMessage: {
        color: Colors.danger,
        fontFamily: Fonts.fontFamily,
    },
    submitButton: {
        backgroundColor: Colors.darkGreen,
        padding: 10,
        borderRadius: 3,
        marginTop: 5,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
    },
    submitButtonText:{
        color: Colors.khaki,
        fontFamily: Fonts.fontFamily,
    }
})
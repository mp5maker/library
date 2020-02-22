import * as React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import get from 'lodash/get'

/* Styles */
import { Colors } from '../../styles/Colors'

interface EmployeeFormPropsInterface {
    onChange: (params: any) => any,
    defaultValue?: any,
    setValue?: any,
    clear?: boolean
}

interface EmployeeFormStateInterface {
    form: {
        name: string,
        age: string,
        email: string
    },
    error: {
        name: string,
        age: string,
        email: string
    },
}

const defaultState = {
    form: {
        name: ``,
        age: ``,
        email: ``
    },
    error: {
        name: ``,
        age: ``,
        email: ``
    }
}

export class EmployeeForm extends React.Component<EmployeeFormPropsInterface, EmployeeFormStateInterface> {
    constructor(props: EmployeeFormPropsInterface) {
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
        } as Pick<EmployeeFormStateInterface, keyof EmployeeFormStateInterface>)
    }

    submit() {
        const name = get(this.state, 'form.name', '').trim()
        const email = get(this.state, 'form.email', '').trim()
        const age = get(this.state, 'form.age', '').trim()

        if (name && email && age) {
            if (this.props.onChange) this.props.onChange({
                item: this.state.form
            })
            this.clear()
        } else {
            this.setState({
                error: {
                    ...this.state.error,
                    ...(name ? {} : { name: `Field is required` }),
                    ...(email ? {} : { email: `Field is required` }),
                    ...(age ? {} : { age: `Field is required` }),
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

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>
                        Add Employee
                    </Text>
                </View>
                <View>
                    <TextInput
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
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Colors.darkGreen}
                        placeholder={`Email`}
                        autoCompleteType={`off`}
                        onChangeText={(value) => this.onChange({
                            event: {
                                target: {
                                    name: `email`,
                                    value
                                }
                            }
                        })} />
                        {
                            error.email ? (
                                <Text style={styles.errorMessage}>
                                    { error.email }
                                </Text>
                            ) : <React.Fragment></React.Fragment>
                        }
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Colors.darkGreen}
                        placeholder={`Age`}
                        autoCompleteType={`off`}
                        onChangeText={(value) => this.onChange({
                            event: {
                                target: {
                                    name: `age`,
                                    value
                                }
                            }
                        })} />
                    {
                        error.age ? (
                            <Text style={styles.errorMessage}>
                                { error.age }
                            </Text>
                        ) : <React.Fragment></React.Fragment>
                    }
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.submit}>
                        <Text style={styles.submitButtonText}>
                            Add
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
        fontSize: 18,
        color: Colors.green,
    },
    textInput: {
        borderWidth: 1,
        borderColor: Colors.darkGrey,
        borderRadius: 3,
        marginTop: 6,
        marginBottom: 6,
        padding: 5,
        color: Colors.darkGreen,
    },
    errorMessage: {
        color: Colors.danger
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
        color: Colors.khaki
    }
})
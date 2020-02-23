import * as React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import get from 'lodash/get'
import v4 from 'uuid'
import { Formik } from 'formik'
import * as yup from 'yup'

/* Styles */
import { Colors } from '../../styles/Colors'
import { Fonts } from '../../styles/Fonts'

export const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().moreThan(18).lessThan(80).required()
})

interface EmployeeFormPropsInterface {
    onChange: (params: any) => any,
    defaultValue?: any,
    setValue?: any,
    title?: string,
    submitValue?: string,
}

interface EmployeeFormStateInterface {}

export class EmployeeForm extends React.Component<EmployeeFormPropsInterface, EmployeeFormStateInterface> {
    constructor(props: EmployeeFormPropsInterface) {
        super(props)
    }

    render() {
        const {
            title,
            submitValue
        } = this.props

        return (
            <View style={styles.container}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{ name: "", email: "", age: "" }}
                    onSubmit={(values, actions) => {
                        const name = get(values, 'name', '').trim()
                        const email = get(values, 'email', '').trim()
                        const age = get(values, 'age', '').trim()

                        if (name && email && age) {
                            if (this.props.onChange) {
                                const item = {
                                    name,
                                    email,
                                    age,
                                    alias: v4()
                                }
                                this.props.onChange({ item })
                                actions.resetForm()
                                Keyboard.dismiss()
                            }
                        } else {
                            Alert.alert('OOPS!', 'Something seems to be wrong', [
                                {
                                    text: `Understood`,
                                    onPress: () => console.log(`Alert Closed`)
                                }
                            ])
                        }
                    }}>
                        {
                            ({ values, handleChange, errors, handleSubmit, touched, handleBlur }) => {

                                const Title = (
                                    <View>
                                        <Text style={styles.heading}>
                                            {title}
                                        </Text>
                                    </View>
                                )

                                const Name = (
                                    <React.Fragment>
                                        <TextInput
                                            value={values.name}
                                            style={styles.textInput}
                                            placeholderTextColor={Colors.darkGreen}
                                            placeholder={`Name`}
                                            autoCompleteType={`off`}
                                            onBlur={handleBlur('name')}
                                            onChangeText={handleChange('name')} />
                                        {
                                            errors.name && touched.name ? (
                                                <Text style={styles.errorMessage}>
                                                    {errors.name}
                                                </Text>
                                            ) : <React.Fragment></React.Fragment>
                                        }

                                    </React.Fragment>
                                )

                                const Email = (
                                    <React.Fragment>
                                        <TextInput
                                            value={values.email}
                                            style={styles.textInput}
                                            placeholderTextColor={Colors.darkGreen}
                                            placeholder={`Email`}
                                            autoCompleteType={`off`}
                                            onBlur={handleBlur('email')}
                                            onChangeText={handleChange('email')} />
                                        {
                                            errors.email && touched.email? (
                                                <Text style={styles.errorMessage}>
                                                    {errors.email}
                                                </Text>
                                            ) : <React.Fragment></React.Fragment>
                                        }
                                    </React.Fragment>
                                )

                                const Age = (
                                    <React.Fragment>
                                        <TextInput
                                            value={values.age}
                                            style={styles.textInput}
                                            placeholderTextColor={Colors.darkGreen}
                                            placeholder={`Age`}
                                            autoCompleteType={`off`}
                                            keyboardType={`numeric`}
                                            onChangeText={handleChange('age')} />
                                        {
                                            errors.age && touched.age ? (
                                                <Text style={styles.errorMessage}>
                                                    {errors.age}
                                                </Text>
                                            ) : <React.Fragment></React.Fragment>
                                        }
                                    </React.Fragment>
                                )

                                const Submit = (
                                    <TouchableOpacity
                                        style={styles.submitButton}
                                        onPress={() => handleSubmit()}>
                                        <Text style={styles.submitButtonText}>
                                            {submitValue}
                                        </Text>
                                    </TouchableOpacity>
                                )

                                return (
                                    <View>
                                        { Title }
                                        { Name }
                                        { Email }
                                        { Age }
                                        { Submit }
                                    </View>
                                )
                            }
                        }
                </Formik>
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
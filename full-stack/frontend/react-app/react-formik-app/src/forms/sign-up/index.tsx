import * as React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'


const TextInput = ({ label, ...props}: any) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>
                {label}
            </label>
            <input
                className="text-input"
                {...field}
                {...props} />
            <div>
                {meta.touched && meta.error ? (
                    <div className="text-danger">
                        {meta.error}
                    </div>
                ) : null}
            </div>
        </>
    );
}

const Checkbox = ({ children, ...props }: any) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                { children }
            </label>
            <div>
                {meta.touched && meta.error ? (
                    <div className="text-danger">
                        {meta.error}
                    </div>
                ) : null}
            </div>
        </>
    );
};

const Select = ({ label, children, ...props }: any) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>
                { children }
            </select>
            <div>
                {meta.touched && meta.error ? (
                    <div className="text-danger">
                        {meta.error}
                    </div>
                ) : null}
            </div>
        </>
    );
};


export const SignUpForm = () => {
    const SubmitButton = (
        <React.Fragment>
            <button type="submit">
                Submit
            </button>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    firstName: ``,
                    lastName: ``,
                    email: '',
                    acceptedTerms: false,
                    jobType: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid Email Address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2))
                }}>
                {
                    (formik) => {
                        const FirstName = (
                            <React.Fragment>
                                <TextInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    placeholder="Jane"
                                />
                            </React.Fragment>
                        )

                        const LastName = (
                            <React.Fragment>
                                <TextInput
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    placeholder="Doe"
                                />
                            </React.Fragment>
                        )

                        const Email = (
                            <React.Fragment>
                                <TextInput
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="jane@formik.com"
                                />
                            </React.Fragment>
                        )

                        const JobType = (
                            <React.Fragment>
                                <Select label="Job Type" name="jobType">
                                    <option value="">Select a job type</option>
                                    <option value="designer">Designer</option>
                                    <option value="development">Developer</option>
                                    <option value="product">Product Manager</option>
                                    <option value="other">Other</option>
                                </Select>
                            </React.Fragment>
                        )

                        const AcceptedTerms = (
                            <React.Fragment>
                                <Checkbox name="acceptedTerms">
                                    I accept the terms and conditions
                                </Checkbox>
                            </React.Fragment>
                        )

                        return (
                            <Form>
                                <div className="row my-3">
                                    <div className="col">
                                        { FirstName }
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        { LastName }
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        { Email }
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        { JobType }
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        { AcceptedTerms }
                                    </div>
                                </div>
                                <div className="row my-3">
                                    { SubmitButton }
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </React.Fragment>
    )
}
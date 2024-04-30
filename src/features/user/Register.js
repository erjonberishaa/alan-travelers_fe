import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import { post } from '../../api/api'
import routes from '../../routes'

function Register() {
    const INITIAL_REGISTER_OBJ = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)

    const saveUser = async () => {
        try {
            await post('users', registerObj)
        } catch (error) {
            throw new Error('Failed to register user.')
        }
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setErrorMessage('')

        if (registerObj.firstName.trim() === '')
            return setErrorMessage('First Name is required!')
        if (registerObj.lastName.trim() === '')
            return setErrorMessage('Last Name is required!')
        if (registerObj.phoneNumber.trim() === '')
            return setErrorMessage('Phone Number is required!')
        if (registerObj.email.trim() === '')
            return setErrorMessage('Email is required!')
        if (registerObj.password.trim() === '')
            return setErrorMessage('Password is required!')

        try {
            setLoading(true)
            await saveUser()
        } catch (error) {
            setErrorMessage('Registration failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('')
        setRegisterObj({ ...registerObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className="">
                        <LandingIntro />
                    </div>
                    <div className="py-24 px-10">
                        <h2 className="text-2xl font-semibold mb-2 text-center">
                            Register
                        </h2>
                        <form onSubmit={submitForm}>
                            <div className="mb-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <InputText
                                            type="text"
                                            defaultValue={registerObj.firstName}
                                            updateType="firstName"
                                            containerStyle="mt-4"
                                            labelTitle="First Name"
                                            updateFormValue={updateFormValue}
                                        />
                                    </div>
                                    <div>
                                        <InputText
                                            type="text"
                                            defaultValue={registerObj.lastName}
                                            updateType="lastName"
                                            containerStyle="mt-4"
                                            labelTitle="Last Name"
                                            updateFormValue={updateFormValue}
                                        />
                                    </div>
                                </div>

                                <InputText
                                    type="phoneNumber"
                                    defaultValue={registerObj.phoneNumber}
                                    updateType="phoneNumber"
                                    containerStyle="mt-4"
                                    labelTitle="Phone Number"
                                    updateFormValue={updateFormValue}
                                />

                                <InputText
                                    type="email"
                                    defaultValue={registerObj.email}
                                    updateType="email"
                                    containerStyle="mt-4"
                                    labelTitle="Email"
                                    updateFormValue={updateFormValue}
                                />

                                <InputText
                                    defaultValue={registerObj.password}
                                    type="password"
                                    updateType="password"
                                    containerStyle="mt-4"
                                    labelTitle="Password"
                                    updateFormValue={updateFormValue}
                                />
                            </div>

                            <ErrorText styleClass="mt-8">
                                {errorMessage}
                            </ErrorText>
                            <button
                                type="submit"
                                className={
                                    'btn mt-2 w-full btn-primary' +
                                    (loading ? ' loading' : '')
                                }
                            >
                                Register
                            </button>

                            <div className="text-center mt-4">
                                Already have an account?{' '}
                                <Link to="/login">
                                    <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                                        Login
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

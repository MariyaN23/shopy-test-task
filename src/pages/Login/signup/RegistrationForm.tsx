import React from 'react';
import {useForm} from '@mantine/form';
import {Button, PasswordInput, TextInput} from '@mantine/core';
import {PasswordStrength} from './PasswordStrength';
import {useActions} from "../../../redux/useActions";
import {loginActions} from "../../../redux/login";
import {useNavigate} from "react-router-dom";
import {path} from "../../../App";

export const RegistrationForm = () => {
    const {registrationFormSending} = useActions(loginActions)
    const navigate = useNavigate()
    const form = useForm({
        mode: 'controlled',
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/.test(value) ? null : 'Invalid password')
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => {
            registrationFormSending(values)
            navigate(path.registrationSuccess)
        })}>
            <TextInput
                label="Email Address"
                placeholder="Email address"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />
            <PasswordInput
                type="password"
                label="Password"
                placeholder="Enter password"
                key={form.key('password')}
                {...form.getInputProps('password')}
            />
            <PasswordStrength password={form.values.password} />
            <Button
                fullWidth
                type="submit"
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                Create Account
            </Button>
        </form>
    );
};
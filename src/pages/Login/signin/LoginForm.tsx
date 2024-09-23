import {useForm} from '@mantine/form';
import React from 'react';
import {Button, PasswordInput, TextInput} from "@mantine/core";
import {useActions} from "../../../redux/useActions";
import {loginActions} from "../../../redux/login";
import {newLoginType} from "../../../redux/login/loginActions";

export const LoginForm = () => {
    const {loginFormSending} = useActions(loginActions)
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
        },
    })

    return (
        <form onSubmit={form.onSubmit((values: newLoginType) => {
            console.log(values)
            loginFormSending(values)
        })}>
            <TextInput
                label="Email Address"
                placeholder="Email address"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />
            <PasswordInput
                label="Password"
                placeholder="Enter password"
                key={form.key('password')}
                {...form.getInputProps('password')}
            />
            <Button
                fullWidth
                type={'submit'}
                style={{marginTop: '20px', marginBottom: '20px'}}>
                Sign In
            </Button>
        </form>
    );
};
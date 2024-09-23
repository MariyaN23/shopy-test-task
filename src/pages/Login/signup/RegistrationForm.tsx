import React from 'react';
import { useForm } from '@mantine/form';
import {Button, PasswordInput, TextInput} from '@mantine/core';
import { PasswordStrength } from './PasswordStrength';

export const RegistrationForm = () => {
    const form = useForm({
        mode: 'controlled',
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => {
            console.log(values); // Здесь будет правильное значение пароля
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
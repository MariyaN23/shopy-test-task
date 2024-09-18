import {PasswordInput, PasswordInputProps} from '@mantine/core';
import React, {useState} from 'react';

export const CustomPasswordInput: React.FC<PasswordInputProps> = (props) => {
    const [value, setValue] = useState('')
    return (
        <PasswordInput {...props}
                   value={value}
                   onChange={(event) => setValue(event.currentTarget.value)}/>
    )
};
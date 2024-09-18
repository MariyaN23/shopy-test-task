import {TextInput, TextInputProps} from '@mantine/core';
import React, {useState} from 'react';

export const CustomInput: React.FC<TextInputProps> = (props) => {
    const [value, setValue] = useState('')
    return (
        <TextInput {...props}
                   value={value}
                   onChange={(event) => setValue(event.currentTarget.value)}/>
    )
};
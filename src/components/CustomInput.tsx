import {TextInput, TextInputProps} from '@mantine/core';
import React from 'react';

export const CustomInput: React.FC<TextInputProps> = (props) => {
    return (
        <TextInput {...props}/>
    )
};
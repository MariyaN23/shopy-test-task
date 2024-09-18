import React from 'react';
import {Text, TextProps} from '@mantine/core';

interface CustomTextProps extends TextProps {
    children: React.ReactNode
}

export const CustomText: React.FC<CustomTextProps> = ({ children, ...props }) => {
    return (
        <Text {...props}>
            {children}
        </Text>
    );
};
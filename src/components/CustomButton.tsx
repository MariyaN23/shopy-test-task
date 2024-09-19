import {Button, ButtonProps} from '@mantine/core';
import React from 'react';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode
    onClick?: () => void
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>
}
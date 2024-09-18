import React from 'react';
import {Title, TitleProps} from '@mantine/core';

export const CustomTitle: React.FC<TitleProps> = ({ children, ...props }) => {
    return (
        <Title {...props}>
            {children}
        </Title>
    );
};
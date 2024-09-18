import React from 'react';
import {Image, ImageProps} from '@mantine/core';

export const CustomImage: React.FC<ImageProps> = (props) => {
    return (
        <Image {...props}/>
    );
};
import React from 'react';
import {Anchor, AnchorProps} from "@mantine/core";

interface CustomAnchorProps extends AnchorProps {
    children: React.ReactNode
    href: string
}

export const CustomAnchor: React.FC<CustomAnchorProps> = ({ children, ...props }) => {
    return (
        <Anchor {...props} target="_blank">
            {children}
        </Anchor>
    )
};
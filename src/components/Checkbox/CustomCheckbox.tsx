import React, {useState} from 'react';
import {Checkbox, CheckboxProps} from "@mantine/core";
import {CustomText} from "../CustomText";
import s from './CustomCheckbox.module.css'

interface CustomCheckboxProps extends CheckboxProps {
    children: React.ReactNode
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({children}) => {
    const [checked, setChecked] = useState(false)
    return (
        <div className={s.CheckboxAndText}>
            <Checkbox
                radius="xl"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}/>
            <CustomText c="dimmed">{children}</CustomText>
        </div>
    );
};
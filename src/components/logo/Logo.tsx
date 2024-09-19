import React from 'react';
import {CustomImage} from "../CustomImage";
import logo from "../../images/logo.svg";
import {CustomTitle} from "../CustomTitle";
import s from '../../pages/Header/Header.module.css'

export const Logo = () => {
    return (
        <div className={s.logoContainer}>
            <CustomImage src={logo} className={s.logo}/>
            <CustomTitle order={2}>Shopy</CustomTitle>
        </div>
    );
};
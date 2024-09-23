import React from 'react';
import s from "../Login.module.css";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {CustomAnchor} from "../../../components/CustomAnchor";
import {path} from "../../../App";
import {RegistrationForm} from "./RegistrationForm";

export const SignUpComponent = () => {
    return (
        <div className={s.login}>
            <CustomTitle order={2} style={{marginBottom: '20px'}}>Sign Up</CustomTitle>
            <RegistrationForm/>
            <div className={s.signIn}>
                <CustomText children={'Have an account?'}/>
                <CustomAnchor href={path.signIn}>Sign In</CustomAnchor>
            </div>
        </div>
    );
};
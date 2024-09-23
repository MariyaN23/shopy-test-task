import React from 'react';
import s from "../Login.module.css";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {CustomAnchor} from "../../../components/CustomAnchor";
import {path} from "../../../App";
import {LoginForm} from "./LoginForm";

export const SignInComponent = () => {
    return (
        <div className={s.login}>
            <CustomTitle order={2} style={{marginBottom: '20px'}}>Sign In</CustomTitle>
            <LoginForm/>
            <div className={s.signIn}>
                <CustomText children={`Don't have an account?`}/>
                <CustomAnchor href={path.signUp}>Sign Up</CustomAnchor>
            </div>
        </div>
    );
};
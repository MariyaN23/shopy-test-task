import React from 'react';
import s from "../Login.module.css";
import {LoginInfo} from "../LoginInfo";
import {SignInComponent} from "./SignInComponent";

export const SingInPage = () => {
    return (
        <div className={s.signUp}>
            <div className={s.formWrapper}>
                <SignInComponent/>
            </div>
            <LoginInfo/>
        </div>
    );
};
import React from 'react';
import s from "../Login.module.css";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {CustomInput} from "../../../components/CustomInput";
import {CustomPasswordInput} from "../../../components/CustomPasswordInput";
import {CustomButton} from "../../../components/CustomButton";
import {CustomAnchor} from "../../../components/CustomAnchor";
import {path} from "../../../App";

export const SignInComponent = () => {
    return (
        <div className={s.login}>
            <CustomTitle order={2} style={{marginBottom: '20px'}}>Sign In</CustomTitle>

            <CustomText children={'Email Address'} fw={500}/>
            <CustomInput placeholder={'Email address'} style={{marginBottom: '20px'}}/>

            <CustomText children={'Password'} fw={500}/>
            <CustomPasswordInput placeholder={'Enter password'} type={'password'}
                                 style={{marginBottom: '20px'}}/>

            <CustomButton fullWidth style={{margin: '30px 0'}}>Sign In</CustomButton>

            <div className={s.signIn}>
                <CustomText children={`Don't have an account?`}/>
                <CustomAnchor href={path.signIn}>Sign Up</CustomAnchor>
            </div>
        </div>
    );
};
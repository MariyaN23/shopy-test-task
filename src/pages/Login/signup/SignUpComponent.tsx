import React from 'react';
import s from "../Login.module.css";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {CustomInput} from "../../../components/CustomInput";
import {CustomPasswordInput} from "../../../components/CustomPasswordInput";
import {CustomCheckbox} from "../../../components/Checkbox/CustomCheckbox";
import {CustomButton} from "../../../components/CustomButton";
import {CustomAnchor} from "../../../components/CustomAnchor";

export const SignUpComponent = () => {
    return (
        <div className={s.login}>
            <CustomTitle order={2} style={{marginBottom: '20px'}}>Sign Up</CustomTitle>

            <CustomText children={'Email Address'} fw={500}/>
            <CustomInput placeholder={'Email address'} style={{marginBottom: '20px'}}/>

            <CustomText children={'Password'} fw={500}/>
            <CustomPasswordInput placeholder={'Enter password'} type={'password'}
                                 style={{marginBottom: '20px'}}/>

            <div>
                <CustomCheckbox>Must be at least 8 characters</CustomCheckbox>
                <CustomCheckbox>Must contain at least 1 number</CustomCheckbox>
                <CustomCheckbox>Must contain lowercase and capital letters</CustomCheckbox>
            </div>
            <CustomButton fullWidth style={{margin: '30px 0'}}>Create Account</CustomButton>

            <div className={s.signIn}>
                <CustomText children={'Have an account?'}/>
                <CustomAnchor href={'/signin'}>Sign In</CustomAnchor>
            </div>
        </div>
    );
};
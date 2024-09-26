import React from 'react';
import {CustomImage} from "../../../../components/CustomImage";
import success from "../../../../images/PartyPopper.svg";
import {CustomTitle} from "../../../../components/CustomTitle";
import {CustomText} from "../../../../components/CustomText";
import {NavLink} from "react-router-dom";
import {path} from "../../../../App";
import {CustomButton} from "../../../../components/CustomButton";
import {Logo} from "../../../../components/logo/Logo";
import s from "./RegistrationSuccess.module.css"

export const RegistrationSuccess = () => {
    return (
        <div>
            <div className={s.logo}>
                <Logo/>
            </div>
            <div className={s.container}>
                <div className={s.success}>
                    <CustomImage style={{width: '55px', height: '55px'}} src={success}/>
                    <CustomTitle order={3}>Registration Successful</CustomTitle>
                    <CustomText c="dimmed" children={`Now you can sign in!`}/>
                    <NavLink to={path.signIn}>
                        <CustomButton>Go to sign in</CustomButton>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
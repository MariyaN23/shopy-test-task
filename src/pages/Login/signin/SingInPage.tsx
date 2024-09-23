import React from 'react';
import s from "../Login.module.css";
import {LoginInfo} from "../LoginInfo";
import {SignInComponent} from "./SignInComponent";
import {selectIsAuthorised} from "../../../redux/login/loginSelector";
import {Navigate} from "react-router-dom";
import {path} from "../../../App";
import {useSelector} from "react-redux";

export const SingInPage = () => {
    const isAuthorised = useSelector(selectIsAuthorised)
    return isAuthorised ? <Navigate to={path.userProducts}/>
        : <div className={s.signUp}>
            <div className={s.formWrapper}>
                <SignInComponent/>
            </div>
            <LoginInfo/>
        </div>
};